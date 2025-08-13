import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Gift, ChevronDown, ChevronUp, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'El tiempo varía según la complejidad. Una página web informativa puede tomar 2-3 semanas, mientras que un e-commerce completo puede requerir 6-8 semanas. Te proporcionamos un cronograma detallado en la cotización.'
    },
    {
      question: '¿Ofrecen soporte después del lanzamiento?',
      answer: 'Sí, incluimos 3 meses de soporte gratuito post-lanzamiento. Después ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, backups y soporte técnico.'
    },
    {
      question: '¿Trabajan con empresas de cualquier tamaño?',
      answer: 'Absolutamente. Hemos trabajado desde startups hasta empresas establecidas. Adaptamos nuestros servicios y metodología según las necesidades y presupuesto de cada cliente.'
    },
    {
      question: '¿Qué incluye una cotización?',
      answer: 'Nuestras cotizaciones incluyen análisis de requerimientos, propuesta técnica, cronograma detallado, costos desglosados y términos de soporte. Todo sin compromiso.'
    },
    {
      question: '¿Pueden integrar sistemas existentes?',
      answer: 'Sí, tenemos amplia experiencia en integración de sistemas legacy, APIs de terceros, bases de datos existentes y migración de datos. Evaluamos cada caso específicamente.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¡Hablemos de tu Proyecto!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para convertir tu idea en realidad. Contáctanos y recibe una cotización personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitud Rápida</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">¡Mensaje Enviado!</h4>
                <p className="text-gray-600">Te contactaremos en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona un tipo de proyecto</option>
                    <option value="web-informativa">Página Web Informativa</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="app-administrativa">Aplicación Administrativa</option>
                    <option value="api-rest">API Rest</option>
                    <option value="microservicios">Microservicios</option>
                    <option value="consultoria">Consultoría Tecnológica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Describe tu proyecto, objetivos, funcionalidades deseadas, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Solicitud
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Información de Contacto y Agenda */}
          <div className="space-y-8">
            {/* Botón de Agenda */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">¿Prefieres una Videollamada?</h3>
              <p className="mb-6 opacity-90">
                Agenda una consulta gratuita de 30 minutos para discutir tu proyecto en detalle.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Agendar Consulta Gratuita
              </button>
            </div>

            {/* Oferta Especial */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">🎉 Oferta de Lanzamiento</h3>
              <p className="mb-4 opacity-90">
                <strong>15% de descuento</strong> en tu primer proyecto si contactas este mes.
              </p>
              <p className="text-sm opacity-75">
                *Válido para proyectos contratados antes del 31 de enero de 2025
              </p>
            </div>

            {/* Información de Contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contacto@devcoder.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Trabajo remoto - Cobertura global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;