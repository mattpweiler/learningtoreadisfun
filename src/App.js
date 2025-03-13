import BookTutor from './pages/booktutor';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProductPage from './pages/productpage';
import NavigationMenu from './components/navigationmenu';
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
        <NavigationMenu setSelectedPage={setSelectedPage} />
        <section>
          {renderPage()}
        </section>
      </div>
    );
  }

export default App;
