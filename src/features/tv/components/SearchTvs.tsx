import { Drawer } from "@/components/Drawer"
import clsx from "clsx"
import { Path, UseFormRegister, useForm, SubmitHandler } from "react-hook-form"

interface ISearchValues {
  query: string
}

type InputProps = {
  name: Path<ISearchValues>
  register: UseFormRegister<ISearchValues>
  required: boolean
  className?: string
  label: string
}

const Input = ({ name, register, required, className, label }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        {...register(name, { required })}
        className={clsx(
          "block p-2 rounded-sm w-full mt-2 text-black",
          className
        )}
      />
    </>
  )
}

type SearchTvsProps = {
  onSearch: (data: string) => void
}

export const SearchTvs = (props: SearchTvsProps) => {
  const { onSearch } = props
  const { register, handleSubmit } = useForm<ISearchValues>()

  const onSubmit: SubmitHandler<ISearchValues> = (data) => {
    // console.log(JSON.stringify(data))
    onSearch(data.query)
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Drawer title="Filter" className="mb-2">
          <Input
            name="query"
            register={register}
            required={false}
            label="Keyword"
          />
        </Drawer>
        <input
          type={"submit"}
          value="Search"
          className="block bg-rose-600 rounded-sm p-2 w-full font-bold"
        ></input>
      </form>
    </div>
  )
}
