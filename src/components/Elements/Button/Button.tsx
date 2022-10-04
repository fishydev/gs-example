import clsx from "clsx"

type ButtonProps = {
  className?: string
  label: string
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { className, label, disabled } = props

  return (
    <button className={clsx("font-bold", className)} disabled={disabled}>
      {label}
    </button>
  )
}
