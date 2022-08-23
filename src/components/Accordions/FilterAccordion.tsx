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
        <div className="mx-auto w-full rounded-sm bg-white p-2">
          <Disclosure>
            {({ open }: AccordionProps) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Filter</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
