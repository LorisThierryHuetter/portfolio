import './App.css';
import About from './sections/About';
import Footer from './sections/Footer';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to my portfolio</h1>

      </header>

      <main>
        <About />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
