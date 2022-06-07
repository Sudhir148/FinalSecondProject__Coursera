import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./component/Home/Home";
import Login from "./component/login/login";
import Register from './component/login/register';


const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default Routing