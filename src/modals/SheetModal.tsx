import React from "react"
import cls from "classnames"

import {Icon} from "~types/."
import {useBreakpoints} from "~hooks/."
import {Modal} from "~components/."

type Props = {
  show: boolean
  onClose(): void
  sheetActions: SheetAction[]
}

export type SheetAction = {
  title: string
  onClick?(): void
  Icon?: React.ElementType<Icon>
}

const SheetModal: React.FC<Props> = props => {
  const {isMobile} = useBreakpoints()
  const {show, onClose, sheetActions} = props

  return (
    <Modal
      show={show}
      onClose={onClose}
      wrapClassName="items-end sm:items-center justify-center px-5 py-6"
      panelClassName="bg-white rounded-lg w-full sm:w-auto min-w-70">
      {sheetActions.map((action, index) => (
        <button
          onClick={action.onClick}
          key={`btm_action_${index}`}
          className={cls(
            "flex items-center justify-center text-black-70 hover:text-black hover:bg-black-10 w-full py-3 border-b-1 border-black-10",
            {
              "rounded-t-lg": index === 0,
            },
          )}>
          <div className="relative">
            {action.Icon && !isMobile && <action.Icon className="absolute inset-y-0 m-auto -left-6" />}
            {action.title}
          </div>
        </button>
      ))}
      <button onClick={onClose} className="text-blue w-full py-3 rounded-b-lg hover:bg-black-10">
        Закрыть
      </button>
    </Modal>
  )
}

export default SheetModal
