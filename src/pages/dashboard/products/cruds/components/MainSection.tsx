import React from "react"
import {Controller, useFormContext} from "react-hook-form"
import {CreateProductArgs} from "~api/routes/products"
import Input from "~elements/Input"

const MainSection: React.FC = () => {
  const {control} = useFormContext<CreateProductArgs>()

  return (
    <div className="pb-5 lg:pr-14 border-r border-background-element">
      <p className="uppercase t3">Основное</p>
      <Controller
        control={control}
        name="articul"
        render={({field, fieldState: {error}}) => (
          <Input className="mt-6" label={"Артикул"} error={error?.message} inputProps={field} />
        )}
      />
      <Controller
        control={control}
        name="barcode"
        render={({field, fieldState: {error}}) => (
          <Input className="mt-6" label={"Штрихкод"} error={error?.message} inputProps={field} />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({field, fieldState: {error}}) => (
          <Input className="mt-6" label={"Название"} required error={error?.message} inputProps={field} />
        )}
      />
      <Controller
        control={control}
        name="price"
        render={({field, fieldState: {error}}) => (
          <Input className="mt-6" label={"Цена"} error={error?.message} inputProps={field} />
        )}
      />
    </div>
  )
}

export default MainSection
