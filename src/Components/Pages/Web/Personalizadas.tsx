import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Code, Cpu, GitMerge, Zap, ShieldCheck } from 'lucide-react';
//Iconos adicionales:  Cog, Server,
import { NavLink } from 'react-router-dom';

const AplicacionesPersonalizadas = () => {
  const features = [
    'Análisis de requerimientos detallado',
    'Arquitectura personalizada escalable',
    'Desarrollo de funcionalidades específicas',
    'Integración con APIs externas y servicios',
    'Diseño UI/UX adaptado a tus usuarios',
    'Autenticación y seguridad avanzada',
    'Pruebas de carga y rendimiento',
    'Documentación técnica completa',
    'Capacitación para tu equipo técnico',
    'Soporte post-implementación'
  ];

  const process = [
    'Workshop de descubrimiento (2-3 sesiones)',
    'Documentación de requerimientos técnicos',
    'Diseño de arquitectura y aprobación',
    'Desarrollo iterativo con sprints de 2 semanas',
    'Revisiones técnicas intermedias',
    'Pruebas de integración y usuario',
    'Optimización de rendimiento',
    'Implementación en ambiente productivo',
    'Capacitación técnica completa',
    'Entrega formal y soporte continuo'
  ];

  const technologies = ['React/Next.js', 'Node.js/NestJS', 'GraphQL', 'Docker/Kubernetes', 'AWS/GCP', 'MongoDB/PostgreSQL', 'Redis'];

  const includedServices = [
    'Consultoría técnica inicial',
    'Prototipo funcional',
    'Código fuente completo',
    'Repositorio Git privado',
    'CI/CD configurado',
    'Monitorización implementada',
    'Documentación API (Swagger/Postman)'
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
          Volver a Servicios
        </NavLink>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Aplicaciones Personalizadas</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Soluciones software a medida para desafíos únicos</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creamos aplicaciones completamente personalizadas que resuelven problemas específicos de tu negocio, 
                con tecnología de vanguardia y enfoque en escalabilidad, rendimiento y experiencia de usuario.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $5,000</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">10-16 semanas</span>
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
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Desarrollo de aplicaciones personalizadas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Servicios Incluidos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios Incluidos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestro Proceso</h2>
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
              <p className="text-gray-500 mt-4 text-sm">
                * Seleccionamos las tecnologías más adecuadas para cada proyecto
              </p>
            </div>

            {/* Beneficios Clave */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ventajas Clave</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tecnología Específica</h3>
                    <p className="text-gray-600 text-sm">Stack tecnológico elegido para tus necesidades exactas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GitMerge className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Integraciones Complejas</h3>
                    <p className="text-gray-600 text-sm">Conectamos con cualquier API, ERP o sistema legacy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alto Rendimiento</h3>
                    <p className="text-gray-600 text-sm">Optimizado para carga pesada y crecimiento</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Seguridad Enterprise</h3>
                    <p className="text-gray-600 text-sm">Protocolos de seguridad nivel empresarial</p>
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
                "Desarrollaron exactamente lo que necesitábamos cuando ninguna solución estándar servía. La aplicación ha transformado nuestra productividad y es escalable para nuestro crecimiento futuro."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Ana Rodríguez</div>
                <div className="text-sm text-gray-500">CTO, FinTech Innovations</div>
              </div>
            </div>

            {/* Paquetes Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios Premium</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Arquitectura Microservicios</span>
                  <span className="font-medium text-gray-900">+$2,500</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Soporte Prioritario 24/7</span>
                  <span className="font-medium text-gray-900">+$3,000/año</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Desarrollo de API Pública</span>
                  <span className="font-medium text-gray-900">+$1,800</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Migración Cloud Enterprise</span>
                  <span className="font-medium text-gray-900">+$4,000</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Equipo Dedicado</span>
                  <span className="font-medium text-gray-900">+$8,000/mes</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Proyecto complejo?</h3>
              <p className="mb-4 opacity-90">
                Agendemos una sesión estratégica para analizar tus requerimientos técnicos.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agenda Consultoría Técnica
              </NavLink>
            </div>

            {/* Garantías */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nuestros Compromisos</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Propiedad intelectual 100% tuya
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Transparencia total en el desarrollo
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Metodología Agile (Scrum/Kanban)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Reportes semanales de progreso
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  SLA con 99.9% uptime garantizado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplicacionesPersonalizadas;