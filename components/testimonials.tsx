"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Maria Silva",
    company: "Boutique Fashion",
    content:
      "O Ricardo transformou completamente nossa presença online. Nosso e-commerce aumentou as vendas em 300% no primeiro mês!",
    rating: 5,
    image: "/images/clients/maria-silva.jpg",
  },
  {
    name: "João Santos",
    company: "Consultoria Empresarial",
    content:
      "Profissional excepcional! Entregou um site moderno, rápido e que realmente converte. Recomendo sem hesitar.",
    rating: 5,
    image: "/images/clients/joao-santos.jpg",
  },
  {
    name: "Ana Costa",
    company: "Clínica Médica",
    content:
      "A automação de atendimento implementada revolucionou nossa clínica. Agora temos atendimento 24h automatizado.",
    rating: 5,
    image: "/images/clients/ana-costa.jpg",
  },
  {
    name: "Carlos Oliveira",
    company: "Restaurante Gourmet",
    content:
      "Site incrível com sistema de delivery integrado. A experiência do usuário é fantástica e as vendas dispararam.",
    rating: 5,
    image: "/images/clients/carlos-oliveira.jpg",
  },
]

export default function Testimonials() {
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
            O que Nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os depoimentos de empresas que transformaram seus negócios com nossas soluções.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-blue-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
                <Quote className="w-8 h-8 text-blue-600 ml-auto opacity-50" />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/casos-de-sucesso"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Mais Depoimentos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
