import NavigationMenu from './components/navigation-menu';
import BookTutor from './pages/booktutor';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProductPage from './pages/productpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <BookTutor />
      <AboutPage />
      <ProductPage />
      <ContactPage />
    </div>
  );
}

export default App;
