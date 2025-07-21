"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "Hostinger",
    logo: "/images/partners/hostinger-logo.png",
    url: "https://hostinger.com.br?REFERRALCODE=1ALPHA44",
    description: "Hospedagem web de alta performance",
  },
  {
    name: "AWS",
    logo: "/images/partners/aws-logo.png",
    url: "https://aws.amazon.com/",
    description: "Serviços de nuvem Amazon",
  },
  {
    name: "Hostoo",
    logo: "/images/partners/hostoo-logo.png",
    url: "https://hostoo.io/",
    description: "Soluções de hospedagem premium",
  },
  {
    name: "Vercel",
    logo: "/images/partners/vercel-logo.svg",
    url: "https://vercel.com/",
    description: "Plataforma de deploy e hosting",
  },
  {
    name: "HostGator",
    logo: "/images/partners/hostgator-logo.webp",
    url: "https://www.hostgator.com.br/42101.html",
    description: "Hospedagem confiável e escalável",
  },
  {
    name: "Cloudflare",
    logo: "/images/partners/cloudflare-logo.png",
    url: "https://www.cloudflare.com/",
    description: "CDN e segurança web",
  },
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
            Trabalhamos com as melhores empresas de tecnologia para garantir qualidade, confiabilidade e performance em
            todos os nossos projetos.
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
              className="group flex items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 grayscale hover:grayscale-0"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex items-center justify-center"
                title={partner.description}
              >
                <div className="relative w-full h-12 flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 150px, (max-width: 1024px) 120px, 100px"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Por que Escolhemos Estes Parceiros?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Confiabilidade</h4>
                  <p className="text-gray-600 text-sm">
                    Empresas com histórico comprovado de estabilidade e uptime superior a 99.9%
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Performance</h4>
                  <p className="text-gray-600 text-sm">
                    Infraestrutura de alta performance com CDN global e otimização avançada
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Suporte</h4>
                  <p className="text-gray-600 text-sm">
                    Suporte técnico especializado 24/7 para garantir o melhor atendimento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
