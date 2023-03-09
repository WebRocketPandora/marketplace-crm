import React from "react"
import {useNavigate, useParams} from "react-router-dom"

import {Page} from "~components/."

import WarehouseForm from "../components/WarehouseForm"

const EditWarehouse: React.FC = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <Page title="Редактировать склад">
      <p className="headline sm:mt-5 lg:mt-10 mb-14">Редактировать склад</p>
      <WarehouseForm warehouseId={id} onAccept={goBack} onReject={goBack} />
    </Page>
  )
}

export default EditWarehouse
