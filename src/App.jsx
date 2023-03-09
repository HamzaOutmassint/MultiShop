import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
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
