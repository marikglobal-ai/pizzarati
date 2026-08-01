import Hero from '@/components/hero/Hero'
import Navbar from '@/components/layout/Navbar'
import Categories from '@/components/sections/Categories'
import BestSellers from '@/components/sections/BestSellers'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
    </main>
  )
}
