import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Answer, Home, SignIn, SignUp } from "./Pages";

function App() {
  const token = JSON.parse(window.localStorage.getItem("token")) || null;

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/singin");
  //   } else {
  //     navigate("/");
  //   }
  // }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/answer" element={<Answer />} />
      <Route path="/singup" element={<SignUp />} />
      <Route path="/singin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
