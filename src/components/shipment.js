import React, {Component} from 'react';
import { Link } from 'react-router';




export default () => {
    window.dataLayer.pageName = "shipment page";
        return ( 
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex-container">
            <div className="row text-center"> 
                <h1> Welcome to Shipment </h1>
                <Link to = "/" className = "btn"> Home </Link>
            </div>
        </div>
        )
    }
