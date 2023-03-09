import React from "react"
import {Controller, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {Input} from "~elements/."
import {useWarehouses} from "~hooks/."
import {WarehouseArgs} from "~redux/slices/warehousesSlice"

const schema = yup
  .object({
    warehouseName: yup.string().required("Обязательное поле"),
    address: yup.string(),
  })
  .required()

type Props = {
  warehouseId?: string
  onReject(): void
  onAccept(): void
}

const WarehouseForm: React.FC<Props> = ({warehouseId, onAccept, onReject}) => {
  const {addWarehouse, updateWarehouse, getWarehouse} = useWarehouses()
  const warehouse = getWarehouse(warehouseId || "")

  const {control, handleSubmit} = useForm<WarehouseArgs>({
    resolver: yupResolver(schema),
    defaultValues: {
      warehouseName: warehouse?.warehouseName,
      address: warehouse?.address,
    },
  })

  const onSubmit = (form: WarehouseArgs) => {
    warehouseId ? updateWarehouse(warehouseId, form) : addWarehouse(form)
    onAccept()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller<WarehouseArgs>
        control={control}
        name="warehouseName"
        render={({field, fieldState: {error}}) => (
          <Input required label={"Название склада"} error={error?.message} inputProps={field} />
        )}
      />
      <Controller<WarehouseArgs>
        control={control}
        name="address"
        render={({field, fieldState: {error}}) => (
          <Input className="mt-6" label={"Адрес"} error={error?.message} inputProps={field} />
        )}
      />
      <div className="mt-14 flex justify-end">
        <button onClick={onReject} type="button" className="btn rounded-full mr-3">
          Отменить
        </button>
        <button type="submit" className="btn btn-green rounded-full">
          {warehouseId ? "Сохранить" : "Добавить"}
        </button>
      </div>
    </form>
  )
}

export default WarehouseForm
