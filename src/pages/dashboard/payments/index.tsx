import React from "react"
import {Link} from "react-router-dom"

import {Page} from "~components/."

import Head from "./components/Head"

const Payment: React.FC = () => {
  return (
    <Page title="Оплата">
      <Head />
      <p className="mt-8 sm:mt-5 lg:mt-15 text-black-60">
        Срок окончания подписки: <span className="text-black">23.09.2022</span>
      </p>
      <div className="flex items-center mt-5 sm:mt-8 lg:mt-5">
        <button className="btn btn-blue rounded-full mr-6">Оплатить</button>
        <Link to="#" className="link text-black-60">
          Условия подписки
        </Link>
      </div>
    </Page>
  )
}

export default Payment
