import BookTutor from './pages/booktutor';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProductPage from './pages/productpage';
import './App.css';
import { useState } from 'react';

function App() {
    const [selectedPage, setSelectedPage] = useState('about');

    const renderPage = () => {
      switch (selectedPage) {
        case 'about':
          return <AboutPage />;
        case 'product':
          return <ProductPage />;
        case 'booktutor':
          return <BookTutor />;
        case 'contact':
          return <ContactPage />;
        default:
          return <AboutPage />;
      }
    };

    return (
      <div className="App">
        <header>
          <nav>
            <ul style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'orange', padding: '10px', listStyleType: 'none' }}>
              <li><a href="#about" onClick={() => setSelectedPage('about')}>About</a></li>
              <li><a href="#product" onClick={() => setSelectedPage('product')}>Product</a></li>
              <li><a href="#booktutor" onClick={() => setSelectedPage('booktutor')}>Book Tutor</a></li>
              <li><a href="#contact" onClick={() => setSelectedPage('contact')}>Contact</a></li>
            </ul>
          </nav>
        </header>
        <section>
          {renderPage()}
        </section>
      </div>
    );
  }

export default App;
