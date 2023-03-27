import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import smoothscroll from 'smoothscroll-polyfill';
import Footer from './components/Footer/Footer';

smoothscroll.polyfill();

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
