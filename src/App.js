import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./app.css"
import Home from "./pages/home/Home";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Home />
    </BrowserRouter>
    </>
    
  );
}

export default App;
