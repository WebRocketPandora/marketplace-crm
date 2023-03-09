import React, {Suspense} from "react"
import {Preloader} from "~components/."

function loadeble<P = any>(Element: React.ElementType) {
  return function (props: P) {
    return (
      <Suspense fallback={<Preloader />}>
        <Element {...props} />
      </Suspense>
    )
  }
}

export default loadeble
