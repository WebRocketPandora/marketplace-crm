import React from "react"

import {Page} from "~components/."
import {Spinner} from "~elements/."

const Preloader: React.FC = () => {
  return (
    <Page title="Загрузка..." className="fixed inset-0 flex items-center justify-center">
      <Spinner className="text-blue w-10 h-10" />
    </Page>
  )
}

export default Preloader
