import type { Metadata } from "next"
import { Reveal } from "@/components/site/motion"
import { PageHero } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "服务条款",
  description: "领跃协同制造管理云平台的服务条款，规定了使用我们服务的权利、义务和限制条件。",
}

/* 列表项：纯文本，或 [加粗词, 说明] */
type Item = string | [string, string]
type Block = { h: string } | { p: string } | { ul: Item[] }
type Section = { title: string; blocks: Block[] }

const UPDATED = "2024年12月1日"

const SECTIONS: Section[] = [
  {
    title: "接受条款",
    blocks: [
      {
        p: "欢迎使用领跃协同制造管理云平台（以下简称“本服务”）。本服务由上海逾迈信息科技有限公司（以下简称“我们”或“公司”）提供。通过访问或使用本服务，您同意受本服务条款约束。",
      },
      { p: "如果您不同意这些条款，请不要使用本服务。我们保留随时修改这些条款的权利，修改后的条款将在发布后立即生效。" },
    ],
  },
  {
    title: "服务描述",
    blocks: [
      { p: "领跃协同制造管理云平台是一个为制造企业提供数字化协同管理的多租户 SaaS 平台，主要功能包括：" },
      {
        ul: [
          "供应链管理（采购、销售、库存/WMS）",
          "生产制造（生产工单、BOM、工艺路线、质检）",
          "财务与成本管理（应收应付、对账、凭证、成本核算）",
          "报表中心与经营分析",
          "工作流审批、多租户与权限管理等相关功能",
        ],
      },
      { p: "我们保留随时修改、暂停或终止任何服务功能的权利，恕不另行通知。" },
    ],
  },
  {
    title: "用户账户",
    blocks: [
      { h: "3.1 账户注册" },
      { p: "使用本服务需要创建账户。您必须：" },
      {
        ul: [
          "提供准确、完整、最新的注册信息",
          "保护账户密码的安全性",
          "立即通知我们任何未经授权的账户使用",
          "对您账户下的所有活动承担责任",
        ],
      },
      { h: "3.2 账户使用" },
      { p: "您同意：" },
      {
        ul: [
          "仅为合法商业目的使用本服务",
          "不与他人共享账户凭证",
          "遵守所有适用的法律法规",
          "不尝试破坏或干扰服务的正常运行",
        ],
      },
    ],
  },
  {
    title: "使用限制",
    blocks: [
      { p: "在使用本服务时，您不得：" },
      {
        ul: [
          "违反任何法律、法规或第三方权利",
          "上传或传输恶意软件、病毒或有害代码",
          "尝试未经授权访问我们的系统或网络",
          "干扰或破坏服务的正常运行",
          "逆向工程、反编译或反汇编软件",
          "复制、修改、分发或创建衍生作品",
          "将服务用于竞争性产品开发",
          "超出订阅计划限制使用服务",
        ],
      },
    ],
  },
  {
    title: "知识产权",
    blocks: [
      { h: "5.1 我们的权利" },
      {
        p: "本服务及其所有内容、功能和技术，包括但不限于软件、文本、图像、标识等，均为我们或我们的许可方所有，受著作权、商标权和其他知识产权法保护。",
      },
      { h: "5.2 用户数据" },
      {
        p: "您保留对输入本服务的数据的所有权利。您授予我们使用、处理和存储这些数据以提供服务的许可。我们不会将您的数据用于与服务提供无关的目的。",
      },
    ],
  },
  {
    title: "隐私和数据保护",
    blocks: [
      { p: "我们严格按照隐私政策处理您的个人信息和数据。使用本服务即表示您同意我们的隐私政策。" },
      { p: "我们实施行业标准的安全措施来保护您的数据，但不能保证绝对安全。您有责任定期备份重要数据。" },
    ],
  },
  {
    title: "付费条款",
    blocks: [
      { h: "7.1 订阅费用" },
      { p: "本服务采用订阅制收费模式。费用根据您选择的计划和使用量确定。所有费用均以人民币计价，不含税费。" },
      { h: "7.2 付款条款" },
      {
        ul: [
          "费用须按订阅周期提前支付",
          "逾期付款可能导致服务暂停",
          "除法律规定外，已支付费用不予退还",
          "我们保留调整价格的权利，但会提前通知",
        ],
      },
    ],
  },
  {
    title: "服务可用性",
    blocks: [
      { p: "我们努力保持服务的高可用性，但不保证服务100%无中断。可能因维护、升级或不可抗力因素导致服务暂时不可用。" },
      { p: "我们将努力将计划内停机时间降至最低，并在可能的情况下提前通知用户。" },
    ],
  },
  {
    title: "免责声明",
    blocks: [
      { p: "本服务按“现状”提供，不提供任何明示或暗示的保证。我们不保证服务将满足您的特定需求或完全无错误。" },
      {
        p: "在法律允许的最大范围内，我们不承担因使用或无法使用本服务而产生的任何直接、间接、偶然、特殊或后果性损害的责任。",
      },
    ],
  },
  {
    title: "赔偿",
    blocks: [
      {
        p: "您同意就因您违反本条款或使用服务而产生的任何索赔、损失、费用（包括合理的律师费）对我们进行赔偿和免责。",
      },
    ],
  },
  {
    title: "服务终止",
    blocks: [
      { h: "11.1 终止条件" },
      { p: "在以下情况下，我们可能暂停或终止您的服务：" },
      { ul: ["违反本服务条款", "逾期付款", "涉嫌违法行为", "滥用或恶意使用服务"] },
      { h: "11.2 终止后果" },
      {
        p: "服务终止后，您将无法访问您的账户和数据。我们将在合理期限内保留您的数据，以便您导出，但不承担长期保存义务。",
      },
    ],
  },
  {
    title: "争议解决",
    blocks: [
      {
        p: "本条款受中华人民共和国法律管辖。因本条款产生的任何争议，双方应首先通过友好协商解决；协商不成的，应提交至上海市仲裁委员会按照其仲裁规则进行仲裁。",
      },
    ],
  },
  {
    title: "其他条款",
    blocks: [
      { h: "13.1 完整协议" },
      { p: "本条款构成您与我们之间关于本服务的完整协议，取代之前的所有协议和约定。" },
      { h: "13.2 可分割性" },
      { p: "如果本条款的任何部分被认定为无效或不可执行，其余部分仍然有效。" },
      { h: "13.3 不弃权" },
      { p: "我们未行使或延迟行使任何权利不构成对该权利的放弃。" },
    ],
  },
  {
    title: "联系信息",
    blocks: [
      { p: "如果您对本服务条款有任何疑问，请联系我们：" },
      { ul: ["邮箱：legal@leapingtech.com", "电话：021-62095557", "地址：上海市浦东新区张江高科技园区"] },
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

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        index="—"
        eyebrow="Legal"
        lines={[
          <span key="l1">
            服务<span className="text-red">条款</span>
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
