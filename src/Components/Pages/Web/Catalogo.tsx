import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, FileText, Search, Filter, Image } from 'lucide-react';
import { NavLink } from 'react-router-dom';



const WebCatalogo = () => {
    const features = [
        'Catálogo de productos/servicios organizado',
        'Sistema de búsqueda avanzada',
        'Filtros por categorías y características',
        'Galería de imágenes optimizada',
        'Comparador de productos',
        'Sistema de favoritos',
        'Exportación de catálogos PDF',
        'Panel de administración completo',
        'SEO optimizado por producto',
        'Integración con redes sociales',
        'Formularios de cotización',
        'Sistema de categorías multinivel'
    ];

    const process = [
        'Análisis de productos y categorización',
        'Diseño de estructura de catálogo',
        'Desarrollo de sistema de filtros',
        'Implementación de búsqueda avanzada',
        'Creación de fichas de producto',
        'Desarrollo del comparador',
        'Optimización de imágenes y SEO',
        'Panel de administración',
        'Pruebas de funcionalidad',
        'Capacitación y lanzamiento'
    ];

    const technologies = ['React', 'TypeScript', 'Elasticsearch', 'Node.js', 'PostgreSQL', 'AWS S3', 'Redis'];

    const catalogFeatures = [
        'Hasta 500 productos/servicios',
        'Categorías ilimitadas',
        'Múltiples imágenes por producto',
        'Fichas técnicas detalladas',
        'Videos de producto',
        'Documentos descargables'
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
                                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                                <h1 className="text-3xl font-bold text-gray-900">Sitios Web de Catálogo</h1>
                            </div>
                            <p className="text-xl text-blue-600 mb-4">Muestra tus productos de forma profesional</p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Plataformas especializadas para mostrar productos o servicios con funcionalidades avanzadas de búsqueda,
                                filtrado y comparación. Perfectas para empresas que necesitan presentar un amplio catálogo de manera organizada.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                                    <span className="text-blue-800 font-medium">Desde $1,200</span>
                                </div>
                                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                                    <span className="text-green-800 font-medium">3-4 semanas</span>
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
                                    to="/Contacto"
                                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center"
                                >
                                    <Mail className="h-5 w-5 mr-2" />
                                    Ver Demo
                                </NavLink>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Catálogo de productos online"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contenido Principal */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Capacidades del Catálogo */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capacidades del Catálogo</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {catalogFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Características Técnicas */}
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

                        {/* Funcionalidades Destacadas */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Funcionalidades Destacadas</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <Search className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Búsqueda Inteligente</h3>
                                    <p className="text-gray-600 text-sm">Encuentra productos por nombre, código, categoría o características específicas</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <Filter className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Filtros Avanzados</h3>
                                    <p className="text-gray-600 text-sm">Múltiples filtros combinables por precio, marca, características y más</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <Image className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Galería Optimizada</h3>
                                    <p className="text-gray-600 text-sm">Imágenes de alta calidad con zoom, vista 360° y carga rápida</p>
                                </div>
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
                                "El catálogo web nos permitió organizar más de 300 productos de manera profesional. Nuestros clientes ahora encuentran fácilmente lo que buscan."
                            </blockquote>
                            <div>
                                <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                                <div className="text-sm text-gray-500">Ferretería Industrial CM</div>
                            </div>
                        </div>

                        {/* Casos de Uso */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Ideal Para</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                                    Distribuidoras y mayoristas
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                                    Empresas manufactureras
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                                    Proveedores industriales
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                                    Empresas de servicios múltiples
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                                    Catálogos B2B
                                </li>
                            </ul>
                        </div>

                        {/* Mejoras Adicionales */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Mejoras Disponibles</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Productos adicionales</span>
                                    <span className="font-medium text-gray-900">+$2 c/u</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Integración con ERP</span>
                                    <span className="font-medium text-gray-900">+$800</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">App móvil</span>
                                    <span className="font-medium text-gray-900">+$1,500</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Portal de clientes</span>
                                    <span className="font-medium text-gray-900">+$1,000</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">¿Tienes muchos productos?</h3>
                            <p className="mb-4 opacity-90">
                                Te ayudamos a organizarlos y presentarlos de manera profesional.
                            </p>
                            <NavLink
                                to={"/Contacto"}
                                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Consulta Gratuita
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCatalogo;