import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Zap, Shield, Database, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const IntegracionAPIs=() => {
  const features = [
    'Integración con múltiples APIs simultáneamente',
    'Manejo de diferentes protocolos (REST, SOAP, GraphQL)',
    'Cache inteligente de respuestas',
    'Retry logic y circuit breakers',
    'Transformación y mapeo de datos',
    'Monitoreo de APIs externas en tiempo real',
    'Rate limiting y throttling',
    'Autenticación múltiple (OAuth, JWT, API Keys)',
    'Logging detallado de transacciones',
    'Manejo de errores robusto',
    'Documentación automática de integraciones',
    'Testing automatizado de endpoints',
    'Versionado de integraciones',
    'Backup y recuperación de datos',
    'Notificaciones de fallos automáticas',
    'Dashboard de monitoreo incluido'
  ];

  const process = [
    'Análisis de APIs externas a integrar',
    'Diseño de arquitectura de integración',
    'Configuración de autenticación y seguridad',
    'Desarrollo de conectores personalizados',
    'Implementación de cache y optimización',
    'Configuración de monitoreo y alertas',
    'Pruebas de integración exhaustivas',
    'Documentación técnica completa',
    'Despliegue y configuración en producción',
    'Capacitación del equipo técnico',
    'Monitoreo post-implementación',
    'Soporte y ajustes iniciales'
  ];

  const technologies = ['Java 17', 'Spring Boot', 'Apache Camel', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus'];

  const integrationTypes = [
    'APIs de pagos (Stripe, PayPal, MercadoPago)',
    'Servicios de envío (FedEx, UPS, DHL)',
    'CRM y ERP (Salesforce, SAP, Oracle)',
    'Redes sociales (Facebook, Twitter, LinkedIn)',
    'Servicios de email (SendGrid, Mailchimp)',
    'Analytics (Google Analytics, Mixpanel)',
    'Almacenamiento en la nube (AWS S3, Google Cloud)',
    'Servicios de geolocalización (Google Maps, Mapbox)'
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Automatización Completa',
      description: 'Elimina procesos manuales y sincroniza datos automáticamente'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Seguridad Garantizada',
      description: 'Encriptación end-to-end y manejo seguro de credenciales'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Sincronización en Tiempo Real',
      description: 'Datos actualizados instantáneamente entre sistemas'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Escalabilidad Ilimitada',
      description: 'Maneja miles de requests por segundo sin problemas'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón Volver */}
        <NavLink
          to={"/Servicios/Apis"}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Desarrollo de Servicios
        </NavLink>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Integración de APIs Externas</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Conecta tu sistema con el mundo</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollamos integraciones robustas y seguras que conectan tu aplicación con servicios externos, 
                automatizando procesos y sincronizando datos en tiempo real. Especialistas en APIs REST, SOAP y GraphQL.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $1,500</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">3-5 semanas</span>
                </div>
              </div>

              <div className="flex gap-4">
                <NavLink
                  to={"/Contacto"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Cotización
                </NavLink>
                <NavLink
                  to={"/Contacto"}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Consulta Técnica
                </NavLink>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Integración de APIs externas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tipos de Integración */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Integración Soportados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrationTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficios Clave */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios de la Integración</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <div className="text-blue-600">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funcionalidades Incluidas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Funcionalidades Incluidas</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Integración</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stack Tecnológico</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
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
                "La integración con nuestro ERP y sistema de pagos fue perfecta. Ahora todo funciona automáticamente y hemos reducido errores en un 95%."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Luis Hernández</div>
                <div className="text-sm text-gray-500">Director IT, LogiCorp</div>
              </div>
            </div>

            {/* Casos de Uso */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Casos de Uso Comunes</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Sincronización con CRM/ERP
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Procesamiento de pagos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Gestión de envíos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Marketing automation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Análisis de datos
                </li>
              </ul>
            </div>

            {/* Precios Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios Adicionales</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">API adicional</span>
                  <span className="font-medium text-gray-900">+$500</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Transformación compleja</span>
                  <span className="font-medium text-gray-900">+$800</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Dashboard personalizado</span>
                  <span className="font-medium text-gray-900">+$1,200</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Soporte 24/7</span>
                  <span className="font-medium text-gray-900">+$300/mes</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Necesitas conectar sistemas?</h3>
              <p className="mb-4 opacity-90">
                Automatiza procesos y elimina trabajo manual con nuestras integraciones.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Consulta Técnica Gratuita
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegracionAPIs;