import { useContext } from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  const ProtectedRoute= ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"></Navigate>
    }
    return children
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<ProtectedRoute><Home></Home></ProtectedRoute>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
