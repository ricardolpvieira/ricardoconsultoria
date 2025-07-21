"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Phone, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    {
      label: "Serviços",
      submenu: [
        { href: "/servicos/criacao-landing-pages", label: "Criação de Landing Pages" },
        { href: "/servicos/criacao-lojas-virtuais", label: "Criação de Lojas Virtuais" },
        { href: "/servicos/manutencao-sites", label: "Manutenção de Sites" },
        { href: "/servicos/otimizacao-seo", label: "Otimização de SEO" },
        { href: "/servicos/automacao-atendimento", label: "Autoatendimento" },
      ],
    },
    {
      label: "Casos de Sucesso",
      submenu: [
        { href: "/casos-de-sucesso/clinica-dra-dinorah", label: "Clínica Dra. Dinorah" },
        { href: "/casos-de-sucesso/fhf-service", label: "FHF Service" },
      ],
    },
    { href: "/contato", label: "Contato" },
  ]

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ricardo Tech
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={closeDropdowns}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                              onClick={closeDropdowns}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="tel:+5511959046491">
                <Phone className="w-4 h-4 mr-2" />
                (11) 95904-6491
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-8 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Link href="tel:+5511959046491">
                      <Phone className="w-4 h-4 mr-2" />
                      (11) 95904-6491
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
