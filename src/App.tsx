import { useEffect } from 'react';
import './App.css'
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
import Services from './Components/Services';
import SobreNosotros from './Components/SobreNosotros';
import Contacto from './Components/Contacto';
// Importar las páginas de servicios
// Desarrollo Web
import DesarrolloWeb from './Components/Pages/Web/DesarrolloWeb';
import Paginas from './Components/Pages/Web/Paginas';
import Catalogo from './Components/Pages/Web/Catalogo';
import ECommerce from './Components/Pages/Web/ECommerce';
import Administrativa from './Components/Pages/Web/Administrativa';
import Personalizadas from './Components/Pages/Web/Personalizadas';
// Desarrollo de APIs
import DesarrolloAPIs from './Components/Pages/APIS/DesarrolloServicios';
// Servicios Adicionales
import ServiciosAdicionales from './Components/Pages/Adicionales/ServiciosAdicionales';
//import ScrollToTop from './Components/Utils/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    // Smooth scrolling para toda la página
    document.documentElement.style.scrollBehavior = 'smooth';

    // Actualizar el título de la página
    document.title = 'DevCoder - Transformamos Ideas en Soluciones Digitales';
    // Meta tags para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DevCoder - Desarrollo web, APIs y soluciones digitales personalizadas. Transformamos tu idea en realidad con tecnología de vanguardia.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'DevCoder - Desarrollo web, APIs y soluciones digitales personalizadas. Transformamos tu idea en realidad con tecnología de vanguardia.';
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'desarrollo web, APIs, Java, React, TypeScript, e-commerce, aplicaciones web, microservicios, consultoría tecnológica';
    document.head.appendChild(metaKeywords);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/Servicios' element={<Services />} />
          <Route path='/Servicios/Web' element={<DesarrolloWeb />} />
          <Route path='/Servicios/Web/sitios-informativos' element={<Paginas />} />
          <Route path='/Servicios/Web/sitios-catalogo' element={<Catalogo />} />
          <Route path='/Servicios/Web/ecommerce' element={<ECommerce />} />
          <Route path='/Servicios/Web/apps-administrativas' element={<Administrativa />} />
          <Route path='/Servicios/Web/apps-personalizadas' element={<Personalizadas />} />
          <Route path='/Servicios/Apis' element={<DesarrolloAPIs />} />
          <Route path='/Servicios/Adicionales' element={<ServiciosAdicionales />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/SobreNosotros' element={<SobreNosotros />}/>
          <Route />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App
