"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "FHF service", logo: "/clientes/FHF-Service-Servicos-Tecnicos-e-Inteligentes.png?height=60&width=120" },
  { name: "Clinica Dra. Dinorah", logo: "/clientes/clinica-dra-dinorah.png?height=60&width=120" },
  { name: "Nucleo Ocupacional", logo: "/clientes/clinica-nucleo-ocupacional.png?height=60&width=120" },
  { name: "Clinica CotiMed", logo: "/clientes/clinica-coti-med.png?height=60&width=120" },
  { name: "Val Consultoria", logo: "/clientes/logo-Val-Consultoria-Qualidade-Alimentar.png?height=60&width=120" },
  { name: "SmartSolutions", logo: "/clientes/placeholder.svg?height=60&width=120" },
]

export default function Clients() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de diversos segmentos confiam em nossas soluções para impulsionar seus negócios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
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
