import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import UserAdd from '@/components/modules/Users/UserAdd'

export default function UserAddTemplate() {
  return (
    <DefaultLayout>
      <h1 className="mb-5 text-3xl font-bold text-primary">Add User</h1>
      <UserAdd />
    </DefaultLayout>
  )
}
