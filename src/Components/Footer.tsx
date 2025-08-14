
import { Mail, Phone, MapPin, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/DevCoder_Grande.png" alt="DevCoder" className="h-8 w-auto mr-3" />
              <span className="text-xl font-bold">DevCoder</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos ideas en soluciones digitales excepcionales. 
              Tu socio tecnológico para el crecimiento empresarial.
            </p>
            <div className="flex items-center text-gray-300">
              <Code className="h-5 w-5 mr-2" />
              <span>Hecho con</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>por DevCoder</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre-nosotros')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">contacto@devcoder.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Trabajo remoto</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevCoder. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;