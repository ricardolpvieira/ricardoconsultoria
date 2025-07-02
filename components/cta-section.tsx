"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento da Ricardo Tech:
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`

    const whatsappUrl = `https://wa.me/5511959046491?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Transformar
              <br />
              <span className="text-blue-200">Seu Negócio?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como podemos impulsionar sua presença digital com soluções inovadoras
              e personalizadas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-200" />
                <span className="text-lg">(11) 95904-6491</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-200" />
                <span className="text-lg">ricardo@ricardolpvieira.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-200" />
                <span className="text-lg">Barueri - São Paulo</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Solicite seu Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Seu telefone/WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white"
              >
                <option value="" className="text-gray-800">
                  Selecione o serviço
                </option>
                <option value="Site Institucional" className="text-gray-800">
                  Site Institucional
                </option>
                <option value="E-commerce" className="text-gray-800">
                  E-commerce
                </option>
                <option value="Landing Page" className="text-gray-800">
                  Landing Page
                </option>
                <option value="Sistema Web" className="text-gray-800">
                  Sistema Web
                </option>
                <option value="Automação IA" className="text-gray-800">
                  Automação IA
                </option>
                <option value="Consultoria" className="text-gray-800">
                  Consultoria
                </option>
                <option value="Outro" className="text-gray-800">
                  Outro
                </option>
              </select>
              <Textarea
                name="message"
                placeholder="Conte-nos mais sobre seu projeto..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar via WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
