import { forwardRef } from 'react'
import { IButton } from './Button.type'
import { cn } from '@renderer/shared/lib'

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          'flex items-center hover:opacity-50 active:opacity-50 transition-opacity ease-in-out duration-200 justify-center border border-white/30 rounded w-7 h-7',
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
