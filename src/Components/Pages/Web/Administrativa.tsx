import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Database, BarChart2, Settings, Shield, UserCheck} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AplicacionesAdministrativas = () => {
  const features = [
    'Dashboard con métricas clave',
    'Gestión de usuarios y roles avanzada',
    'Módulos personalizables según necesidades',
    'Reportes detallados y exportación a Excel/PDF',
    'Integración con sistemas existentes',
    'Notificaciones en tiempo real',
    'Autenticación segura y encriptación',
    'Backups automáticos diarios',
    'Interfaz intuitiva y fácil de usar',
    'Soporte para múltiples sucursales'
  ];

  const process = [
    'Análisis de procesos empresariales',
    'Reunión de requerimientos detallada',
    'Diseño de arquitectura del sistema',
    'Desarrollo de módulos principales',
    'Implementación de seguridad y permisos',
    'Integración con sistemas existentes',
    'Pruebas de estrés y rendimiento',
    'Capacitación al personal clave',
    'Implementación piloto (beta testing)',
    'Lanzamiento oficial y soporte continuo'
  ];

  const technologies = ['React', 'Node.js', 'Express', 'PostgreSQL/MongoDB', 'Redux', 'Docker', 'AWS/Azure'];

  const includedModules = [
    'Gestión de usuarios y permisos',
    'Panel de administración completo',
    'Módulo de reportes avanzados',
    'Sistema de notificaciones',
    'API para integraciones',
    'Documentación técnica y de usuario'
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
                <Database className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Aplicaciones Administrativas</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Sistemas de gestión empresarial personalizados</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollamos soluciones de software a medida que optimizan tus procesos internos, aumentan la productividad 
                y proporcionan insights valiosos para la toma de decisiones estratégicas en tu organización.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $3,500</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">8-12 semanas</span>
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
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sistema administrativo empresarial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Módulos Incluidos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Módulos Incluidos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedModules.map((module, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{module}</span>
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
                  <BarChart2 className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Toma de decisiones</h3>
                    <p className="text-gray-600 text-sm">Métricas en tiempo real para una gestión informada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Automatización</h3>
                    <p className="text-gray-600 text-sm">Reduce tareas repetitivas y errores humanos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Seguridad Avanzada</h3>
                    <p className="text-gray-600 text-sm">Encriptación, backups y controles de acceso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserCheck className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Escalabilidad</h3>
                    <p className="text-gray-600 text-sm">Crece con tu negocio sin limitaciones técnicas</p>
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
                "La aplicación administrativa que desarrollaron transformó nuestras operaciones. Ahora tenemos visibilidad completa de todos los procesos y hemos reducido tiempos de gestión en un 40%."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                <div className="text-sm text-gray-500">Director Operaciones, LogiTech</div>
              </div>
            </div>

            {/* Paquetes Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Módulos Adicionales</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Facturación electrónica</span>
                  <span className="font-medium text-gray-900">+$800</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">App móvil complementaria</span>
                  <span className="font-medium text-gray-900">+$1,500</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">CRM integrado</span>
                  <span className="font-medium text-gray-900">+$1,200</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Business Intelligence</span>
                  <span className="font-medium text-gray-900">+$2,000</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Soporte extendido 24/7</span>
                  <span className="font-medium text-gray-900">+$1,000/año</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Necesitas una solución a medida?</h3>
              <p className="mb-4 opacity-90">
                Agenda una consultoría gratuita para analizar tus requerimientos.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Consultoría
              </NavLink>
            </div>

            {/* Garantías */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nuestras Garantías</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  6 meses de soporte gratuito
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Documentación técnica completa
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Entrenamiento para tu equipo
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Actualizaciones de seguridad
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Código fuente entregado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplicacionesAdministrativas;