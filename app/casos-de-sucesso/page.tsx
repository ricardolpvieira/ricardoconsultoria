import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, TrendingUp, FileText, Heart } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Casos de Sucesso - Projetos Realizados | Ricardo Tech",
  description:
    "Conheça os casos de sucesso da Ricardo Tech. Projetos reais de clientes satisfeitos com resultados comprovados em diferentes segmentos.",
  keywords: "casos de sucesso, projetos web, clientes satisfeitos, portfolio, desenvolvimento web",
}

const successCases = [
  {
    id: 1,
    client: "Clínica Dra Dinorah",
    url: "https://www.clinicadinorah.com.br/",
    category: "Saúde",
    icon: Heart,
    image: "/placeholder.svg?height=300&width=500",
    description: "Site institucional moderno para clínica médica especializada",
    challenge:
      "Criar uma presença digital profissional que transmitisse confiança e facilitasse o agendamento de consultas.",
    solution:
      "Desenvolvemos um site responsivo com design clean, sistema de agendamento online e integração com WhatsApp.",
    results: [
      "Aumento de 150% nas consultas online",
      "Redução de 40% nas ligações telefônicas",
      "Melhoria na experiência do paciente",
      "Posicionamento no Google para palavras-chave locais",
    ],
    technologies: ["Next.js", "Tailwind CSS", "WhatsApp API", "Google Analytics"],
    timeline: "2 meses",
    year: "2023",
  },
  {
    id: 2,
    client: "FHF Service",
    url: "https://www.fhfservice.com.br/",
    category: "Serviços",
    icon: Users,
    image: "/placeholder.svg?height=300&width=500",
    description: "Plataforma completa para empresa de serviços especializados",
    challenge: "Modernizar a presença digital e criar um sistema para gerenciamento de serviços e clientes.",
    solution: "Site institucional com portfólio de serviços, sistema de orçamentos online e dashboard administrativo.",
    results: [
      "Aumento de 200% em solicitações de orçamento",
      "Automatização de 60% dos processos",
      "Melhoria na gestão de clientes",
      "Crescimento de 80% no faturamento",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    timeline: "3 meses",
    year: "2023",
  },
  {
    id: 3,
    client: "Clínica Núcleo Ocupacional",
    url: "https://www.nucleoocupacional.com.br/",
    category: "Medicina do Trabalho",
    icon: FileText,
    image: "/placeholder.svg?height=300&width=500",
    description: "Sistema web para gestão de medicina ocupacional",
    challenge: "Criar uma plataforma para gerenciar exames ocupacionais, laudos e relatórios médicos.",
    solution: "Sistema completo com agendamento, prontuário eletrônico, geração de laudos e relatórios automatizados.",
    results: [
      "Digitalização completa dos processos",
      "Redução de 70% no tempo de emissão de laudos",
      "Melhoria na organização de dados",
      "Compliance com normas regulamentadoras",
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "PDF Generator"],
    timeline: "4 meses",
    year: "2024",
  },
  {
    id: 4,
    client: "Clínica CotiMed",
    url: "https://cotimed.com.br/",
    category: "Saúde",
    icon: Heart,
    image: "/placeholder.svg?height=300&width=500",
    description: "Portal médico com agendamento e telemedicina",
    challenge: "Desenvolver uma plataforma completa para consultas presenciais e teleconsultas.",
    solution: "Portal integrado com sistema de agendamento, prontuário eletrônico e plataforma de telemedicina.",
    results: [
      "Implementação de telemedicina",
      "Aumento de 120% na base de pacientes",
      "Otimização da agenda médica",
      "Melhoria na satisfação dos pacientes",
    ],
    technologies: ["Next.js", "WebRTC", "Firebase", "Stripe"],
    timeline: "5 meses",
    year: "2024",
  },
]

export default function CasosDeSucessoPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Casos de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sucesso
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conheça os projetos que transformaram negócios e geraram resultados reais para nossos clientes. Cada caso
              é uma história de sucesso construída com tecnologia e dedicação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">150%</div>
                <div className="text-gray-600">ROI Médio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {successCases.map((case_, index) => (
              <div
                key={case_.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <Image
                      src={case_.image || "/placeholder.svg"}
                      alt={case_.client}
                      width={500}
                      height={300}
                      className="rounded-2xl shadow-lg w-full"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {case_.category}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <case_.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{case_.client}</h2>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {case_.year} • {case_.timeline}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">{case_.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Desafio</h3>
                      <p className="text-gray-600">{case_.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Solução</h3>
                      <p className="text-gray-600">{case_.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800 mb-3">Resultados</h3>
                      <ul className="space-y-2">
                        {case_.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800 mb-3">Tecnologias</h3>
                      <div className="flex flex-wrap gap-2">
                        {case_.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <a href={case_.url} target="_blank" rel="noopener noreferrer">
                        Visitar Site
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Seu Projeto Pode ser o Próximo Caso de Sucesso</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar sua ideia em um projeto de sucesso que gere resultados reais
            para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/servicos">Ver Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
