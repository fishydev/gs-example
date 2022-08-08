import { ReactNode } from "react"
import clsx from "clsx"

type CardProps = {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx("pa-2 shadow-md rounded-lg", className)}>
      {children}
    </div>
  )
}
