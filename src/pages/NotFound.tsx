import React from "react"
import {Link} from "react-router-dom"

import {Page} from "~components/."

const NotFound: React.FC = () => {
  return (
    <Page title="Страница не найдена" className="h-screen flex flex-col items-center justify-center">
      <p className="headline">404 Страница не найдена</p>
      <Link to="/" className="link text-blue mt-4">
        Главная
      </Link>
    </Page>
  )
}

export default NotFound
