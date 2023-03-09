import React from "react"
import {useDropzone} from "react-dropzone"
import cls from "classnames"

import useBreakpoints from "~hooks/useBreakpoints"
import {Cross, Plus, PlusCircle} from "~icons/."
import {useFormContext, useWatch} from "react-hook-form"
import {CreateProductArgs} from "~api/routes/products"

const PhotoSection: React.FC = () => {
  const {isMobile} = useBreakpoints()

  const {control, setValue} = useFormContext<CreateProductArgs>()
  const {photos} = useWatch({control})

  const removeImage = (index: number) => () => {
    const newImages = [...(photos || [])]
    newImages.splice(index, 1)
    setValue("photos", newImages)
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: files => setValue("photos", [...(photos || []), ...files]),
    accept: {
      "image/*": [],
    },
  })

  return (
    <div className="pb-5 lg:pl-14">
      <p className="uppercase t3">Фото</p>
      {
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isMobile ? (
            <button type="button" className="btn btn-blue-light w-full mt-6">
              <Plus className="mr-3" />
              Добавить фото
            </button>
          ) : (
            <div
              className={cls(
                "flex flex-col items-center p-5 mt-6 text-blue hover:text-blue-hover transition border border-black-20 rounded-xl border-dashed cursor-pointer",
                {
                  "border-blue bg-blue-10": isDragActive,
                },
              )}>
              <PlusCircle />
              <p className="t2 mt-4">Добавить фото</p>
              <p className="t4 mt-5 text-black-60">Перетащите или выберите файл</p>
            </div>
          )}
        </div>
      }

      <div className="mt-5 grid grid-cols-2 gap-2">
        {photos?.map((image, index) => (
          <div key={`image_${index}`} className="h-40 w-full bg-background-element relative cursor-pointer">
            <img src={URL.createObjectURL(image)} className="w-full h-full object-cover" />
            <button
              onClick={removeImage(index)}
              type="button"
              className="absolute top-0 right-0 h-6 w-6 bg-sidebar hover:bg-sidebar-hover active:bg-sidebar-active flex items-center justify-center">
              <Cross className="text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoSection
