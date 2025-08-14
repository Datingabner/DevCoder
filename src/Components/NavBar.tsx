import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logoDevCoder from "/DevCoder_Grande.png";
import { IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cyan-950/70 backdrop-blur-xs shadow-lg h-10' : 'bg-slate-900 '
      }`}>
      <div className={`transition-all duration-500 ${isScrolled ? 'max-w-4xl mx-auto px-4 sm:px-4 lg:px-6 ' : 'max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 '} `}>
        <div className={`flex justify-between transition-all duration-500 ${isScrolled ? 'h-10' : 'h-16 items-center'}`}>
          {/* Logo */}
          <NavLink to={"/"} className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img src={logoDevCoder} alt="DevCoder" className={` transition-all duration-500 ${isScrolled ? 'h-10 w-auto mt-0 pt-0' : 'h-13 w-auto '}`} />
          </NavLink>

          {/* Desktop Menu */}
          <div className="transition-all duration-500 hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink
                to={"/"}
                className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </NavLink>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <NavLink to={"/Servicios"} className="text-cyan-300 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Servicios
                  <ChevronDown className="ml-1 h-4 w-4" />
                </NavLink>

                {showServicesDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-slate-800 rounded-md shadow-lg border border-gray-200">
                    <div className="py-2">
                      <NavLink to={"/Servicios/Web"} className="px-4 py-2 flex items-center text-xs font-semibold text-cyan-200 uppercase tracking-wide">
                        Desarrollo Web <span className=""><IoIosArrowForward /></span>
                      </NavLink>
                      <NavLink to={"/Servicios/Web/sitios-informativos"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">Páginas Web Informativas</NavLink>
                      <NavLink to={"/Servicios/Web/ecommerce"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">E-Commerce</NavLink>
                      <NavLink to={"/Servicios/Web/apps-personalizadas"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">Aplicaciones Personalizadas</NavLink>

                      <NavLink to={"/Servicios/Apis"} className="px-4 py-2 flex items-center text-xs font-semibold text-cyan-200 uppercase tracking-wide">
                        Desarrollo De Servicios<span className=""><IoIosArrowForward /></span>
                      </NavLink>
                      <NavLink to={"/Servicios/Apis/java-api-rest"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">Java API Rest</NavLink>
                      <NavLink to={"/Servicios/Apis/microservicios"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">Microservicios</NavLink>

                      <NavLink to={"/Servicios/Adicionales"} className="px-4 py-2 flex items-center text-xs font-semibold text-cyan-200 uppercase tracking-wide">
                        Servicios Adicionales<span className=""><IoIosArrowForward /></span>
                      </NavLink>
                      <NavLink to={"Servicios/Adicionales/"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">Consultoría Tecnológica</NavLink>
                      <NavLink to={"Servicios/Adicionales/mantenimiento"} className="px-4 flex py-1 text-sm text-amber-100 hover:bg-gray-500">Mantenimiento y Soporte</NavLink>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to={"/SobreNosotros"}
                className="text-cyan-100 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre Nosotros
              </NavLink>
              <NavLink
                to={"/Contacto"}
                className="text-cyan-200 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-cyan-950/95 backdrop-blur-xs border-t border-gray-200">
            <NavLink
              to={"/"}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-200 hover:text-blue-600 hover:bg-gray-50"
            >
              Inicio
            </NavLink>
            <NavLink
              to={"/Servicios"}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-200 hover:text-blue-600 hover:bg-gray-50"
            >
              Servicios
            </NavLink>
            <NavLink
              to={"/SobreNosotros"}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-200 hover:text-blue-600 hover:bg-gray-50"
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              to={"/Contacto"}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-200 hover:text-blue-600 hover:bg-gray-50"
            >
              Contacto
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;