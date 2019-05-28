import React,{Component} from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';

const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Route path='/' component={Login} exact={true}/>
        <Route path='/register' component={Register}/>
        <Route path='/forgetpassword' component={ForgetPassword}/>
        <Route path='/home' component={Home}/>
    </div>
    </BrowserRouter>
);
export default AppRouter;

