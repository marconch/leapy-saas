"use client"

import * as React from "react"
import { Reveal, useScrollProgress } from "@/components/site/motion"
import { ShotFrame, Tag } from "@/components/site/ui"

import { CHAIN } from "./chain-data"

const N = CHAIN.length

export function ChainScrolly() {
  const [active, setActive] = React.useState(0)
  const ref = useScrollProgress<HTMLDivElement>("track", (p) => {
    const next = Math.min(N - 1, Math.floor(p * N))
    setActive((cur) => (cur === next ? cur : next))
  })

  return (
    <>
      {/* 桌面：sticky 滚动叙事 */}
      <div ref={ref} className="relative hidden h-[540vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="wrap flex flex-1 flex-col pb-[clamp(20px,3vh,40px)] pt-[calc(var(--header-h)+clamp(8px,2vh,24px))]">
            {/* 进度轨 */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-[5px] h-px bg-white/15" />
              <div
                className="absolute left-0 right-0 top-[5px] h-px origin-left bg-red"
                style={{ transform: "scaleX(var(--p, 0))" }}
              />
              <ol className="relative grid grid-cols-6">
                {CHAIN.map((step, i) => (
                  <li key={step.key} className="flex flex-col gap-3">
                    <span
                      className={`h-[11px] w-[11px] border transition-colors duration-500 ${
                        i <= active ? "border-red bg-red" : "border-white/30 bg-ink"
                      }`}
                    />
                    <span
                      className={`eyebrow transition-colors duration-500 ${i === active ? "text-paper" : "text-white/35"}`}
                    >
                      {String(i + 1).padStart(2, "0")} {step.zh}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-10">
              {/* 文案 */}
              <div className="relative col-span-4 h-[min(60vh,560px)]">
                {CHAIN.map((step, i) => {
                  const state = i === active ? "on" : i < active ? "past" : "next"
                  return (
                    <div
                      key={step.key}
                      aria-hidden={state !== "on"}
                      className={`absolute inset-0 flex flex-col justify-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                        state === "on"
                          ? "opacity-100"
                          : state === "past"
                            ? "pointer-events-none -translate-y-10 opacity-0"
                            : "pointer-events-none translate-y-10 opacity-0"
                      }`}
                    >
                      <span className="eyebrow text-red">
                        {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")} — {step.en}
                      </span>
                      <h3 className="display mt-5 text-[clamp(72px,10vw,184px)] leading-[0.95]">{step.zh}</h3>
                      <p className="mt-7 max-w-[440px] text-[clamp(15px,1.2vw,18px)] leading-[1.8] text-mute-d">
                        {step.desc}
                      </p>
                      <ul className="mt-7 flex flex-col">
                        {step.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-center gap-3 border-t border-white/12 py-3 text-[14px] text-paper/90 last:border-b"
                          >
                            <span className="h-[5px] w-[5px] bg-red" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* 截图 */}
              <div className="relative col-span-8 aspect-[16/9.6] max-h-[68vh] justify-self-end w-full">
                {CHAIN.map((step, i) => {
                  const state = i === active ? "on" : i < active ? "past" : "next"
                  return (
                    <div
                      key={step.key}
                      aria-hidden={state !== "on"}
                      className={`absolute inset-0 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                        state === "on"
                          ? "opacity-100"
                          : state === "past"
                            ? "-translate-y-8 scale-[.97] opacity-0"
                            : "translate-y-12 scale-[.97] opacity-0"
                      }`}
                    >
                      <ShotFrame src={step.shot} alt={`领跃${step.zh}模块界面：${step.label}`} label={step.label} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端：纵向排布 */}
      <div className="wrap flex flex-col gap-16 pb-20 lg:hidden">
        {CHAIN.map((step, i) => (
          <Reveal key={step.key} className="flex flex-col">
            <Tag index={`${String(i + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`} className="text-paper">
              {step.en}
            </Tag>
            <h3 className="display mt-4 text-[clamp(56px,18vw,96px)]">{step.zh}</h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-mute-d">{step.desc}</p>
            <ShotFrame
              src={step.shot}
              alt={`领跃${step.zh}模块界面：${step.label}`}
              label={step.label}
              className="mt-7"
            />
          </Reveal>
        ))}
      </div>
    </>
  )
}
