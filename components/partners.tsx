"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Hostinger", logo: "/parceiros/Hostinger_Logo.png?height=60&width=120" },
  { name: "HostGator", logo: "/parceiros/logo-hostgator.png?height=60&width=120" },
  { name: "Vercel", logo: "/parceiros/logo-vercel.svg?height=60&width=120" },
  { name: "AWS", logo: "/parceiros/Amazon_Web_Services_Logo.png?height=60&width=120" },
  { name: "Hostoo", logo: "/parceiros/logo-hostoo.png?height=60&width=120" },
  { name: "Cloudflare", logo: "/parceiros/Cloudflare_Logo.png?height=60&width=120" },
]

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Parceiros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com as melhores empresas de tecnologia para garantir qualidade e confiabilidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
