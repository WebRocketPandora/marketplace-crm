import React from "react"

import {Navigate, Route, Routes as RouterRoutes} from "react-router-dom"

import {AppOverlay, InfoOverlay} from "~overlays/."
import * as Pages from "~pages/."
import {useBreakpoints, useUser} from "~hooks/."

import Protector from "./Protector"
import {Preloader} from "~components/."

const Routes: React.FC = () => {
  const {loading, isLoggedIn} = useUser("cache-first")
  const {isTablet} = useBreakpoints()

  if (loading) return <Preloader />

  return (
    <RouterRoutes>
      <Route
        path="/"
        element={
          <Protector protect={!isLoggedIn} redirectURL="/auth/login">
            <AppOverlay />
          </Protector>
        }>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<InfoOverlay />}>
          <Route index element={<Navigate to="/dashboard/main" />} />
          <Route path="main" element={<Pages.Main />} />
          <Route path="products">
            <Route index element={<Pages.Products />} />
            <Route path="new" element={<Pages.Product type="new" />} />
            <Route path="edit" element={<Pages.Product type="edit" />} />
            <Route path="preview" element={<Pages.ProductPreview />} />
          </Route>
          <Route path="warehouses">
            <Route index element={<Pages.Warehouses />} />
            <Route path="new" element={<Pages.NewWarehouse />} />
            <Route path="edit/:id" element={<Pages.EditWarehouse />} />
          </Route>
          <Route path="orders" element={<Pages.Orders />} />
          <Route path="marketplaces">
            <Route index element={<Pages.Marketplaces />} />
            <Route path="errors">
              <Route index element={<Pages.Errors />} />
              <Route path=":id" element={<Pages.Error />} />
            </Route>
            <Route path="settings">
              <Route index element={<Navigate to={"/dashboard/marketplaces"} />} />
              <Route path="kaspi" element={<Pages.Kaspi />} />
            </Route>
          </Route>
          <Route path="settings" element={<Pages.Settings />} />
          <Route path="payments">
            <Route index element={<Pages.Payments />} />
            <Route path="history" element={<Pages.History />} />
          </Route>
          <Route
            path="additional"
            element={
              <Protector protect={!isTablet} redirectURL="/dashboard/main">
                <Pages.Additional />
              </Protector>
            }
          />
        </Route>
      </Route>

      <Route
        path="auth"
        element={
          <Protector protect={isLoggedIn} redirectURL="/dashboard/main">
            <InfoOverlay />
          </Protector>
        }>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<Pages.Login />} />
      </Route>

      <Route path="*" element={<Pages.NotFound />} />
    </RouterRoutes>
  )
}

export default Routes
