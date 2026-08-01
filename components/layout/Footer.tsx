import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#070707]">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo/pizzarati-logo.png"
                alt="Pizzarati logo"
                width={70}
                height={70}
                className="h-16 w-16 object-contain"
              />

              <span className="font-serif text-2xl tracking-[4px] text-[#d6b45e]">PIZZARATI</span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Premium pizza, fresh ingredients and fast delivery across Denmark.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/60 transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
              >
                f
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xl text-white">Navigation</h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-white/50">
              <a href="#home" className="transition hover:text-[#d6b45e]">
                Home
              </a>
              <a href="#menu" className="transition hover:text-[#d6b45e]">
                Menu
              </a>
              <a href="#about" className="transition hover:text-[#d6b45e]">
                About us
              </a>
              <a href="#reviews" className="transition hover:text-[#d6b45e]">
                Reviews
              </a>
              <a href="#contact" className="transition hover:text-[#d6b45e]">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl text-white">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d6b45e]" />
                <span>Frederikshavn, Denmark</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#d6b45e]" />
                <a href="tel:+4512345678" className="hover:text-white">
                  +45 12 34 56 78
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#d6b45e]" />
                <a href="mailto:hello@pizzarati.dk" className="hover:text-white">
                  hello@pizzarati.dk
                </a>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-serif text-xl text-white">Opening Hours</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <div className="flex justify-between gap-6">
                <span>Monday – Thursday</span>
                <span className="text-white/75">11:00 – 22:00</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Friday – Saturday</span>
                <span className="text-white/75">11:00 – 23:00</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Sunday</span>
                <span className="text-white/75">12:00 – 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pizzarati. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
