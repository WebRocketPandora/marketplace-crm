import React from "react"
import {Switch as SwitchInstance} from "@headlessui/react"
import cls from "classnames"

export type Switch = {
  label: string
  checked: boolean
  onChange: () => void
  disabled: boolean
  className?: string
}

const Switch: React.FC<Switch> = ({className, label, ...restProps}) => {
  const {checked, disabled} = restProps
  return (
    <SwitchInstance
      className={cls(`w-11 lg:w-13 h-6.5 lg:h-8 rounded-full relative inline-flex bg-black-20 ${className}`, {
        "!bg-green": checked,
        "bg-black-10 pointer-events-none": disabled,
      })}
      {...restProps}>
      <span className="sr-only">{label}</span>
      <span
        className={cls(
          "inline-block h-4.5 lg:h-6 w-4.5 lg:w-6 mx-1 my-1 transform rounded-full bg-white translate-x-0",
          {
            "translate-x-4.5 lg:translate-x-5": checked,
            "bg-black-30": disabled,
          },
        )}
      />
    </SwitchInstance>
  )
}

export default Switch
