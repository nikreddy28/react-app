import React, {Component} from 'react';
import { Link } from 'react-router';


export default ()=> {
        return (
            <div className="col-lg-12">
                <div className = "black" >
                    <p className = "header" > OMNI FULFILLMENT </p>  
                </div>
            
                <div className="col-md-6 col-sm-6 col-xs-6 background-blue right-border flex">
                    <div className="align-center">
                    
                        <Link to = "/shipment" className = "btn margin-10"> <i className="fa fa-truck"></i> </Link>
                        <p> Start Picking </p>
                     </div>
                </div>
                <div className = "col-md-6 col-sm-6 col-xs-6 background-blue flex"> 
                    <div className="align-center">
                        <Link to = "/shipment" className = "btn margin-10"> <i className="fa fa-cube"></i> </Link>
                        <p>Custom Picking</p>
                    </div>
                </div>
                <div className = "col-md-6 col-sm-6 col-xs-6 background-green flex" > 
                    <div className="align-center">
                        <Link to = "/shipment" className = "btn margin-10 green-icon"> <i className="fa fa-circle-o"></i> </Link>
                        <p>Shipments Ready </p>
                    </div>
                </div>
                <div className = "col-md-6 col-sm-6 col-xs-6 background-purple flex" > 
                    <div className="align-center">
                        <Link to = "/shipment" className = "btn margin-10 purple-icon"> <i className="fa fa-cubes"></i> </Link>
                        <p className="font-weight-bold">BOSS</p>
                    </div>
                </div>

                 <div className = "col-md-12 col-sm-12 col-xs-12 background-orange flex" > 
                    <div className="align-center">
                        <p className="font-weight-bold margin-10">ASSIGN HOLD LOCATION</p>
                        <Link to = "/shipment" className = "btn margin-10 orange-icon"> <i className="fa fa-circle-o"></i> </Link>
                        <p>Container Ready</p>
                    </div>
                </div>
            </div>        

        )
}