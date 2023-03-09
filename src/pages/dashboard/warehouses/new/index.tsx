import React from "react"
import {useNavigate} from "react-router-dom"

import {Page} from "~components/."

import WarehouseForm from "../components/WarehouseForm"

const AddWarehouse: React.FC = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <Page title="Добавить склад">
      <p className="headline sm:mt-5 lg:mt-10 mb-14">Добавить склад</p>
      <WarehouseForm onReject={goBack} onAccept={goBack} />
    </Page>
  )
}

export default AddWarehouse
