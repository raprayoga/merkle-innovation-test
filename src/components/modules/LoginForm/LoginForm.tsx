import React, { useState } from 'react'
import { cn } from '@/utils'
import { Input, InputGroup } from '@/components/elements/InputGroup'
import {
  AtSymbolIcon,
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline'
import Button from '@/components/elements/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import logo from '@/assets/images/male-avatar.png'
import { useDispatch } from 'react-redux'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Dispatch } from '@reduxjs/toolkit'
import { showToast } from '@/store/toast'
import { useRouter } from 'next/router'
import { formRules, getVariant } from '@/utils/form-rules'
import { LoginInputForm } from '@/interface/auth'

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter()
  const dispatch: Dispatch<any> = useDispatch()
  const [isShowPass, setIsShowPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputForm>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<LoginInputForm> = async (data) => {
    setIsLoading(true)
    const res = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    })

    if (res && res.ok) {
      dispatch(
        showToast({
          message: 'login Successfully',
          type: 'green',
        })
      )

      router.push('/')
    } else {
      dispatch(
        showToast({
          message: 'Email or Password Not Valid',
          type: 'red',
        })
      )
    }
    setIsLoading(false)
  }

  const handleToggleShowPass = () => {
    setIsShowPass((prevState) => {
      return !prevState
    })
  }

  return (
    <>
      <div {...props} className={cn('text-center', className)}>
        <div className="mb-5 flex flex-col items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="h-[150px] w-[150px] rounded-full"
          />
          <h2 className="ml-1 text-center text-xl font-semibold">Login</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            rules={{ required: formRules.required }}
            defaultValue=""
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isDirty, error },
            }) => (
              <>
                <InputGroup className="w-full">
                  <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                  <Input
                    placeholder="masukan username anda"
                    className="pl-6"
                    theme={getVariant(isDirty, !!error)}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                </InputGroup>
                <span className="float-right text-[10px] text-primary">
                  {errors.username ? errors.username.message : ''}
                </span>
              </>
            )}
            name="username"
          />

          <Controller
            control={control}
            rules={{ required: formRules.required }}
            defaultValue=""
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isDirty, error },
            }) => (
              <>
                <InputGroup className="mt-5 w-full">
                  <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                  <Input
                    name="last_name"
                    type={isShowPass ? 'text' : 'password'}
                    placeholder="masukan password anda"
                    className="px-6"
                    theme={getVariant(isDirty, !!error)}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                  <div
                    onClick={handleToggleShowPass}
                    className="absolute left-auto right-2 cursor-pointer"
                  >
                    {!isShowPass && (
                      <EyeIcon className="w-3 stroke-2 text-gray" />
                    )}
                    {isShowPass && (
                      <EyeSlashIcon className="w-3 stroke-2 text-gray" />
                    )}
                  </div>
                </InputGroup>

                <span className="float-right text-[10px] text-primary">
                  {errors.password ? errors.password.message : ''}
                </span>
              </>
            )}
            name="password"
          />

          <Button
            type="submit"
            theme="primary"
            className="mt-8 w-full"
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  )
}
