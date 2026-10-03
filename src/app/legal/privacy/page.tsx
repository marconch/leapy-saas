import type { Metadata } from "next"
import { Reveal } from "@/components/site/motion"
import { PageHero } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "隐私政策",
  description: "领跃协同制造管理云平台的隐私政策，详细说明我们如何收集、使用和保护您的个人信息。",
}

/* 列表项：纯文本，或 [加粗词, 说明] */
type Item = string | [string, string]
type Block = { h: string } | { p: string } | { ul: Item[] }
type Section = { title: string; blocks: Block[] }

const UPDATED = "2024年12月1日"

const SECTIONS: Section[] = [
  {
    title: "概述",
    blocks: [
      {
        p: "领跃科技（以下简称“我们”）非常重视用户的隐私保护。本隐私政策详细说明了我们在您使用领跃协同制造管理云平台服务时，如何收集、使用、共享和保护您的个人信息。",
      },
      { p: "在使用我们的服务前，请仔细阅读本隐私政策。如果您不同意本政策的任何内容，请不要使用我们的服务。" },
    ],
  },
  {
    title: "信息收集",
    blocks: [
      { h: "2.1 主动提供的信息" },
      { p: "当您使用我们的服务时，您可能主动向我们提供以下信息：" },
      {
        ul: [
          "账户注册信息：姓名、邮箱地址、电话号码、公司信息",
          "联系信息：通过表单、邮件或电话提供的联系详情",
          "业务信息：采购、销售、库存、生产工单、财务等业务数据，以及单据、工艺路线等信息",
          "支付信息：订单和付款相关信息",
        ],
      },
      { h: "2.2 自动收集的信息" },
      { p: "我们可能自动收集以下技术信息：" },
      {
        ul: [
          "设备信息：IP地址、设备类型、操作系统、浏览器类型",
          "使用信息：访问时间、页面访问记录、功能使用情况",
          "位置信息：基于IP地址的大致地理位置",
        ],
      },
    ],
  },
  {
    title: "信息使用",
    blocks: [
      { p: "我们收集的信息将用于以下目的：" },
      {
        ul: [
          ["服务提供", "为您提供和维护我们的服务"],
          ["客户支持", "响应您的询问和提供技术支持"],
          ["服务改进", "分析使用模式以改进我们的产品和服务"],
          ["安全保障", "检测和防止欺诈、滥用和安全威胁"],
          ["法律合规", "遵守适用的法律法规要求"],
          ["营销推广", "向您发送产品更新和营销信息（经您同意）"],
        ],
      },
    ],
  },
  {
    title: "信息共享",
    blocks: [
      { p: "我们不会出售您的个人信息。在以下有限情况下，我们可能会共享您的信息：" },
      {
        ul: [
          ["服务提供商", "与帮助我们提供服务的第三方合作伙伴"],
          ["法律要求", "根据法律法规或司法程序的要求"],
          ["业务转让", "在合并、收购或资产转让的情况下"],
          ["用户同意", "获得您明确同意的其他情况"],
        ],
      },
    ],
  },
  {
    title: "数据安全",
    blocks: [
      { p: "我们采取多种安全措施来保护您的个人信息：" },
      {
        ul: [
          "数据加密：传输和存储中的数据均采用加密技术",
          "访问控制：严格限制对个人信息的访问权限",
          "安全监控：持续监控系统安全状态",
          "定期审核：定期进行安全评估和漏洞扫描",
          "员工培训：定期对员工进行隐私保护培训",
        ],
      },
    ],
  },
  {
    title: "您的权利",
    blocks: [
      { p: "根据适用的隐私法律，您享有以下权利：" },
      {
        ul: [
          ["访问权", "要求获取我们持有的您的个人信息副本"],
          ["更正权", "要求更正不准确或不完整的个人信息"],
          ["删除权", "在特定情况下要求删除您的个人信息"],
          ["限制权", "要求限制对您个人信息的处理"],
          ["反对权", "反对基于合法利益进行的处理"],
          ["可携权", "要求以结构化格式接收您的个人信息"],
        ],
      },
    ],
  },
  {
    title: "Cookie和类似技术",
    blocks: [
      {
        p: "我们使用Cookie和类似技术来改善您的用户体验、分析网站流量并提供个性化服务。您可以通过浏览器设置管理Cookie偏好。",
      },
    ],
  },
  {
    title: "数据保留",
    blocks: [
      {
        p: "我们仅在必要的时间内保留您的个人信息，保留期限取决于信息的类型和使用目的。一般情况下，账户信息在账户注销后保留3年，业务数据根据合同约定保留。",
      },
    ],
  },
  {
    title: "未成年人保护",
    blocks: [
      {
        p: "我们的服务主要面向企业用户，不故意收集18岁以下未成年人的个人信息。如果我们发现收集了未成年人信息，将立即删除。",
      },
    ],
  },
  {
    title: "政策更新",
    blocks: [
      {
        p: "我们可能会不时更新本隐私政策。重大变更将通过邮件或网站通知您。继续使用我们的服务表示您接受更新后的政策。",
      },
    ],
  },
  {
    title: "联系我们",
    blocks: [
      { p: "如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：" },
      { ul: ["邮箱：privacy@leapingtech.com", "电话：021-62095557", "地址：上海市普陀区宁夏路201号"] },
    ],
  },
]

const no = (i: number) => String(i + 1).padStart(2, "0")

function renderBlock(block: Block, key: number) {
  if ("h" in block) {
    return (
      <h3 key={key} className="title mt-10 text-[clamp(18px,1.5vw,22px)] first:mt-0">
        {block.h}
      </h3>
    )
  }
  if ("p" in block) {
    return (
      <p key={key} className="mt-4 text-[clamp(15px,1.1vw,17px)] leading-[1.95] text-ink/80 first:mt-0">
        {block.p}
      </p>
    )
  }
  return (
    <ul key={key} className="mt-5 border-t border-line">
      {block.ul.map((item, i) => (
        <li
          key={i}
          className="flex gap-3.5 border-b border-line py-3.5 text-[clamp(15px,1.1vw,17px)] leading-[1.75] text-ink/80"
        >
          <span aria-hidden className="mt-[0.72em] h-[5px] w-[5px] shrink-0 bg-red" />
          <span>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong className="font-semibold text-ink">{item[0]}</strong>：{item[1]}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        index="—"
        eyebrow="Legal"
        lines={[
          <span key="l1">
            隐私<span className="text-red">政策</span>
          </span>,
        ]}
        desc={metadata.description}
        meta={[
          { label: "最后更新时间", value: UPDATED },
          { label: "章节", value: no(SECTIONS.length - 1) },
        ]}
      />

      <section className="bg-paper">
        <div className="wrap grid gap-x-10 gap-y-14 py-[clamp(56px,8vw,128px)] lg:grid-cols-12">
          {/* 章节目录 */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <nav aria-label="章节目录" className="lg:sticky lg:top-28">
              <p className="eyebrow flex items-center gap-3 text-mute">
                <span aria-hidden className="inline-block h-[7px] w-[7px] bg-red" />
                Contents
              </p>
              <ol className="mt-5 grid grid-cols-1 border-t border-ink sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-1">
                {SECTIONS.map((s, i) => (
                  <li key={s.title} className="border-b border-line">
                    <a
                      href={`#s-${i + 1}`}
                      className="group flex items-baseline gap-4 py-2.5 text-[14px] text-ink/75 transition-colors hover:text-red"
                    >
                      <span className="eyebrow text-mute transition-colors group-hover:text-red">{no(i)}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* 正文 */}
          <article className="min-w-0 lg:col-span-8 xl:col-start-5">
            <div className="max-w-[720px]">
              {SECTIONS.map((s, i) => (
                <Reveal
                  as="section"
                  key={s.title}
                  id={`s-${i + 1}`}
                  className="scroll-mt-28 border-t border-ink pb-[clamp(48px,6vw,88px)] pt-5 last:pb-0"
                >
                  <span aria-hidden className="eyebrow text-red">
                    {no(i)} / {no(SECTIONS.length - 1)}
                  </span>
                  <h2 className="title mt-4 text-[clamp(26px,3vw,44px)]">
                    <span className="sr-only">{i + 1}. </span>
                    {s.title}
                  </h2>
                  <div className="mt-7">{s.blocks.map(renderBlock)}</div>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
