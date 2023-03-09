import React from "react"
import cls from "classnames"

import {Category} from "~api/routes/categories"
import {SheetAction} from "~modals/SheetModal"
import {ActionMenu, ArrowTriangleForward} from "~icons/."
import {Dropdown} from "~components/."
import {useBreakpoints, useCategories} from "~hooks/."

type Props = {
  category: Category
  subcategory?: boolean
  nesting?: number
  triggerCollapse: boolean
  actions: SheetAction[]
  showActions(): void
}

const CategoryItem: React.FC<Props> = props => {
  const {triggerCollapse, category, subcategory, nesting = 1, actions, showActions} = props

  const {isDesktop} = useBreakpoints()
  const {activeCategory, setActiveCategory, setShowCategoiresSidebar} = useCategories()

  const [expanded, setExpanded] = React.useState<boolean>(false)

  React.useEffect(() => {
    setExpanded(false)
  }, [triggerCollapse])

  const handleClick = React.useCallback(() => {
    setActiveCategory(category)
    setExpanded(true)
    !isDesktop && setShowCategoiresSidebar(false)
  }, [isDesktop, category])

  const toggleExpanded = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setExpanded(!expanded)
  }

  const onShowActions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setActiveCategory(category)
    showActions()
  }

  const active = React.useMemo(() => activeCategory?.id === category.id, [activeCategory, category])

  return (
    <>
      <div
        onClick={handleClick}
        className={cls("relative px-5 py-1 transition hover:bg-black-10 cursor-pointer", {
          "bg-blue-10 hover:bg-blue-10": active,
        })}
        style={{paddingLeft: 20 * nesting}}>
        <div className="flex items-center">
          {category.children && (
            <button className="w-5" onClick={toggleExpanded}>
              <ArrowTriangleForward
                className={cls("transition transform text-black-30", {
                  "rotate-90 text-black-60": expanded,
                })}
              />
            </button>
          )}
          <p className={subcategory ? "t4 text-sidebar-active" : "t2"}>
            {category.name} ({category.children?.length || 0})
          </p>
          {isDesktop ? (
            <Dropdown
              items={actions}
              className="ml-auto"
              wrapClassName="bg-white left-0 bottom-4 shadow-small w-61"
              itemClassName="text-black-60 pr-4 py-3 hover:bg-blue-10 hover:text-black">
              <div className="px-2 cursor-pointer text-black-60 hover:text-black">
                <ActionMenu className="h-3" />
              </div>
            </Dropdown>
          ) : (
            <div className="ml-auto px-2 cursor-pointer text-black-60 hover:text-black" onClick={onShowActions}>
              <ActionMenu className="h-3" />
            </div>
          )}
        </div>

        {active && <div className="absolute w-1 inset-y-0 right-0 bg-blue" />}
      </div>
      {expanded &&
        category.children?.map(category => (
          <CategoryItem
            key={`category_${category.id}`}
            {...props}
            category={category}
            subcategory
            nesting={nesting + 1}
          />
        ))}
    </>
  )
}

export default CategoryItem
