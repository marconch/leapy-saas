"use client"

import * as React from "react"
import { Lines, Reveal, useScrollProgress } from "@/components/site/motion"
import { ShotFrame, Tag } from "@/components/site/ui"

const SHOTS = [
  {
    no: "A",
    title: "工作台",
    desc: "待办、审批与经营指标汇于一屏，开工即见全局。",
    src: "/shots/workbench.jpg",
    dark: false,
  },
  {
    no: "B",
    title: "工厂全景",
    desc: "三维工厂全景图，实时呈现工单、派工与报工状态。",
    src: "/shots/twin.jpg",
    dark: true,
  },
  {
    no: "C",
    title: "单据联查",
    desc: "从任意一张单据，追溯上下游完整业务链路。",
    src: "/shots/trace.jpg",
    dark: false,
  },
  {
    no: "D",
    title: "任务看板",
    desc: "生产任务看板，派工与进度一目了然。",
    src: "/shots/taskboard.jpg",
    dark: false,
  },
]

// 桌面：纵向滚动驱动横向位移；移动端：原生横向滑动
export function Gallery() {
  const ref = useScrollProgress<HTMLDivElement>("track")
  return (
    <div ref={ref} className="relative lg:h-[360vh]">
      <div className="wrap mb-10 lg:hidden">
        <Tag index="05" className="text-paper">
          Product in action
        </Tag>
        <Lines lines={["所见，", "即真实产品"]} className="title mt-6 text-[clamp(36px,9vw,64px)]" />
        <p className="mt-5 text-[15px] leading-[1.8] text-mute-d">
          以下画面均截取自领跃系统的演示环境，没有效果图，也没有概念稿。
        </p>
      </div>
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <div className="flex w-max items-stretch gap-[clamp(20px,3vw,56px)] px-[var(--gutter)] max-lg:w-auto max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:pb-6 max-lg:[scrollbar-width:none] lg:[transform:translate3d(calc(var(--p,0)*(100vw_-_100%)),0,0)] lg:will-change-transform">
          <div className="hidden w-[34vw] shrink-0 flex-col justify-between gap-10 lg:flex">
            <div>
              <Reveal variant="fade">
                <Tag index="05" className="text-paper">
                  Product in action
                </Tag>
              </Reveal>
              <Lines lines={["所见，", "即真实产品"]} className="title mt-8 text-[clamp(36px,5.2vw,92px)]" />
            </div>
            <Reveal delay={200}>
              <p className="max-w-[380px] text-[clamp(15px,1.15vw,18px)] leading-[1.8] text-mute-d">
                以下画面均截取自领跃系统的演示环境，没有效果图，也没有概念稿。
              </p>
              <span className="eyebrow mt-8 hidden items-center gap-3 text-white/65 lg:inline-flex">
                继续滚动
                <span className="inline-block h-px w-12 bg-white/40" />
              </span>
            </Reveal>
          </div>
          {SHOTS.map((shot) => (
            <figure key={shot.no} data-cursor="滚动" className="flex w-[86vw] shrink-0 snap-start flex-col gap-5 lg:w-[58vw]">
              <ShotFrame src={shot.src} alt={`领跃${shot.title}界面截图`} label={shot.title} dark={shot.dark} />
              <figcaption className="flex items-baseline gap-5 border-t border-white/15 pt-4">
                <span className="eyebrow text-red">{shot.no}</span>
                <span className="font-display text-[clamp(20px,1.8vw,28px)] font-bold tracking-[-0.02em]">
                  {shot.title}
                </span>
                <span className="ml-auto max-w-[56%] text-right text-[13px] leading-[1.7] text-mute-d">{shot.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
