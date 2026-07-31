export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-16 px-8">
        {/* Левая колонка */}
        <div>
          <p className="mb-4 uppercase tracking-[4px] text-[#C8A95B]">Crafted for Pizza Lovers</p>

          <h1 className="mb-6 text-7xl font-bold leading-tight">
            Premium Italian <br />
            Pizza Experience
          </h1>

          <p className="mb-10 max-w-xl text-lg text-gray-400">
            Fresh ingredients, authentic Italian recipes and fast delivery. Discover why thousands of customers choose
            Pizzarati every week.
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-[#C8A95B] px-8 py-4 font-semibold text-black transition hover:scale-105">
              Order Now
            </button>

            <button className="rounded-full border border-[#C8A95B] px-8 py-4 text-[#C8A95B] transition hover:bg-[#C8A95B] hover:text-black">
              View Menu
            </button>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900"
            alt="Pizza"
            className="w-[600px] rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
