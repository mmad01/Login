import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";

function App() {
  const isLoggedIn = localStorage.getItem("auth") === "true";

  return (
    <div>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace={true} />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace={true} /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
