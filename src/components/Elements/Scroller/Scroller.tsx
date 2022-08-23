import * as React from "react"

type ScrollerProps = {
  children: React.ReactNode
}

export const Scroller = ({ children }: ScrollerProps) => {
  return <div className="bg-gradient-to-r to-slate-50">{children}</div>
}
