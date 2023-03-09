import React from "react"
import cls from "classnames"

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Checkbox: React.FC<Props> = ({disabled, className, ...restProps}) => {
  return (
    <input
      type={"checkbox"}
      disabled={disabled}
      className={cls("rounded-sm border-black-10 hover:border-black-20 text-black " + className, {
        "!text-black-10 bg-black-10": disabled,
      })}
      {...restProps}
    />
  )
}

export default Checkbox
