import React from "react"

import {Input} from "~elements/."
import {useCategories} from "~hooks/."
import {MagnifyingGlass} from "~icons/."

const SearchCategories: React.FC = () => {
  const [value, setValue] = React.useState<string>("")
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const {readCategories} = useCategories()

  React.useEffect(() => {
    readCategories({filter: value, fltProdAndCat: 1})
  }, [value])

  return (
    <div className="p-4">
      <Input inputProps={{value, onChange}} label={"Искать..."} accessoaryLeft={<MagnifyingGlass />} />
    </div>
  )
}

export default SearchCategories
