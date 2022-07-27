import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"

const progressColor = (percentage: number) => {
  if (percentage >= 0 && percentage <= 33) {
    return "#fc0303"
  } else if (percentage > 33 && percentage <= 66) {
    return "#fca103"
  } else {
    return "#03fc07"
  }
}

type RoundedProgressBarProps = {
  value: number
}

export const RoundedProgressBar = (props: RoundedProgressBarProps) => {
  return (
    <CircularProgressbarWithChildren
      value={props.value}
      background
      backgroundPadding={8}
      styles={buildStyles({
        rotation: props.value / 100,
        strokeLinecap: "butt",
        pathTransitionDuration: 0.5,
        pathColor: progressColor(props.value),
        backgroundColor: "#0d1026",
      })}
    >
      <div className="flex align-middle justify-center">
        <h1 className="text-xs" style={{ color: progressColor(props.value) }}>
          {props.value}
        </h1>
      </div>
    </CircularProgressbarWithChildren>
  )
}
