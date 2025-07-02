import Link from "next/link"
import { Code, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Ricardo Tech</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Consultoria especializada em sistemas web com foco em inteligência artificial e automação de processos.
              Transformamos sua visão em realidade digital.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>(11) 95904-6491</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>ricardo@ricardolpvieira.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>Barueri - São Paulo</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/criacao-sites" className="text-gray-400 hover:text-white transition-colors">
                  Criação de Sites
                </Link>
              </li>
              <li>
                <Link href="/servicos/e-commerce" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/servicos/automacao-ia" className="text-gray-400 hover:text-white transition-colors">
                  Automação IA
                </Link>
              </li>
              <li>
                <Link href="/servicos/consultoria" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="/termos-uso" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ricardo Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
