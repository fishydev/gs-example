import { Card } from "../Elements/Card"
import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { ReactNode } from "react"

type DrawerProps = {
  title: string
  children: ReactNode
}
export const Drawer = (props: DrawerProps) => {
  const { children, title } = props
  return (
    <div className="w-full">
      <Card>
        <div className="mx-auto w-full rounded-sm bg-rose-600 font-bold">
          <Disclosure>
            {(open) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-4 text-left text-sm">
                  <span>{title}</span>
                  <ChevronRightIcon
                    className={`${open ? "rotate-90 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 text-sm font-normal bg-neutral-900">
                  {children}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </Card>
    </div>
  )
}
