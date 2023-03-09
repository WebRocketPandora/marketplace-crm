import React from "react"

import {Page} from "~components/."

import Head from "./components/Head"

const History: React.FC = () => {
  return (
    <Page title="История платежей">
      <Head />
      <div className="grid-table grid-table-head mt-8 grid-cols-4 gap-2">
        <p className="text-[12px] sm:text-[14px] lg:text-[16px]">Дата</p>
        <p className="text-[12px] sm:text-[14px] lg:text-[16px]">Сумма</p>
        <p className="text-[12px] sm:text-[14px] lg:text-[16px] col-span-2">Период подписки</p>
      </div>

      <div className="grid-table grid-table-item grid-cols-4 gap-2">
        <p className="text-[14px] lg:text-[16px]">01.06.2022</p>
        <p className="text-[14px] lg:text-[16px] truncate">8 000 ₸</p>
        <p className="text-[14px] lg:text-[16px] col-span-2 truncate">01.06.2022 - 01.07.2022</p>
      </div>

      <div className="grid-table grid-table-item grid-cols-4 gap-2">
        <p className="text-[14px] lg:text-[16px]">01.06.2022</p>
        <p className="text-[14px] lg:text-[16px] truncate">8 000 ₸</p>
        <p className="text-[14px] lg:text-[16px] col-span-2 truncate">01.06.2022 - 01.07.2022</p>
      </div>

      <div className="grid-table grid-table-item grid-cols-4 gap-2">
        <p className="text-[14px] lg:text-[16px]">01.06.2022</p>
        <p className="text-[14px] lg:text-[16px] truncate">8 000 ₸</p>
        <p className="text-[14px] lg:text-[16px] col-span-2 truncate">01.06.2022 - 01.07.2022</p>
      </div>
    </Page>
  )
}

export default History
