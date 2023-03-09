import React from "react"

import {Controller, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {Input} from "~elements/."
import {useCategories} from "~hooks/."
import {CreateCategoryArgs} from "~api/routes/categories"
import {Modal} from "~components/."

type Props = {
  open: boolean
  onClose(): void
}

const schema = yup
  .object({
    name: yup.string().required("Обязательное поле!"),
  })
  .required()

const AddCategoryModal: React.FC<Props> = ({open, onClose}) => {
  const {activeCategory, createCategory} = useCategories()

  const {control, handleSubmit, setValue, reset} = useForm<CreateCategoryArgs>({
    resolver: yupResolver(schema),
    defaultValues: {
      parentId: null,
      name: "",
    },
  })

  React.useEffect(() => {
    setValue("parentId", activeCategory?.id || null)
  }, [activeCategory])

  const onSubmit = (args: CreateCategoryArgs) =>
    createCategory(args).then(() => {
      reset()
      onClose()
    })

  return (
    <Modal
      show={open}
      onClose={onClose}
      wrapClassName="items-center justify-center px-5"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7 w-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center h3 text-black-30">
          {activeCategory ? `Добавить подкатегорию в категорию «${activeCategory.name}»` : "Добавить категорию"}
        </p>
        <Controller
          control={control}
          name="name"
          render={({field, fieldState: {error}}) => (
            <Input className="mt-8" label="Название категории" error={error?.message} inputProps={field} required />
          )}
        />
        <div className="mt-10 flex justify-end">
          <button type="button" className="btn rounded-full mr-3" onClick={onClose}>
            Отменить
          </button>
          <button type="submit" className="btn btn-green rounded-full">
            Добавить
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddCategoryModal
