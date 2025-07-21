"use client"

import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar o botão após um pequeno delay para melhor UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Estilos CSS inline para garantir que funcionem */}
      <style jsx>{`
        .btn-whatsapp a {
          color: #fff;
          text-decoration: none;
          display: block;
        }
        
        .btn-whatsapp {
          position: fixed;
          left: 40px;
          bottom: 30px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .btn-whatsapp i {
          font-size: 30px;
        }
        
        .btn-whatsapp:hover {
          transform: scale(1.1);
        }
        
        @keyframes pulso {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .pulsaDelay {
          animation: pulso 1.5s infinite;
        }
        
        .btn-whatsapp:before,
        .btn-whatsapp:after {
          content: '';
          display: block;
          position: absolute;
          border-radius: 50%;
          border: 1px solid #25d366;
          left: -20px;
          right: -20px;
          bottom: -20px;
          top: -20px;
          animation: animate 1.5s linear infinite;
          opacity: 0;
          backface-visibility: hidden;
        }
        
        .pulsaDelay:after { 
          animation-delay: .5s; 
        }
        
        @keyframes animate {
          0% { transform: scale(0.5); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        /* Responsividade para mobile */
        @media (max-width: 768px) {
          .btn-whatsapp {
            left: 20px;
            bottom: 20px;
            width: 55px;
            height: 55px;
          }
          
          .btn-whatsapp i {
            font-size: 26px;
          }
        }
      `}</style>

      {/* Link do Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />

      {/* Botão WhatsApp */}
      <a
        href="https://api.whatsapp.com/send/?phone=5511959046491&text=Ol%C3%A1%21+Ricardo%21+Gostaria+de+solicitar+um+servi%C3%A7o+com+voc%C3%AA%21&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <div className="btn-whatsapp pulsaDelay">
          <i className="bi bi-whatsapp"></i>
        </div>
      </a>
    </>
  )
}
