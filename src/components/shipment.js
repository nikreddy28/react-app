import React, {Component} from 'react';
import { Link } from 'react-router';




export default () => {
        return ( 
            <div className="col-lg-12">
                <h1> Welcome to Shipment </h1>
                <Link to = "/" className = "btn"> Home </Link>
            </div>
        )
    }
