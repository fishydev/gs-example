import { default as dayjs } from "dayjs"

export const formatDate = (
  date: string,
  inputFormat: string,
  outputFormat: string
) => dayjs(date, inputFormat).format(outputFormat)
