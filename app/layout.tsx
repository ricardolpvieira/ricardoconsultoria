import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button"

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

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ricardo Tech",
              url: "https://ricardolpvieira.com.br",
              logo: "https://ricardolpvieira.com.br/logo.png",
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
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
