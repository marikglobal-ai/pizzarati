import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'outline'
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const variants = {
    primary: 'border border-[#d5b158] bg-gradient-to-r from-[#e8ca79] to-[#bd9135] text-black hover:brightness-110',
    outline: 'border border-[#d5b158]/70 bg-black/20 text-[#e1c269] hover:bg-[#d5b158] hover:text-black'
  }

  return (
    <button
      className={`
        inline-flex min-h-12 items-center justify-center gap-3
        rounded-md px-8 py-3 text-sm font-semibold uppercase
        tracking-[2px] transition duration-300
        hover:-translate-y-1
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
