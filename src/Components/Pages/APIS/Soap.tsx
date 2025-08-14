import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Server,  Code, Lock, Cpu, Layers, GitMerge } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const JavaAPISoap = () => {
  const features = [
    'Implementación con JAX-WS y Apache CXF',
    'Generación automática de WSDL',
    'WS-Security para autenticación y cifrado',
    'Manejo de transacciones distribuidas (XA)',
    'Compatibilidad con sistemas legacy (COBOL, Mainframe)',
    'Versionado de servicios (SOAP 1.1/1.2)',
    'Validación de mensajes con XSD',
    'Logging detallado de mensajes SOAP',
    'Mapeo objeto-XML (JAXB) optimizado',
    'Handlers personalizados para pre/post procesamiento',
    'Conversión de datos complejos',
    'Pruebas con SoapUI integradas',
    'Monitoreo de servicios en tiempo real',
    'Throttling y limitación de requests',
    'Soporte para attachments (MTOM)',
    'Documentación técnica completa'
  ];

  const process = [
    'Análisis de WSDL existentes o diseño de nuevos',
    'Definición de XSD para tipos de datos complejos',
    'Configuración del proyecto Java EE/Jakarta EE',
    'Implementación de endpoints (SEI)',
    'Desarrollo de lógica de negocio',
    'Configuración de WS-Security (Policy)',
    'Implementación de handlers personalizados',
    'Integración con sistemas backend',
    'Pruebas unitarias y de integración',
    'Generación de clientes de prueba',
    'Optimización de rendimiento',
    'Documentación WSDL y ejemplos',
    'Despliegue en ambiente productivo'
  ];

  const technologies = ['Java 11/17', 'JAX-WS', 'Apache CXF', 'Spring WS', 'XML/XSD', 'WS-Security', 'SOAP 1.1/1.2', 'WebLogic/WebSphere'];

  const serviceTypes = [
    'Servicios de consulta (read-only)',
    'Operaciones CRUD completas',
    'Procesamiento batch',
    'Integración financiera',
    'Interfaz con ERPs (SAP, Oracle)',
    'Comunicación con mainframes',
    'Servicios de reporting',
    'Validación y transformación de datos'
  ];

  const architectureFeatures = [
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Arquitectura Empresarial',
      description: 'Diseñada para integración con sistemas complejos y legacy'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Seguridad Industrial',
      description: 'WS-Security, SAML, encriptación XML y autenticación mutua'
    },
    {
      icon: <GitMerge className="h-8 w-8" />,
      title: 'Interoperabilidad',
      description: 'Compatible con .NET, PHP y otros lenguajes vía SOAP'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Alto Rendimiento',
      description: 'Optimizado para cargas pesadas de mensajes XML'
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
                <Server className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Java API SOAP</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Servicios web empresariales robustos</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollamos servicios SOAP de alta confiabilidad para integración con sistemas legacy y aplicaciones corporativas.
                Soluciones compatibles con estándares industriales y diseñadas para entornos críticos.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $2,500</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">5-7 semanas</span>
                </div>
                <div className="flex items-center bg-red-50 px-4 py-2 rounded-lg">
                  <Code className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-red-800 font-medium">Complejidad Alta</span>
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
                src="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Java API SOAP development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tipos de Servicio */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Servicios Implementados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceTypes.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Características de Arquitectura */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Arquitectura SOAP</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funcionalidades Técnicas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Técnicas</h2>
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
                "Migraron nuestros servicios AS400 a SOAP con una precisión increíble. El equipo entendió perfectamente nuestros requerimientos legacy."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Roberto Sánchez</div>
                <div className="text-sm text-gray-500">Arquitecto TI, Banco Nacional</div>
              </div>
            </div>

            {/* Compatibilidad */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Sistemas Compatibles</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                  <span>IBM Mainframe (CICS)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                  <span>SAP R/3 y PI</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                  <span>Oracle E-Business</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                  <span>.NET Framework</span>
                </div>
              </div>
            </div>

            {/* Servicios Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios Adicionales</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Migración de legacy</span>
                  <span className="font-medium text-gray-900">+$3,000</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Soporte WS-* avanzado</span>
                  <span className="font-medium text-gray-900">+$1,200</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Cluster empresarial</span>
                  <span className="font-medium text-gray-900">+$2,500</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Monitoreo 24/7</span>
                  <span className="font-medium text-gray-900">+$1,800/año</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Integración con sistemas legacy?</h3>
              <p className="mb-4 opacity-90">
                Nuestros expertos en SOAP pueden ayudarte.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Consultoría Especializada
              </NavLink>
            </div>

            {/* Garantías */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Garantías Técnicas</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  WSDL perfectamente estructurado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Pruebas de interoperabilidad
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Documentación WS-* completa
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Soporte para migraciones
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Entrenamiento para equipos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaAPISoap;