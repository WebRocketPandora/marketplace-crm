import React from "react"

const PhotoSection: React.FC = () => {
  return (
    <div className="pb-5 lg:pl-14">
      <p className="t3 text-black-60">Фото</p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {[].map((image, index) => (
          <div key={`image_${index}`} className="h-40 w-full bg-background-element relative cursor-pointer">
            <img src={URL.createObjectURL(image)} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoSection
