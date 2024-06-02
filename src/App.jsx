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

const App = () => {
  const authenticated = useSelector(state => state.customer.isAuthenticated);
  console.log("authenticated : ", authenticated);
  useEffect(() => {
    // const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;
    // console.log('testing');
    // console.log(baseUrl);
    // let response = CustomerService.createCustomer({
    //   "username" : "from react",
    //   "password" : "password",
    //   "name" : "react"
    // })
  
    //console.log(response);
  },[])


  return (
    <div>
      { authenticated == false? 
        <DefaultNavBar />
        : <LoggedInNavBar />}
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateCustomer />} />
      <Route path="/mylibrary" element={<MyLibrary />} />
    </Routes>
    </div>
  )
}

export default App;