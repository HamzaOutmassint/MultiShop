import { BrowserRouter ,Routes ,Route  } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./app.css"
import Home from "./pages/home/Home";
import { Men } from "./pages/men/Men";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
