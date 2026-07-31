type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300'

  const variants = {
    primary: 'bg-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.35)]',

    secondary: 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
  }

  return <button className={`${base} ${variants[variant]}`}>{children}</button>
}
