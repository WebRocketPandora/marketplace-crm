import {
  addWarehouseAction,
  deleteWarehouseAction,
  updateWarehouseAction,
  WarehouseArgs,
} from "~redux/slices/warehousesSlice"
import {useAppDispatch, useAppSelector} from "."

const useWarehouses = () => {
  const dispatch = useAppDispatch()
  const {warehouses} = useAppSelector(state => state.warehouses)

  const getWarehouse = (id: string) => warehouses.find(w => w.id === id)

  const addWarehouse = (warehouse: WarehouseArgs) => dispatch(addWarehouseAction(warehouse))

  const deleteWarehouse = (id: string) => dispatch(deleteWarehouseAction(id))

  const updateWarehouse = (id: string, warehouse: WarehouseArgs) => dispatch(updateWarehouseAction({...warehouse, id}))

  return {
    warehouses,
    getWarehouse,
    addWarehouse,
    deleteWarehouse,
    updateWarehouse,
  }
}

export default useWarehouses
