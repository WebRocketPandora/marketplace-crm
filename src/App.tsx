import React from "react"

import {HelmetProvider} from "react-helmet-async"
import {BrowserRouter} from "react-router-dom"

import {ErrorBoundary, Preloader} from "~components/."

import {Provider as ReduxProvider} from "react-redux"
import {PersistGate} from "redux-persist/lib/integration/react"
import store, {persistor} from "~redux/store"

import Routes from "~routes/Routes"

const App: React.FC = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <PersistGate loading={<Preloader />} persistor={persistor}>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </PersistGate>
          </ReduxProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </div>
  )
}

export default App
