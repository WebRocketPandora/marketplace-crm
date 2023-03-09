import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {v4} from "uuid"

export type Warehouse = {
  id: string
  warehouseName: string
  address: string
}

export type WarehouseArgs = Omit<Warehouse, "id">

export interface WarehousesState {
  warehouses: Warehouse[]
}

const initialState: WarehousesState = {
  warehouses: JSON.parse(localStorage.getItem("warehouses") || "[]"),
}

const warehousesSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    addWarehouseAction: (state, action: PayloadAction<WarehouseArgs>) => {
      const update = [...state.warehouses, {...action.payload, id: v4()}]
      localStorage.setItem("warehouses", JSON.stringify(update))
      state.warehouses = update
    },
    deleteWarehouseAction: (state, action: PayloadAction<string>) => {
      const update = state.warehouses.filter(w => w.id !== action.payload)
      localStorage.setItem("warehouses", JSON.stringify(update))
      state.warehouses = update
    },
    updateWarehouseAction: (state, action: PayloadAction<Warehouse>) => {
      const update = state.warehouses.map(ware => (ware.id === action.payload.id ? action.payload : ware))
      localStorage.setItem("warehouses", JSON.stringify(update))
      state.warehouses = update
    },
  },
})

export const {addWarehouseAction, deleteWarehouseAction, updateWarehouseAction} = warehousesSlice.actions
export default warehousesSlice.reducer
