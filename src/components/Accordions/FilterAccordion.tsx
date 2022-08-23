import { Card } from "../Elements/Card"
import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/solid"

type AccordionProps = {
  open: boolean
}
export const FilterAccordion = () => {
  return (
    <div className="w-full">
      <Card>
        <div className="mx-auto w-full rounded-sm bg-rose-600 p-2 font-bold">
          <Disclosure>
            {({ open }: AccordionProps) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm">
                  <span>Filter</span>
                  <ChevronRightIcon
                    className={`${open ? "rotate-90 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-normal">
                  Filter Content
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </Card>
    </div>
  )
}
