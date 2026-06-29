import { NextRequest, NextResponse } from "next/server"
import Database from "better-sqlite3"
import path from "node:path"
import fs from "node:fs"
import { sendLeadEmail, sendCustomerAckEmail } from "@/lib/mailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const DB_DIR = path.join(process.cwd(), "data")
const DB_PATH = path.join(DB_DIR, "leads.db")

// Lazily open a single SQLite connection, cached across hot reloads.
function getDb(): Database.Database {
  const g = globalThis as unknown as { __leadsDb?: Database.Database }
  if (g.__leadsDb) return g.__leadsDb
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true })
  const db = new Database(DB_PATH)
  db.pragma("journal_mode = WAL")
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT NOT NULL,
      phone      TEXT NOT NULL,
      email      TEXT NOT NULL,
      company    TEXT,
      type       TEXT,
      message    TEXT,
      created_at TEXT NOT NULL,
      ip         TEXT,
      user_agent TEXT
    )
  `)
  g.__leadsDb = db
  return db
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "请求格式错误" }, { status: 400 })
  }

  const s = (v: unknown) => (typeof v === "string" ? v.trim() : "")
  const name = s(body.name)
  const phone = s(body.phone)
  const email = s(body.email)

  if (!name || !phone || !email) {
    return NextResponse.json({ ok: false, error: "姓名、电话、邮箱为必填项" }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "邮箱格式不正确" }, { status: 400 })
  }

  const company = s(body.company) || null
  const type = s(body.type) || null
  const message = s(body.message) || null
  const created_at = new Date().toISOString()

  try {
    const db = getDb()
    const info = db
      .prepare(
        `INSERT INTO leads (name, phone, email, company, type, message, created_at, ip, user_agent)
         VALUES (@name, @phone, @email, @company, @type, @message, @created_at, @ip, @user_agent)`
      )
      .run({
        name,
        phone,
        email,
        company,
        type,
        message,
        created_at,
        ip: req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? null,
        user_agent: req.headers.get("user-agent") ?? null,
      })
    const id = Number(info.lastInsertRowid)
    // Best-effort emails — failures here never block the submission (lead is saved).
    // Staff get a notification; the customer gets an acknowledgement reply.
    const lead = { id, name, phone, email, company, type, message, created_at }
    await Promise.all([
      sendLeadEmail(lead).catch((e) => console.error("[contact] notification email failed:", e)),
      sendCustomerAckEmail(lead).catch((e) => console.error("[contact] customer ack email failed:", e)),
    ])
    return NextResponse.json({ ok: true, id })
  } catch (e) {
    console.error("[contact] save failed:", e)
    return NextResponse.json({ ok: false, error: "提交失败，请稍后再试。" }, { status: 500 })
  }
}
