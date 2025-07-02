"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    company: "Boutique Fashion",
    content:
      "O Ricardo transformou completamente nossa presença online. Nosso e-commerce aumentou as vendas em 300% no primeiro mês!",
    rating: 5,
    image: "/comentarios/Maria-Silva.jpg?height=80&width=80",
  },
  {
    name: "João Santos",
    company: "Consultoria Empresarial",
    content:
      "Profissional excepcional! Entregou um site moderno, rápido e que realmente converte. Recomendo sem hesitar.",
    rating: 5,
    image: "/comentarios/João-Santos.jpg?height=80&width=80",
  },
  {
    name: "Ana Costa",
    company: "Clínica Médica",
    content:
      "A automação de atendimento implementada revolucionou nossa clínica. Agora temos atendimento 24h automatizado.",
    rating: 5,
    image: "/comentarios/Ana-Costa.jpg?height=80&width=80",
  },
  {
    name: "Carlos Oliveira",
    company: "Restaurante Gourmet",
    content:
      "Site incrível com sistema de delivery integrado. A experiência do usuário é fantástica e as vendas dispararam.",
    rating: 5,
    image: "/comentarios/Carlos-Oliveira.jpg?height=80&width=80",
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
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.company}</p>
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
      </div>
    </section>
  )
}
