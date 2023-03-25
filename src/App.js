import { BrowserRouter ,Routes ,Route  } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./app.css"
import Home from "./pages/home/Home";
import { Men } from "./pages/men/Men";
import {useState , useEffect} from "react"
import axios from "axios";


function App() {
  const [Alldata,setAlldata] = useState([])
  
  // to get all products from database
  useEffect(()=>{
    axios.get('http://localhost/data/AllProducts.php').then((response) => {
      setAlldata(response.data);
    }).catch((error)=> {
      console.log(error);
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home Alldata={Alldata} />} />
          <Route exact path="/men" element={<Men />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
