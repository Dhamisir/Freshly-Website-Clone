import './App.css';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import AllRoutes from './pages/AllRoutes';


function App() {
  return (
    <div className="App">
      {/* only use app.js file when you working ... remove all code before push or commit  */}
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
