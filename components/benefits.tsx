"use client"

import { motion } from "framer-motion"
import { Rocket, Shield, Zap, Users, Code, Smartphone } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Performance Otimizada",
    description: "Sites ultra-rápidos com Core Web Vitals otimizados para melhor experiência do usuário e SEO.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção completa contra ameaças com certificados SSL, backups automáticos e monitoramento 24/7.",
  },
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description: "Utilizamos as mais modernas tecnologias e frameworks para garantir sites futuros e escaláveis.",
  },
  {
    icon: Users,
    title: "Experiência do Usuário",
    description: "Design centrado no usuário com interfaces intuitivas que convertem visitantes em clientes.",
  },
  {
    icon: Code,
    title: "Código Limpo",
    description: "Desenvolvimento com código semântico, otimizado e seguindo as melhores práticas da indústria.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Design responsivo que funciona perfeitamente em todos os dispositivos e tamanhos de tela.",
  },
]

export default function Benefits() {
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
            Por que Escolher a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ricardo Tech?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos expertise técnica com visão de negócios para entregar resultados transformadores que impulsionam
            o crescimento da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
