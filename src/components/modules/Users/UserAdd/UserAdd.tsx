import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { showToast } from '@/store/toast'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addUsers } from '@/services/usersService'
import { cn, formRules, getVariant } from '@/utils'
import Button from '@/components/elements/Button'
import { Input, InputGroup } from '@/components/elements/InputGroup'
import {
  AtSymbolIcon,
  CameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  EyeSlashIcon,
  HomeIcon,
  KeyIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { UserInputForm, UserInputPayload } from '@/interface/users'

const UserAdd = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const dispatch: Dispatch<any> = useDispatch()
  const router = useRouter()
  const [isShowPass, setIsShowPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputForm>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<UserInputForm> = async (data) => {
    const payload: UserInputPayload = {
      email: data.email,
      username: data.username,
      password: data.password,
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      address: {
        city: data.city,
        street: data.street,
        number: data.number,
        zipcode: data.zipcode,
        geolocation: {
          lat: data.lat,
          long: data.long,
        },
      },
      phone: data.phone,
    }
    console.log(payload)
    setIsLoading(true)
    addUsers(payload)
      .then(() => {
        dispatch(
          showToast({
            message: 'success to add user',
            type: 'green',
          })
        )

        router.back()
      })
      .catch((error) => {
        dispatch(
          showToast({
            message: error.response.data.message,
            type: 'red',
          })
        )
      })
      .finally(() => setIsLoading(false))
  }

  const handleCancel = () => {
    router.back()
  }

  const handleToggleShowPass = () => {
    setIsShowPass((prevState) => {
      return !prevState
    })
  }

  return (
    <div {...props} className={cn('mx-auto w-4/5 ', className)} ref={ref}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="firstname"
                  className="pl-6"
                  placeholder="input firstname"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="float-right text-[10px] text-red">
                {errors.firstname ? errors.firstname.message : ''}
              </span>
            </div>
          )}
          name="firstname"
        />
        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="lastname"
                  className="pl-6"
                  placeholder="input lastname"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="float-right text-[10px] text-red">
                {errors.lastname ? errors.lastname.message : ''}
              </span>
            </div>
          )}
          name="lastname"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required, pattern: formRules.email }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <AtSymbolIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="email"
                  className="pl-6"
                  placeholder="input email"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.email ? errors.email.message : ''}
              </span>
            </div>
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <UserIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="username"
                  className="pl-6"
                  placeholder="input username"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.username ? errors.username.message : ''}
              </span>
            </div>
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
            <div className="mb-4">
              <InputGroup className="w-full">
                <HomeIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="city"
                  className="pl-6"
                  placeholder="input city"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.city ? errors.city.message : ''}
              </span>
            </div>
          )}
          name="city"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <HomeIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="street"
                  className="pl-6"
                  placeholder="input street"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.street ? errors.street.message : ''}
              </span>
            </div>
          )}
          name="street"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <HomeIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="number"
                  className="pl-6"
                  placeholder="input home number"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.number ? errors.number.message : ''}
              </span>
            </div>
          )}
          name="number"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <HomeIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="zipcode"
                  className="pl-6"
                  placeholder="input zipcode"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.zipcode ? errors.zipcode.message : ''}
              </span>
            </div>
          )}
          name="zipcode"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <MapPinIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="lat"
                  className="pl-6"
                  placeholder="input lat"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.lat ? errors.lat.message : ''}
              </span>
            </div>
          )}
          name="lat"
        />

        <Controller
          control={control}
          rules={{ required: formRules.required }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="mb-4">
              <InputGroup className="w-full">
                <MapPinIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="long"
                  className="pl-6"
                  placeholder="input long"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>

              <span className="text-redy float-right text-[10px] text-red">
                {errors.long ? errors.long.message : ''}
              </span>
            </div>
          )}
          name="long"
        />

        <Controller
          control={control}
          rules={{
            required: formRules.required,
            minLength: formRules.minLength(8),
          }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <>
              <InputGroup className="w-full">
                <KeyIcon className="absolute left-2 right-auto w-3 stroke-2 text-gray" />
                <Input
                  name="password"
                  type={isShowPass ? 'text' : 'password'}
                  placeholder="input password"
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

              <span className="float-right text-[10px] text-red">
                {errors.password ? errors.password.message : ''}
              </span>
            </>
          )}
          name="password"
        />

        <Button theme="primary" className="mt-8 w-full" isLoading={isLoading}>
          Submit
        </Button>
      </form>

      <Button
        theme="red"
        variant="ghost"
        className="mt-8 w-full"
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </div>
  )
})
UserAdd.displayName = 'UserAdd'

export { UserAdd }
