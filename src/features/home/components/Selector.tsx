import { useState } from "react"

export type Option = {
  label: string
  value: string | number
}

type SelectorProps = {
  options: Option[]
  onChangeSelection: (value: string | number) => void
  defaultValue?: string | number
}

export const Selector = (props: SelectorProps) => {
  const [selected, setSelected] = useState(
    props.defaultValue ? props.defaultValue : props.options[0].value
  )

  const handleChangeSelection = (option: Option) => {
    setSelected(option.value)
    props.onChangeSelection(option.value)
  }

  return (
    <div className="border-amber-600 border rounded-full flex h-7 mt-1">
      {props.options.map((selection) => (
        <div
          className={`font-bold px-2 rounded-full ${
            selected === selection.value ? "text-slate-50 bg-amber-600" : ""
          }`}
          onClick={() => handleChangeSelection(selection)}
          key={selection.value}
        >
          {selection.label}
        </div>
      ))}
    </div>
  )
}
