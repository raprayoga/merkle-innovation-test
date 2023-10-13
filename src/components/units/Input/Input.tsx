import React, { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const inputVariant = cva(
  'h-full w-full border rounded outline-0 py-2 placeholder:opacity-0 text-black px-2 pt-4 outline-none focus:shadow-sm',
  {
    variants: {
      theme: {
        default: 'border-gray focus:shadow-primary',
        danger: 'border-red focus:shadow-red',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {}

const variants = {
  open: { y: '-130%', x: '-20%', scale: 0.7 },
  closed: { y: '-50%', x: 0, scale: 1 },
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { theme, value, className, onBlur = () => null, placeholder, ...props },
    ref
  ) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)

    return (
      <div className="relative w-full h-full">
        <input
          className={cn(inputVariant({ theme }), className)}
          data-testid="input-element"
          value={value}
          ref={ref}
          {...props}
          onFocus={() => setOnFocus(true)}
          placeholder={placeholder}
          onBlur={(e) => {
            setOnFocus(false)
            onBlur(e)
          }}
        />
        <motion.span
          animate={onFocus || value ? 'open' : 'closed'}
          variants={variants}
          className="absolute text-gray left-3 top-1/2 mt-auto fond-medium leading-none"
        >
          {placeholder}
        </motion.span>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
