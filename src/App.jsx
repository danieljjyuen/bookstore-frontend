import { useEffect } from "react";
import CustomerService from "./services/CustomerService";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import CreateCustomer from "./pages/CreateCustomer";
import Login from "./pages/Login";
import DefaultNavBar from "./components/menu/DefaultNavBar";
import LoggedInNavBar from "./components/menu/LoggedInNavBar";
import { useSelector } from 'react-redux';
import MyLibrary from "./pages/MyLibrary";
import Logout from "./pages/Logout"

const App = () => {
  const authenticated = useSelector(state => state.customer.isAuthenticated);

  return (
    <div className="app">
      { authenticated == false? 
        <DefaultNavBar />
        : <LoggedInNavBar />}
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateCustomer />} />
      <Route path="/mylibrary" element={<MyLibrary />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    </div>
  )
}

export default App;