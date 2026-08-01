import Hero from '@/components/hero/Hero'
import Navbar from '@/components/layout/Navbar'
import Categories from '@/components/sections/Categories'
import BestSellers from '@/components/sections/BestSellers'
import CartSidebar from '../components/cart/CartSidebar'
import WhyChooseUs from '@/components/sections/WhyChooseUs'

export default function Home() {
  return (
    <main>
      <CartSidebar />
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
    </main>
  )
}
