import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Globe, Search, Shield, Smartphone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const WebInformativo=()=>{
  const features = [
    'Diseño responsive y moderno',
    'Optimización SEO básica',
    'Formulario de contacto funcional',
    'Integración con redes sociales',
    'Panel de administración básico',
    'Certificado SSL incluido',
    'Google Analytics configurado',
    'Optimización de velocidad',
    'Hasta 5 páginas principales',
    'Galería de imágenes optimizada'
  ];

  const process = [
    'Reunión inicial y definición de objetivos',
    'Análisis de competencia y mercado objetivo',
    'Diseño de wireframes y mockups',
    'Desarrollo frontend responsive',
    'Implementación de CMS básico',
    'Optimización SEO y velocidad',
    'Pruebas de funcionalidad',
    'Lanzamiento y configuración de hosting',
    'Capacitación en uso del panel',
    'Entrega de documentación'
  ];

  const technologies = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel/Netlify'];

  const includedPages = [
    'Página de inicio atractiva',
    'Sobre nosotros/empresa',
    'Servicios o productos',
    'Contacto con formulario',
    'Blog básico (opcional)'
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón Volver */}
        <NavLink
          to={"/Servicios/Web"}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Desarrollo Web
        </NavLink>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Páginas Web Informativas</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Presencia digital profesional para tu empresa</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creamos sitios web informativos que comunican efectivamente tu marca, servicios y valores empresariales. 
                Diseñados para convertir visitantes en clientes potenciales con un diseño moderno y funcional.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $800</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">2-3 semanas</span>
                </div>
              </div>

              <div className="flex gap-4">
                <NavLink
                    to="/Contacto"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Cotización
                </NavLink>
                <NavLink
                    to="/Contacto"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Más Información
                </NavLink>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sitio web informativo profesional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Páginas Incluidas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Páginas Incluidas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedPages.map((page, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{page}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Características */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué incluye este servicio?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso de Desarrollo */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Desarrollo</h2>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tecnologías */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tecnologías Utilizadas</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Beneficios Clave */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios Clave</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Search className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">SEO Optimizado</h3>
                    <p className="text-gray-600 text-sm">Tu sitio aparecerá en los primeros resultados de Google</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">100% Responsive</h3>
                    <p className="text-gray-600 text-sm">Perfecto en móviles, tablets y computadoras</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Seguridad Garantizada</h3>
                    <p className="text-gray-600 text-sm">SSL, backups automáticos y protección contra ataques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fácil de Actualizar</h3>
                    <p className="text-gray-600 text-sm">Panel intuitivo para que actualices contenido sin programar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Testimonial */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "DevCoder creó exactamente lo que necesitábamos. El sitio es profesional, rápido y nos ha ayudado a generar más leads. El proceso fue muy transparente."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">María González</div>
                <div className="text-sm text-gray-500">Consultora Legal MG</div>
              </div>
            </div>

            {/* Paquetes Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Mejoras Disponibles</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Páginas adicionales</span>
                  <span className="font-medium text-gray-900">+$150 c/u</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Blog avanzado</span>
                  <span className="font-medium text-gray-900">+$300</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Multiidioma</span>
                  <span className="font-medium text-gray-900">+$400</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Chat en vivo</span>
                  <span className="font-medium text-gray-900">+$200</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Listo para comenzar?</h3>
              <p className="mb-4 opacity-90">
                Obtén una cotización personalizada y comienza tu proyecto hoy mismo.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Consulta Gratuita
              </NavLink>
            </div>

            {/* Garantías */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nuestras Garantías</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  3 meses de soporte gratuito
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Código fuente incluido
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Documentación completa
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Capacitación incluida
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Hosting primer año gratis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebInformativo;