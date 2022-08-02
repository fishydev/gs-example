import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className="pa-2 shadow-md rounded-lg">{children}</div>
}
