import Button from '@/components/ui/Button'

const stats = [
  {
    value: '4.9',
    label: 'Average rating',
    icon: '★'
  },
  {
    value: '20 min',
    label: 'Fast delivery',
    icon: '◷'
  },
  {
    value: '12K+',
    label: 'Happy customers',
    icon: '☺'
  }
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 pt-24">
      {/* Фоновое золотое свечение */}
      <div className="pointer-events-none absolute left-[15%] top-10 h-96 w-96 rounded-full bg-[#c9a34d]/10 blur-[130px]" />

      <div className="mx-auto grid min-h-[680px] max-w-[1440px] lg:grid-cols-[42%_58%]">
        {/* Левая часть */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 xl:px-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#d5b158]" />

            <p className="text-xs font-medium uppercase tracking-[3px] text-[#d5b158] sm:text-sm">
              Premium Italian Pizza
            </p>
          </div>

          <h1 className="font-serif text-[52px] font-medium uppercase leading-[0.9] tracking-[-2px] text-white sm:text-6xl lg:text-[76px] xl:text-[88px]">
            Crafted
            <br />
            with
            <br />
            <span className="text-[#d5b158]">passion</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-7 text-white/65">
            We use the finest ingredients to create unforgettable flavours for pizza lovers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>
              Order now
              <span aria-hidden="true">→</span>
            </Button>

            <Button variant="outline">View menu</Button>
          </div>

          {/* Статистика */}
          <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-[#d5b158]/25">
            {stats.map(item => (
              <div key={item.label} className="px-3 first:pl-0 sm:px-6 sm:first:pl-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-[#d5b158]">{item.icon}</span>

                  <span className="text-lg font-semibold uppercase text-[#e2c46e] sm:text-xl">{item.value}</span>
                </div>

                <p className="mt-1 text-[10px] text-white/50 sm:text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Правая часть с пиццей */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-transparent to-transparent lg:z-10" />

          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1600&q=90"
            alt="Fresh Pizzarati pepperoni pizza"
            className="h-full min-h-[420px] w-full object-cover transition duration-700 hover:scale-[1.03] lg:min-h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          {/* Кнопка истории */}
          <button
            type="button"
            className="absolute bottom-8 right-6 z-20 flex items-center gap-4 text-left sm:right-10 lg:bottom-12"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d5b158] bg-black/50 text-[#d5b158] backdrop-blur-md transition hover:bg-[#d5b158] hover:text-black">
              ▶
            </span>

            <span className="text-xs font-medium uppercase tracking-[1px] text-white">
              Watch
              <br />
              our story
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
