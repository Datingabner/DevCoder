import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, ShoppingCart, CreditCard, Package, BarChart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ECommerce=() => {
  const features = [
    'Carrito de compras avanzado',
    'Múltiples pasarelas de pago (Stripe, PayPal, MercadoPago)',
    'Gestión completa de inventario',
    'Sistema de cupones y descuentos',
    'Panel de administración completo',
    'Reportes de ventas y analytics',
    'Gestión de usuarios y perfiles',
    'Sistema de reviews y calificaciones',
    'Integración con sistemas de envío',
    'Notificaciones automáticas por email',
    'Facturación electrónica',
    'Programa de fidelización',
    'Wishlist y comparador',
    'Checkout optimizado (1-click)',
    'Recuperación de carritos abandonados',
    'Multi-moneda y multi-idioma'
  ];

  const process = [
    'Análisis de requerimientos comerciales',
    'Diseño UX/UI especializado en conversión',
    'Configuración de pasarelas de pago',
    'Desarrollo del catálogo de productos',
    'Implementación del carrito y checkout',
    'Sistema de gestión de pedidos',
    'Integración con proveedores de envío',
    'Panel de administración avanzado',
    'Pruebas de transacciones y seguridad',
    'Optimización de conversión',
    'Lanzamiento y capacitación',
    'Monitoreo post-lanzamiento'
  ];

  const technologies = ['React', 'Node.js', 'Stripe API', 'PostgreSQL', 'Redis', 'AWS S3', 'Elasticsearch', 'Docker'];

  const ecommerceModules = [
    'Catálogo de productos avanzado',
    'Gestión de inventario en tiempo real',
    'Procesamiento de pagos seguro',
    'Sistema de envíos integrado',
    'CRM para clientes',
    'Analytics y reportes detallados'
  ];

  const paymentMethods = [
    'Tarjetas de crédito/débito',
    'PayPal y Stripe',
    'MercadoPago',
    'Transferencias bancarias',
    'Pagos en efectivo',
    'Financiamiento (cuotas)'
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
                <ShoppingCart className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Plataformas E-Commerce</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Tienda online completa para vender más</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollamos tiendas online robustas con todas las funcionalidades necesarias para vender productos 
                o servicios de manera efectiva y segura. Optimizadas para conversión y escalabilidad.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $2,500</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">6-8 semanas</span>
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
                  Ver Demo
                </NavLink>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Tienda online e-commerce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Módulos Principales */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Módulos Principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ecommerceModules.map((module, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Funcionalidades Completas */}
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

            {/* Características Destacadas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Destacadas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pagos Seguros</h3>
                  <p className="text-gray-600 text-sm">Múltiples métodos de pago con máxima seguridad</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gestión de Envíos</h3>
                  <p className="text-gray-600 text-sm">Integración con principales empresas de logística</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Avanzado</h3>
                  <p className="text-gray-600 text-sm">Reportes detallados de ventas y comportamiento</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Checkout Optimizado</h3>
                  <p className="text-gray-600 text-sm">Proceso de compra simplificado para mayor conversión</p>
                </div>
              </div>
            </div>

            {/* Métodos de Pago */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Métodos de Pago Soportados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{method}</span>
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
                "Nuestra tienda online ha superado todas las expectativas. Las ventas aumentaron 300% en los primeros 6 meses. El sistema es muy fácil de usar."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Carlos Ruiz</div>
                <div className="text-sm text-gray-500">Tienda Deportiva CR</div>
              </div>
            </div>

            {/* ROI Estimado */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">ROI Promedio</h3>
              <div className="text-3xl font-bold mb-2">250%</div>
              <p className="text-sm opacity-90">
                Retorno de inversión promedio en el primer año según nuestros clientes
              </p>
            </div>

            {/* Paquetes Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Mejoras Disponibles</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">App móvil nativa</span>
                  <span className="font-medium text-gray-900">+$3,000</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Marketplace multi-vendor</span>
                  <span className="font-medium text-gray-900">+$2,500</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">IA para recomendaciones</span>
                  <span className="font-medium text-gray-900">+$1,800</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Integración con ERP</span>
                  <span className="font-medium text-gray-900">+$1,500</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Listo para vender online?</h3>
              <p className="mb-4 opacity-90">
                Comienza a generar ingresos 24/7 con tu tienda online profesional.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Demo Personalizada
              </NavLink>
            </div>

            {/* Garantías */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Garantías E-Commerce</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  99.9% uptime garantizado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Certificado SSL incluido
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Backups automáticos diarios
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Soporte técnico 24/7
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Capacitación completa incluida
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;