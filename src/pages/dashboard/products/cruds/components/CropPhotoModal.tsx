import React from "react"
import Cropper from "react-cropper"
import "cropperjs/dist/cropper.css"

import {Modal} from "~components/."
import {Cross} from "~icons/."

type Props = {
  imgToCrop?: File
  onClose(image?: string): void
}

const CropPhotoModal: React.FC<Props> = ({imgToCrop, onClose}) => {
  const cropperRef = React.useRef<HTMLImageElement>(null)

  const onSubmitWithoutCrop = () => imgToCrop && onClose(URL.createObjectURL(imgToCrop))

  const onSubmitWithCrop = () => {
    const imageElement: any = cropperRef?.current
    const cropper: any = imageElement?.cropper
    onClose(cropper.getCroppedCanvas().toDataURL())
  }

  return (
    <Modal
      show={!!imgToCrop}
      onClose={onClose}
      wrapClassName="items-center justify-center px-5"
      panelClassName="bg-white rounded-lg pt-15 pb-8 px-7 w-lg relative">
      <button className="absolute top-5 right-5" onClick={() => onClose()}>
        <Cross className="transition text-black-80 hover:text-black-60 active:text-black" />
      </button>

      <p className="text-center h3 text-black-30">Редактировать фото</p>

      <div className="mt-5">
        <Cropper
          src={imgToCrop && URL.createObjectURL(imgToCrop)}
          style={{height: 300, width: "100%"}}
          // Cropper.js options
          initialAspectRatio={16 / 9}
          guides={false}
          ref={cropperRef}
        />
      </div>

      <div className="mt-10 flex justify-end">
        <button type="button" className="btn rounded-full mr-3" onClick={onSubmitWithoutCrop}>
          Без изменений
        </button>
        <button type="button" className="btn btn-black rounded-full" onClick={onSubmitWithCrop}>
          Подтвердить
        </button>
      </div>
    </Modal>
  )
}

export default CropPhotoModal
