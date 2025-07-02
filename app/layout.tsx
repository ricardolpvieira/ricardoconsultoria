import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardolpvieira.com.br"),
  title: {
    default: "Ricardo Tech - Consultoria em Sistemas Web",
    template: "%s | Ricardo Tech",
  },
  description:
    "Consultoria especializada em sistemas web com foco em inteligência artificial e automação de processos. Transformamos sua visão em realidade digital.",
  keywords:
    "Consultoria Sistemas Web, Desenvolvimento Web, Criação de Sites em São Paulo, Automação IA, Sistemas Web Personalizados",
  authors: [{ name: "Ricardo L P Vieira" }],
  creator: "Ricardo L P Vieira",
  publisher: "Ricardo Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ricardolpvieira.com.br" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ricardo Tech",
              url: "https://ricardolpvieira.com.br",
              logo: "https://blogger.googleusercontent.com/img/a/AVvXsEge4EO6Dip6M4nal0ese2z7osNH-J2nozBLTuR110ZSML1AKuEt4Rf8MCZxWdSDIlGJ9gzPAoEl4j0tm-gkMp2B42M59bVyXkJkwpNiARqkcOXD-XzNUUnfR2iXpGpQM8xc20OGkI4WnpdljuX1zIApDu2fPw66qpKQvLDr-jEZnyY3niAx20XDIIwjKMI=s497",
              description: "Consultoria em Sistemas Web",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-959046491",
                contactType: "customer service",
                email: "ricardo@ricardolpvieira.com.br",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barueri",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              sameAs: ["https://wa.me/5511959046491"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
