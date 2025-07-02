import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Shield, Zap, Code, Database, Cloud, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Implantação de Sistemas Web - Consultoria Especializada | Ricardo Tech",
  description:
    "Consultoria e desenvolvimento de sistemas web robustos, escaláveis e seguros. Arquitetura moderna e suporte completo da Ricardo Tech.",
}

export default function ImplantacaoSistemasWeb() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Server className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Implantação de Sistemas Web
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Desenvolvemos e implantamos sistemas web robustos, escaláveis e seguros, utilizando as mais modernas
              tecnologias para atender às necessidades específicas do seu negócio.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Segurança Avançada</h3>
              <p className="text-gray-600">
                Implementamos as melhores práticas de segurança, incluindo criptografia, autenticação robusta e proteção
                contra ataques.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Alta Performance</h3>
              <p className="text-gray-600">
                Sistemas otimizados para alta performance, com cache inteligente e arquitetura escalável para suportar
                grande volume de usuários.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Código Limpo</h3>
              <p className="text-gray-600">
                Desenvolvimento com código limpo, documentado e seguindo as melhores práticas para facilitar manutenção
                e evolução.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <Database className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Banco de Dados</h3>
              <p className="text-gray-600">
                Modelagem e otimização de banco de dados para garantir integridade, performance e escalabilidade dos
                dados.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <Cloud className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cloud Native</h3>
              <p className="text-gray-600">
                Sistemas desenvolvidos para cloud com arquitetura moderna, microserviços e deploy automatizado.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <Server className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Infraestrutura</h3>
              <p className="text-gray-600">
                Configuração completa de infraestrutura com monitoramento, logs e alertas para garantir disponibilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nosso Processo de Desenvolvimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos uma metodologia ágil e estruturada para garantir a entrega de sistemas de alta qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Análise de Requisitos</h3>
              <p className="text-gray-600">Levantamento detalhado das necessidades e objetivos do projeto.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Arquitetura e Design</h3>
              <p className="text-gray-600">Definição da arquitetura técnica e design da interface do usuário.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Desenvolvimento</h3>
              <p className="text-gray-600">Codificação do sistema com testes contínuos e entregas incrementais.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Deploy e Suporte</h3>
              <p className="text-gray-600">Implantação em produção e suporte contínuo para garantir estabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Tecnologias Utilizadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as mais modernas tecnologias do mercado para garantir sistemas robustos e escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Kubernetes",
              "Redis",
              "GraphQL",
              "TypeScript",
              "Next.js",
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Benefícios dos Nossos Sistemas</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Escalabilidade Automática</h3>
                    <p className="text-blue-100">
                      Sistemas que crescem junto com seu negócio, sem perda de performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Integração Completa</h3>
                    <p className="text-blue-100">
                      Conectamos seu sistema com APIs externas e outros sistemas da empresa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Monitoramento 24/7</h3>
                    <p className="text-blue-100">
                      Acompanhamento contínuo da saúde do sistema com alertas automáticos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Backup Automático</h3>
                    <p className="text-blue-100">
                      Seus dados sempre protegidos com backups automáticos e recuperação rápida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Solicite uma Consultoria Gratuita</h3>
              <p className="text-blue-100 mb-6 text-center">
                Vamos analisar suas necessidades e propor a melhor solução para seu negócio.
              </p>
              <Button asChild className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Link href="https://wa.me/5511959046491?text=Olá! Gostaria de uma consultoria gratuita sobre implantação de sistemas web da Ricardo Tech.">
                  Falar no WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
