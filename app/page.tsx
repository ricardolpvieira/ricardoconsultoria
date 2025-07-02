import type { Metadata } from "next"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Clients from "@/components/clients"
import Partners from "@/components/partners"
import CTASection from "@/components/cta-section"
import Preloader from "@/components/preloader"

export const metadata: Metadata = {
  title: "Ricardo Tech - Consultoria em Sistemas Web",
  description:
    "Consultoria especializada em sistemas web com foco em inteligência artificial e automação de processos. Transformamos sua visão em realidade digital.",
  keywords:
    "Consultoria Sistemas Web, Desenvolvimento Web, Criação de Sites em São Paulo, Automação IA, Sistemas Web Personalizados",
  openGraph: {
    title: "Ricardo Tech - Consultoria em Sistemas Web",
    description: "Consultoria especializada em sistemas web com foco em IA e automação",
    url: "https://ricardolpvieira.com.br",
    siteName: "Ricardo Tech",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Ricardo Tech - Consultoria em Sistemas Web",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Tech - Consultoria em Sistemas Web",
    description: "Consultoria especializada em sistemas web com foco em IA e automação",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <Services />
        <Testimonials />
        <Clients />
        <Partners />
        <CTASection />
      </main>
    </>
  )
}
