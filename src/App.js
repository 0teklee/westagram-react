import "./App.css";
import Login from "./pages/Tekwoolee/Login/Login";
import Feed from "./pages/Tekwoolee/Feed/Feed";
import Profile from "./pages/Tekwoolee/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.scss";
import "./styles/common.scss";
import "./styles/variables.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
