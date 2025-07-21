import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, TrendingUp, Heart, ArrowLeft } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Caso de Sucesso: Clínica Dra. Dinorah | Ricardo Tech",
  description:
    "Conheça como a Ricardo Tech transformou a presença digital da Clínica Dra. Dinorah com um site moderno e sistema de agendamento online.",
  keywords: "clinica dra dinorah, caso de sucesso, site médico, agendamento online",
}

export default function ClinicaDraDinorahPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
            <span>/</span>
            <Link href="/casos-de-sucesso" className="hover:text-blue-600">
              Casos de Sucesso
            </Link>
            <span>/</span>
            <span className="text-gray-800">Clínica Dra. Dinorah</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/casos-de-sucesso" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Casos de Sucesso
            </Link>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Clínica Dra. Dinorah
                  </span>
                </h1>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  2023 • 2 meses de desenvolvimento
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Site institucional moderno para clínica médica especializada com sistema de agendamento online integrado.
            </p>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a href="https://www.clinicadinorah.com.br/" target="_blank" rel="noopener noreferrer">
                Visitar Site
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Site da Clínica Dra. Dinorah"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">O Desafio</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A Clínica Dra. Dinorah precisava de uma presença digital profissional que transmitisse confiança e
                  facilitasse o agendamento de consultas. O objetivo era criar um site moderno que refletisse a
                  qualidade dos serviços médicos oferecidos.
                </p>

                <h3 className="text-xl font-bold mb-4">Principais Necessidades:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    Design profissional e confiável
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    Sistema de agendamento online
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    Informações claras sobre serviços
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    Otimização para dispositivos móveis
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">A Solução</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Desenvolvemos um site responsivo com design clean e profissional, sistema de agendamento online
                  integrado e otimização completa para SEO local, garantindo maior visibilidade nos resultados de busca.
                </p>

                <h3 className="text-xl font-bold mb-4">Funcionalidades Implementadas:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                    Site responsivo e otimizado
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                    Agendamento online via WhatsApp
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                    Galeria de serviços médicos
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                    Integração com Google Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Resultados Alcançados</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
                <div className="text-gray-600">Aumento nas consultas online</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Redução nas ligações telefônicas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfação dos pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">#1</div>
                <div className="text-gray-600">Posição no Google local</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Impactos Principais:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Aumento significativo no número de consultas agendadas online</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Melhoria na experiência do paciente com agendamento simplificado
                  </span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Posicionamento destacado no Google para buscas locais</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Redução da carga de trabalho da recepção</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Next.js", "Tailwind CSS", "WhatsApp API", "Google Analytics"].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quer Resultados Similares?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar sua presença digital e gerar resultados reais para seu
            negócio.
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
              <Link href="/casos-de-sucesso">Ver Outros Casos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
