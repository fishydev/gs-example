import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

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
    <CircularProgressbar
      value={props.value}
      text={`${props.value}%`}
      styles={buildStyles({
        rotation: props.value / 100,
        strokeLinecap: "butt",
        pathTransitionDuration: 0.5,
        pathColor: progressColor(props.value),
        textColor: progressColor(props.value),
        textSize: "40px",
      })}
    />
  )
}
