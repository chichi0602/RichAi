import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Register from "./Pages/Register";
import Cover from "./Pages/Cover";
import "./app.css";

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cover />}/>
          <Route path="chat" element={<Chat />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Routes>
      </BrowserRouter>  
  );
}