import Hero from '@/components/hero/Hero'
import Navbar from '@/components/layout/Navbar'
import Categories from '@/components/sections/Categories'
import BestSellers from '@/components/sections/BestSellers'
import CartSidebar from '../components/cart/CartSidebar'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <CartSidebar />
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
