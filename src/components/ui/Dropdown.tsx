import React from "react"
import {Menu, Transition} from "@headlessui/react"
import {useNavigate} from "react-router-dom"

import {Icon} from "~types/."

export type DropdownItem = {
  Icon?: React.ElementType<Icon>
  iconClassName?: string
  title: string
  className?: string
  path?: string
  onClick?(): void
}

type Props = {
  children: React.ReactNode
  className?: string
  wrapClassName?: string
  itemClassName?: string
  items: DropdownItem[]
}

const Dropdown: React.FC<Props> = props => {
  const navigate = useNavigate()
  const {children, className, wrapClassName, itemClassName, items} = props

  return (
    <Menu as={"div"} className={`relative ${className}`}>
      <Menu.Button>{children}</Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className={`absolute z-10 bottom-full mb-3 w-full rounded-lg py-2 ${wrapClassName}`}>
          {items.map((item, i) => (
            <Menu.Item
              onClick={() => {
                item.path && navigate(item.path)
                item.onClick && item.onClick()
              }}
              key={`dropdown_item_${i}`}
              as="div"
              className={`flex items-center cursor-pointer ${itemClassName} ${item.className}`}>
              {item.Icon && (
                <div className="w-10 flex items-center justify-center">
                  <item.Icon className={item.iconClassName} />
                </div>
              )}
              <p className="t3">{item.title}</p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
