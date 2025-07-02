import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nossos Serviços - Consultoria em Sistemas Web | Ricardo Tech",
  description:
    "Conheça todos os nossos serviços de consultoria em sistemas web: desenvolvimento, automação IA, SEO e muito mais. Soluções personalizadas para seu negócio.",
}

const services = [
  {
    icon: Server,
    title: "Implantação de Sistemas Web",
    description:
      "Desenvolvimento e implantação de sistemas web robustos, escaláveis e seguros para empresas de todos os portes.",
    features: ["Arquitetura escalável", "Segurança avançada", "Integração com APIs", "Suporte técnico"],
    href: "/servicos/implantacao-sistemas-web",
  },
  {
    icon: Globe,
    title: "Configurações de Domínios",
    description: "Configuração completa de domínios, DNS, certificados SSL e hospedagem profissional.",
    features: ["Registro de domínio", "Configuração DNS", "Certificado SSL", "Hospedagem premium"],
    href: "/servicos/configuracoes-dominios",
  },
  {
    icon: Smartphone,
    title: "Criação de Landing Pages",
    description: "Landing pages otimizadas para conversão com design responsivo e alta performance.",
    features: ["Design responsivo", "Otimização para conversão", "Integração com analytics", "A/B Testing"],
    href: "/servicos/criacao-landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "Criação de Lojas Virtuais",
    description: "E-commerce completo com sistema de pagamento integrado, gestão de estoque e relatórios.",
    features: ["Gateway de pagamento", "Gestão de produtos", "Relatórios de vendas", "App mobile"],
    href: "/servicos/criacao-lojas-virtuais",
  },
  {
    icon: FileText,
    title: "Blogs e Portal de Notícias",
    description: "Plataformas de conteúdo com CMS personalizado, SEO otimizado e sistema de comentários.",
    features: ["CMS personalizado", "SEO otimizado", "Sistema de comentários", "Newsletter integrada"],
    href: "/servicos/blogs-portal-noticias",
  },
  {
    icon: Layers,
    title: "Criação de Plataformas",
    description: "Desenvolvimento de plataformas customizadas para necessidades específicas do seu negócio.",
    features: ["Desenvolvimento customizado", "Integração de sistemas", "Dashboard administrativo", "API própria"],
    href: "/servicos/criacao-plataformas",
  },
  {
    icon: Settings,
    title: "Serviços de Manutenção",
    description: "Suporte técnico contínuo, atualizações de segurança e monitoramento 24/7.",
    features: ["Monitoramento 24/7", "Backups automáticos", "Atualizações de segurança", "Suporte prioritário"],
    href: "/servicos/manutencao-sites",
  },
  {
    icon: Zap,
    title: "Otimização de Velocidade",
    description: "Melhoria de performance e Core Web Vitals para melhor experiência do usuário e SEO.",
    features: ["Otimização de imagens", "Cache inteligente", "CDN global", "Análise de performance"],
    href: "/servicos/otimizacao-velocidade",
  },
  {
    icon: Search,
    title: "Otimização de SEO",
    description: "Estratégias avançadas de SEO para melhor posicionamento nos mecanismos de busca.",
    features: ["Pesquisa de palavras-chave", "SEO técnico", "Link building", "Relatórios mensais"],
    href: "/servicos/otimizacao-seo",
  },
  {
    icon: Bot,
    title: "Implantação de Agentes de IA",
    description: "Integração de inteligência artificial em seus processos para automação e eficiência.",
    features: ["Chatbots inteligentes", "Automação de processos", "Análise preditiva", "Machine Learning"],
    href: "/servicos/implantacao-agentes-ia",
  },
  {
    icon: MessageSquare,
    title: "Automação de Atendimento",
    description: "Sistemas automatizados para atendimento ao cliente 24/7 com IA conversacional.",
    features: ["Atendimento 24/7", "IA conversacional", "Integração WhatsApp", "Relatórios detalhados"],
    href: "/servicos/automacao-atendimento",
  },
  {
    icon: TrendingUp,
    title: "Consultoria IA",
    description: "Consultoria especializada em implementação de IA nos negócios e transformação digital.",
    features: ["Análise de processos", "Estratégia de IA", "Implementação gradual", "Treinamento da equipe"],
    href: "/servicos/consultoria-ia",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Oferecemos soluções completas em tecnologia web, desde criação de sites até implementação de inteligência
              artificial para transformar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Link href={service.href}>
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Não encontrou o que procura?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar uma solução personalizada para suas necessidades específicas.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
