import React from "react"
import loadeble from "~utils/loadable"

export const Main = loadeble(React.lazy(() => import("~pages/dashboard/Main")))

export const Products = loadeble(React.lazy(() => import("~pages/dashboard/products")))
export const Product = loadeble(React.lazy(() => import("~pages/dashboard/products/cruds")))
export const ProductPreview = loadeble(React.lazy(() => import("~pages/dashboard/products/preview")))

export const Warehouses = loadeble(React.lazy(() => import("~pages/dashboard/warehouses")))
export const NewWarehouse = loadeble(React.lazy(() => import("~pages/dashboard/warehouses/new")))
export const EditWarehouse = loadeble(React.lazy(() => import("~pages/dashboard/warehouses/edit")))

export const Orders = loadeble(React.lazy(() => import("~pages/dashboard/orders")))

export const Marketplaces = loadeble(React.lazy(() => import("~pages/dashboard/marketplaces")))
export const Errors = loadeble(React.lazy(() => import("~pages/dashboard/marketplaces/errors")))
export const Error = loadeble(React.lazy(() => import("~pages/dashboard/marketplaces/errors/error")))
export const Kaspi = loadeble(React.lazy(() => import("~pages/dashboard/marketplaces/settings/kaspi")))

export const Settings = loadeble(React.lazy(() => import("~pages/dashboard/Settings")))

export const Payments = loadeble(React.lazy(() => import("~pages/dashboard/payments")))
export const History = loadeble(React.lazy(() => import("~pages/dashboard/payments/History")))

export const Additional = loadeble(React.lazy(() => import("~pages/dashboard/additional")))

export const Login = loadeble(React.lazy(() => import("~pages/auth/Login")))

export const NotFound = loadeble(React.lazy(() => import("~pages/NotFound")))
