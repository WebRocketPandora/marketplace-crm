import React from "react"
import {Listbox, Transition} from "@headlessui/react"
import cls from "classnames"

import {ArrowTriangleForward} from "~icons/."

export type SelectItem = {
  label: string
  value: string
}

type Props = {
  items: SelectItem[]
}

const Select: React.FC<Props> = ({items}) => {
  const [selected, setSelected] = React.useState<SelectItem>(items[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="transition-all relative w-full cursor-pointer border-1 border-black-10 hover:border-black-20 rounded-lg bg-white py-4 pl-4 pr-5 text-left">
          <span className="block truncate">{selected.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">
            <ArrowTriangleForward className="h-2 w-2" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute px-0 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white text-base shadow-tiny ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items.map((item, i) => (
              <Listbox.Option
                as="div"
                key={i}
                className={({active}) =>
                  cls("relative cursor-pointer select-none py-2 px-4", {
                    "bg-black-10": active,
                  })
                }
                value={item}>
                {({selected}) => (
                  <span
                    className={cls("block truncate", {
                      "text-blue": selected,
                    })}>
                    {item.label}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default Select
