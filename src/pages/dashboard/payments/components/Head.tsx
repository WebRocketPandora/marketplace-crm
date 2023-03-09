import React from "react"
import {Link, useMatch} from "react-router-dom"

const Head: React.FC = () => {
  const isPayment = !!useMatch("/dashboard/payments")
  const isHistory = !!useMatch("/dashboard/payments/history")

  const textColor = (predicate: boolean) => (predicate ? "text-black" : "text-black-20")

  return (
    <div className="headline sm:mt-5 lg:mt-10 whitespace-nowrap truncate">
      <Link to="/dashboard/payments" className={`mr-2 sm:mr-4 lg:mr-5 ${textColor(isPayment)}`}>
        Оплата
      </Link>
      <Link to="/dashboard/payments/history" className={textColor(isHistory)}>
        История платежей
      </Link>
    </div>
  )
}

export default Head
