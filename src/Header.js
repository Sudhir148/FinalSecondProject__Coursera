import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-default" style={{ backgroundColor: '#0d5acd' }}>

                    <div className="container-fluid">

                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#edunav">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <a className="navbar-brand" href="#" style={{ color: 'white' }}>
                                Coursera
                            </a>

                        </div>

                        <div className="navbar-collapse collapse" id="edunav">

                            <form className="navbar-form navbar-left" role="search">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="What do you want to learn?" />
                                </div>
                            </form>

                            <button type="submit" className="btn btn-secondary " style={{ marginLeft: '-0.5%', marginTop: '0.6%' }} >Search</button>

                        </div>

                        <div id="social">
                            <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                            &nbsp;
                            <Link className="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>

                        </div>

                    </div>
                </nav>
            </>
        )
    }
}

export default Header