import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Loading from "./pages/Loading";
import {useState, useEffect} from "react"

function App() {
  
  const [loading,setLoading] = useState(false)

  useEffect(() =>{

    setLoading(true)

     setTimeout(() => {

  setLoading(false)

     },3500)
 },[])

  return (
    <div className="App">
      {/* only use app.js file when you working ... remove all code before push or commit  */}
      {
        loading ? <Loading/> : <AllRoutes />
      }

     
      

    </div>
  );
}

export default App;
