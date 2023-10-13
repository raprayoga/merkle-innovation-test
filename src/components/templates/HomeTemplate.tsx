import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import UsersSearchForm from '@/components/modules/Users/UsersSearchForm'
import UserList from '@/components/modules/Users/UserList'

export default function HomeTemplate() {
  return (
    <DefaultLayout>
      <h1 className="mb-5 text-3xl font-bold text-primary">User List</h1>
      <UsersSearchForm />
      <UserList />
    </DefaultLayout>
  )
}
