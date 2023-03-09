import React from "react"
import {Dialog, Transition} from "@headlessui/react"

export type ModalProps = {
  children: React.ReactNode
  show: boolean
  onClose(): void
  wrapClassName?: string
  panelClassName?: string
}

const Modal: React.FC<ModalProps> = props => {
  const {children, show, onClose, wrapClassName, panelClassName} = props
  return (
    <Transition appear show={show} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-background-modal" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto cursor-pointer">
          <div className={`flex min-h-full ${wrapClassName}`}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className={`cursor-default ${panelClassName}`}>{children}</Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
export default Modal
