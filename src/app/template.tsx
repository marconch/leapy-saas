// 路由切换转场：红/墨双层幕布向上收起，内容随后浮入
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden className="page-curtain" />
      <div className="page-in">{children}</div>
    </>
  )
}
