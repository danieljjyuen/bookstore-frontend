import { useEffect } from "react";
import CustomerService from "./services/CustomerService";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import CreateCustomer from "./pages/CreateCustomer";
import Login from "./pages/Login";
import DefaultNavBar from "./components/menu/DefaultNavBar";
import LoggedInNavBar from "./components/menu/LoggedInNavBar";

const App = () => {
  //temporary user assignment
  const user = null;
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
      {user==null? 
        <DefaultNavBar />
        : <LoggedInNavBar />}
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateCustomer />} />
    </Routes>
    </div>
  )
}

export default App;