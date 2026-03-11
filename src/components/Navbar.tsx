import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#f8f5f0]/90 border-b border-[#c8a96a]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-morobach.svg"
            alt="Morobach"
            className="h-8 w-auto"
          />

          <span className="font-serif text-lg tracking-wide text-[#3c2f2f]">
            Morobach
          </span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-[#4a3b33]">
          <a
            href="#modelo"
            className="hover:text-[#8a6b3f] transition-colors"
          >
            Modelo de cuidado
          </a>

          <a
            href="#sobre"
            className="hover:text-[#8a6b3f] transition-colors"
          >
            Sobre
          </a>

          <a
            href="#medico"
            className="hover:text-[#8a6b3f] transition-colors"
          >
            Médico
          </a>

          <a
            href="#faq"
            className="hover:text-[#8a6b3f] transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-block px-5 py-2 rounded-full border border-[#c8a96a] text-sm text-[#3c2f2f] hover:bg-[#c8a96a] hover:text-white transition-all"
        >
          Conversar
        </a>
      </div>
    </header>
  )
}
