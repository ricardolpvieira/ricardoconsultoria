"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  {
    name: "Clínica Dra Dinorah",
    logo: "/images/clients/clinica-dra-dinorah-logo.png",
    url: "https://www.clinicadinorah.com.br/",
    category: "Medicina e Segurança do Trabalho",
    description: "Clínica especializada em medicina ocupacional",
  },
  {
    name: "FHF Service",
    logo: "/images/clients/fhf-service-logo.png",
    url: "https://www.fhfservice.com.br/",
    category: "Serviços Técnicos e Inteligentes",
    description: "Empresa de serviços especializados",
  },
  {
    name: "Clínica Núcleo Ocupacional",
    logo: "/images/clients/nucleo-ocupacional-logo.png",
    url: "https://www.nucleoocupacional.com.br/",
    category: "Medicina do Trabalho",
    description: "Centro médico ocupacional",
  },
  {
    name: "Clínica CotiMed",
    logo: "/images/clients/cotimed-logo.png",
    url: "https://cotimed.com.br/",
    category: "Saúde e Medicina",
    description: "Clínica médica moderna",
  },
  {
    name: "Ebicos",
    logo: "/images/clients/ebicos-logo.jpeg",
    url: "#",
    category: "Tecnologia",
    description: "Soluções tecnológicas inovadoras",
  },
  {
    name: "Val Consultoria",
    logo: "/images/clients/val-consultoria-logo.png",
    url: "#",
    category: "Consultoria em Qualidade Alimentar",
    description: "Consultoria especializada em qualidade",
  },
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
            Empresas de diversos segmentos confiam em nossas soluções para impulsionar seus negócios e transformar sua
            presença digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center">
                <div className="relative h-20 mb-4 flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`Logo ${client.name}`}
                    fill
                    className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 180px, 160px"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{client.category}</p>
                <p className="text-gray-600 text-sm mb-4">{client.description}</p>
                {client.url !== "#" && (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                  >
                    Visitar Site
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Segmentos Atendidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Saúde</h4>
                <p className="text-gray-600 text-sm">Clínicas médicas, medicina ocupacional e centros de saúde</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Serviços</h4>
                <p className="text-gray-600 text-sm">Empresas de serviços técnicos e consultoria especializada</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Tecnologia</h4>
                <p className="text-gray-600 text-sm">Empresas de tecnologia e soluções digitais inovadoras</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/casos-de-sucesso"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Casos de Sucesso
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
