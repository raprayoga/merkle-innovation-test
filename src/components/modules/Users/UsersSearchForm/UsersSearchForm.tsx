import React, { useEffect } from 'react'
import Link from 'next/link'
import { Dispatch } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { search, usersAsync } from '@/store/users'
import { cn } from '@/utils'
import { sliceState } from '@/interface/state'
import Button from '@/components/elements/Button'
import { InputGroup } from '@/components/elements/InputGroup'
import Card from '@/components/elements/Card'
import {
  BarsArrowDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import Select from '@/components/elements/Select'

const UsersSearchForm = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const dispatch: Dispatch<any> = useDispatch()
  const userState = useSelector((state: sliceState) => state.users)

  useEffect(() => {
    dispatch(usersAsync())
  }, [dispatch])

  const handleChange = (e: any) => {
    const tempState = JSON.parse(JSON.stringify(userState.form))
    const name = e.target.name
    const value = e.target.value
    tempState[name] = value
    dispatch(
      search({
        form: tempState,
      })
    )
  }

  const handleSearch = () => {
    dispatch(usersAsync())
  }

  return (
    <Card className={cn('', className)} {...props} ref={ref}>
      <div className="flex justify-end">
        <Link href="users/add">
          <Button className="mb-3 px-2 py-1 text-right">
            <PlusIcon className="mr-1 w-4 text-white" />
            Add User
          </Button>
        </Link>
      </div>
      <div className="flex justify-around gap-1">
        <InputGroup className="w-full">
          <BarsArrowDownIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
          <Select
            name="sort"
            className="pl-6"
            value={userState.form.sort}
            onChange={handleChange}
          >
            <option className="text-gray" value="">
              Sort
            </option>
            <option className="text-gray" value="asc">
              Asc
            </option>
            <option className="text-gray" value="desc">
              Desc
            </option>
          </Select>
        </InputGroup>
        <Button
          className="w-full"
          onClick={handleSearch}
          isLoading={userState.loading}
        >
          <MagnifyingGlassIcon className="mr-2 w-4" />
          Search
        </Button>
      </div>
    </Card>
  )
})
UsersSearchForm.displayName = 'UsersSearchForm'

export { UsersSearchForm }
