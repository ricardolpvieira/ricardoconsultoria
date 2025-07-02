"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Globe,
  ShoppingCart,
  FileText,
  Settings,
  Zap,
  Search,
  Bot,
  MessageSquare,
  Layers,
  Server,
  Smartphone,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Server,
    title: "Implantação de Sistemas Web",
    description: "Desenvolvimento e implantação de sistemas web robustos e escaláveis.",
    href: "/servicos/implantacao-sistemas-web",
  },
  {
    icon: Globe,
    title: "Configurações de Domínios",
    description: "Configuração completa de domínios e hospedagem profissional.",
    href: "/servicos/configuracoes-dominios",
  },
  {
    icon: Smartphone,
    title: "Criação de Landing Pages",
    description: "Landing pages otimizadas para conversão e alta performance.",
    href: "/servicos/criacao-landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "Criação de Lojas Virtuais",
    description: "E-commerce completo com sistema de pagamento integrado.",
    href: "/servicos/criacao-lojas-virtuais",
  },
  {
    icon: FileText,
    title: "Blogs e Portal de Notícias",
    description: "Plataformas de conteúdo com CMS personalizado e SEO otimizado.",
    href: "/servicos/blogs-portal-noticias",
  },
  {
    icon: Layers,
    title: "Criação de Plataformas",
    description: "Desenvolvimento de plataformas customizadas para seu negócio.",
    href: "/servicos/criacao-plataformas",
  },
  {
    icon: Settings,
    title: "Manutenção de Sites",
    description: "Suporte técnico contínuo e atualizações de segurança.",
    href: "/servicos/manutencao-sites",
  },
  {
    icon: Zap,
    title: "Otimização de Velocidade",
    description: "Melhoria de performance e Core Web Vitals do seu site.",
    href: "/servicos/otimizacao-velocidade",
  },
  {
    icon: Search,
    title: "Otimização de SEO",
    description: "Estratégias avançadas de SEO para melhor posicionamento.",
    href: "/servicos/otimizacao-seo",
  },
  {
    icon: Bot,
    title: "Implantação de Agentes de IA",
    description: "Integração de inteligência artificial em seus processos.",
    href: "/servicos/implantacao-agentes-ia",
  },
  {
    icon: MessageSquare,
    title: "Automação de Atendimento",
    description: "Sistemas automatizados para atendimento ao cliente 24/7.",
    href: "/servicos/automacao-atendimento",
  },
  {
    icon: TrendingUp,
    title: "Consultoria IA",
    description: "Consultoria especializada em implementação de IA nos negócios.",
    href: "/servicos/consultoria-ia",
  },
]

export default function Services() {
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia web, desde criação de sites até implementação de inteligência
            artificial para transformar seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <div className="group h-60 w-55 p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
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
          <Link
            href="/servicos"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Serviços
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
