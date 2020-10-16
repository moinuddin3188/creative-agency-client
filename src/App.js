import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlaceOrder from './Components/Order/PlaceOrder/PlaceOrder';
import OrderStatus from './Components/Order/OrderStatus/OrderStatus';
import Review from './Components/Order/Review/Review';
import ServiceList from './Components/Admin/ServiceList/ServiceList';
import AddServices from './Components/Admin/AddServices/AddServices';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminRoute from './Components/AdminRoute/AdminRoute';


export const UserContext = createContext()

function App() {

  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    admins: []
  })

  useEffect(() => {
    fetch('https://tranquil-reaches-92319.herokuapp.com/admins')
    .then(res => res.json())
    .then(data => setUserInfo({...userInfo, admins: data}))
  }, [])

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder/>
          </PrivateRoute>
          <PrivateRoute path="/orderStatus">
            <OrderStatus/>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <AdminRoute path='/servicesList'>
            <ServiceList/>
          </AdminRoute>
          <AdminRoute path='/addServices'>
            <AddServices/>
          </AdminRoute>
          <AdminRoute path='/makeAdmin'>
            <MakeAdmin/>
          </AdminRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
