import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { cn } from '@/utils'
import { TableCellsIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Button from '@/components/elements/Button'

const SideBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const router = useRouter()

  const handleLogout = () => {
    signOut()
    router.push('/auth/login')
  }

  return (
    <>
      <aside
        className={cn(
          'h-screen w-1/5 min-w-[100px] bg-primary px-2.5 py-5',
          className
        )}
        {...props}
        ref={ref}
      >
        <h2 className="mx-2.5 mb-5 mt-2 text-2xl font-bold text-white">
          <span className="block text-sm">Portal</span>
          Admin
        </h2>
        <ul>
          <li
            className={`mx-2.5 my-2 ${
              router.pathname.includes('/') ? 'text-white' : 'text-gray'
            }`}
          >
            <Link href="/" className="flex">
              <TableCellsIcon className="mr-2 w-4" />
              User
            </Link>
          </li>
          <li
            className={`mx-2.5 my-2 ${
              router.pathname === '/profile' ? 'text-white' : 'text-gray'
            }`}
          >
            <Button className="flex px-0" onClick={handleLogout}>
              <UserCircleIcon className="mr-2 w-4" />
              Logout
            </Button>
          </li>
        </ul>
      </aside>
    </>
  )
})
SideBar.displayName = 'SideBar'

export { SideBar }
