import React from 'react'
import Image from 'next/image'
import illustrasiLogin from '@/assets/images/user_stats.png'
import { LoginForm } from '@/components/modules/LoginForm/LoginForm'

export default function Login() {
  return (
    <div className="m-0 flex h-screen w-screen justify-between p-0">
      <div className="flex w-1/2 items-center justify-center bg-slate-300">
        <LoginForm className="w-8/12" />
      </div>
      <div className="flex w-1/2 items-center justify-center bg-white">
        <Image src={illustrasiLogin} alt="illustration" />
      </div>
    </div>
  )
}
