import React from "react"

import {Product} from "~api/routes/products"
import kaspi from "~images/kaspi.png"

type Props = {
  product: Product
}

const MainSection: React.FC<Props> = ({product}) => {
  return (
    <div className="pb-5 lg:pr-14 lg:border-r border-background-element">
      <p className="t3 text-black-60">Наименование</p>
      <p className="t2 mt-3">{product.name}</p>

      <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <p className="t3 text-black-60">Цена</p>
          <p className="t2 mt-3">900 ₸</p>
        </div>
        <div>
          <p className="t3 text-black-60">Штрихкод</p>
          <p className="t2 mt-3">127634990945</p>
        </div>
        <div>
          <p className="t3 text-black-60">Артикул</p>
          <p className="t2 mt-3">33423232</p>
        </div>
      </div>

      <p className="t3 text-black-60 mt-6 sm:mt-8 lg:mt-10">Категория</p>
      <p className="t2 mt-3">Аксессуары – Сумки – Сумки из кожи</p>

      <div className="mt-6 sm:mt-8 lg:mt-10">
        <div className="flex items-end justify-between">
          <p className="t3 text-black-60">Остаток</p>
          <p className="t4 text-black-70">Всего: 10</p>
        </div>
        <div className="mt-5 px-4 py-1 bg-background-element rounded-xl">
          <div className="py-3 flex items-center">
            <img src={kaspi} width={24} height={24} alt="kaspi" className="w-6 h-6 mr-2" />
            <p className="t2 font-normal text-blue">Kaspi</p>
            <p className="t2 ml-auto">2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
