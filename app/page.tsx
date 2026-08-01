import Hero from '@/components/hero/Hero'
import Navbar from '@/components/layout/Navbar'

import Categories from '@/components/sections/Categories'
import BestSellers from '@/components/sections/BestSellers'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'

import Footer from '@/components/layout/Footer'

import CartSidebar from '@/components/cart/CartSidebar'
import ProductCustomizer from '@/components/product/ProductCustomizer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909]">
      <Navbar />

      <CartSidebar />

      <ProductCustomizer />

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
