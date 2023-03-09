import React from "react"
import cls from "classnames"

type Props = {
  className?: string
  label: string
  required?: boolean
  error?: string
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  accessoaryRight?: React.ReactNode
  accessoaryLeft?: React.ReactNode
}

const Input: React.FC<Props> = ({className, label, inputProps, required, error, accessoaryRight, accessoaryLeft}) => {
  return (
    <div className={`input_group ${className}`}>
      <div className="input_accessoary_left">{accessoaryLeft}</div>
      <input
        id={label}
        className={cls("input_field", {
          ["error"]: !!error,
          "placeholder-shown": accessoaryLeft,
        })}
        placeholder={label}
        {...inputProps}
      />
      <div className="input_accessoary_right">{accessoaryRight}</div>
      {!accessoaryLeft && (
        <label htmlFor={label} className="input_label">
          {label}
          {required && <span className="text-red">*</span>}
        </label>
      )}
      {!!error && <p className="caption input_helper_text">{error}</p>}
    </div>
  )
}

export default Input
