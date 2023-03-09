import React from "react"
import {Link, useLocation, useMatch, useNavigate} from "react-router-dom"

import {useAuth, useBreakpoints, useSidebar, useUser} from "~hooks/."
import {Bag, DigitalCrown, GearShape, House, HumanDolly, Power, ShippingBox, Tag, Xmark} from "~icons/."
import {LogoutModal} from "~modals/."
import {Icon} from "~types/."

import Avatar from "./Avatar"
import Dropdown, {DropdownItem} from "./Dropdown"

const Sidebar: React.FC = () => {
  const {user} = useUser()
  const {logout} = useAuth()
  const {isMobile, isTablet, isDesktop} = useBreakpoints()
  const {pathname} = useLocation()

  const [showModal, setShowModal] = React.useState<boolean>(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  const onLogout = () => {
    logout()
    closeModal()
  }

  const {toggleSidebar} = useSidebar()
  const close = () => toggleSidebar(false)

  const navigate = useNavigate()

  const isActive = (path: string) => pathname.includes(path)

  const appItems: Item[] = [
    {
      Icon: GearShape,
      title: "Настройки",
      path: "/dashboard/settings",
    },
    {
      Icon: DigitalCrown,
      title: "Оплаты",
      path: "/dashboard/payments",
    },
    {
      Icon: Power,
      title: "Выход",
      onClick: openModal,
    },
  ]

  const dropdownItems: DropdownItem[] = [
    {
      Icon: GearShape,
      title: "Настройки",
      path: "/dashboard/settings",
      className: !!useMatch("/dashboard/settings") ? "bg-sidebar-active" : "",
    },
    {
      Icon: DigitalCrown,
      title: "Оплаты",
      path: "/dashboard/payments",
      className: pathname.includes("/dashboard/payments") ? "bg-sidebar-active" : "",
    },
    {
      Icon: Power,
      title: "Выход",
      onClick: openModal,
    },
  ]

  const Item: React.FC<Item> = ({title, Icon, path, onClick}) => {
    const active = path && isActive(path)

    const handleClick = () => {
      onClick && onClick()
      path && navigate(path)
      close()
    }

    return (
      <div
        onClick={handleClick}
        className={`transition-all px-5 sm:px-0 lg:px-10 sm:w-full py-4 sm:py-2 lg:py-4 flex flex-row sm:flex-col lg:flex-row items-center cursor-pointer hover:bg-sidebar-hover ${
          active && "bg-sidebar-active text-white"
        }`}>
        <Icon className="mr-3 sm:mr-0 lg:mr-3" />
        <p className="sm:text-[10px] lg:text-[16px] text-ellipsis overflow-hidden">{title}</p>
      </div>
    )
  }

  return (
    <div className="py-5 sm:py-10 lg:pt-17 lg:pb-8 text-white h-full flex flex-col sm:items-center lg:items-start">
      <div className="px-5 sm:px-0 lg:px-10 flex items-center justify-between">
        <Link to={"/"} onClick={close}>
          <p className="t1 lg:text-[20px] text-black-50">LOGO</p>
        </Link>
        {isMobile && (
          <button onClick={close} className="p-1">
            <Xmark />
          </button>
        )}
      </div>
      {isMobile && (
        <div className="px-5 mt-6 flex items-center">
          <Avatar className="mr-4" />
          <p className="t2">{user?.login}</p>
        </div>
      )}
      <div className="mt-9 lg:mt-16 text-sidebar-text w-full">
        {navItems.map((item, i) => (
          <Item key={`nav_item_${i}`} {...item} />
        ))}
        {isMobile && (
          <>
            <hr className="mx-5 my-4" />
            {appItems.map((item, i) => (
              <Item key={`nav_item_${i}`} {...item} />
            ))}
          </>
        )}
      </div>
      {isTablet && (
        <Link to="/dashboard/additional" className="mt-auto">
          <Avatar />
        </Link>
      )}
      {isDesktop && (
        <Dropdown
          className="mt-auto"
          wrapClassName="w-38 bg-sidebar shadow-dark inset-x-0 mx-auto"
          itemClassName="px-4 py-2 hover:bg-sidebar-hover active:bg-sidebar-active text-sidebar-text"
          items={dropdownItems}>
          <div
            className={`px-10 grid grid-cols-5 py-4 transition-all cursor-pointer hover:bg-sidebar-hover active:bg-sidebar-active`}>
            <Avatar className="mr-3 sm:mr-0 lg:mr-3 w-6 h-6" />
            <p className="sm:text-[10px] lg:text-[16px] truncate col-span-4 text-black-10">{user?.login}</p>
          </div>
        </Dropdown>
      )}

      <LogoutModal show={showModal} onClose={closeModal} onLogout={onLogout} />
    </div>
  )
}

type Item = {
  Icon: React.ElementType<Icon>
  title: string
  path?: string
  onClick?(): void
}

const navItems: Item[] = [
  {
    Icon: House,
    title: "Главная",
    path: "/dashboard/main",
  },
  {
    Icon: ShippingBox,
    title: "Товары",
    path: "/dashboard/products",
  },
  {
    Icon: HumanDolly,
    title: "Склады",
    path: "/dashboard/warehouses",
  },
  {
    Icon: Bag,
    title: "Заказы",
    path: "/dashboard/orders",
  },
  {
    Icon: Tag,
    title: "Маркетплейсы",
    path: "/dashboard/marketplaces",
  },
]

export default Sidebar
