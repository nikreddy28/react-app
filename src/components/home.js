import React, {Component} from 'react';
import { Link } from 'react-router';


export default ()=> {
        return (
            <div className="col-lg-12">
                <div className = "black" >
                    <p className = "header" > OMNI FULFILLMENT </p>  
                </div>
            
                <div className="col-lg-6 background-blue right-border">
                <Link to = "/shipment" className = "btn btn-primary margin-top-10"> shipment </Link>
                 <p> Start Picking </p>
                </div>
                <div className = "col-lg-6 background-blue" > 
                <Link to = "/shipment" className = "btn btn-primary margin-top-10"> shipment </Link>
                    <p>Custom Picking</p>
                </div>
                <div className = "col-lg-6 background-green" > 
                <Link to = "/shipment" className = "btn btn-primary margin-top-10"> shipment </Link>
                    <p>Shipments Ready </p>
                </div>
                <div className = "col-lg-6 background-purple" > 
                < Link to = "/shipment" className = "btn btn-primary margin-top-10"> shipment </Link>
                <p>BOSS</p>
                </div>
                






              {/*      <div className = "fullwidth" >
                        <div className = "black" >
                            <p className = "header" > OMNI FULFILLMENT </p> 
                        </div>
                    </div> 
                    <div className = "col-lg-6 division" >
                        <div className = "blue" >
                        < Link to = "/shipment" className = "btn"> shipment </Link>
                            <p className = "picking" > Start Picking </p> 
                        </div> 
                    </div> 
                    < div className = "col-lg-6  division" >
                        <div className = "lightblue" >
                            <p className = "custom" > Custom Picking </p> 
                        </div> 
                   </div> 
                    < div className = "col-lg-6 division" >
                        <div className = "green" >
                            <p className = "shipment" > Shipments Ready </p> 
                        </div> 
                   </div> 
                   < div className = "col-lg-6 division" >
                        <div className = "purple" >
                            <p className = "boss" > BOSS </p> 
                        </div> 
                   </div>

                   <div className = "fullwidth" >
                        <div className = "yellow" >
                            <p className = "bold" > ASSIGN HOLD LOCATION </p>

                            <p className = "picking" > Containers Ready </p> 
                        </div> 
                    </div>
                    <div className = "gray" >
                    <div >
                            <p className = "bold" > Workload Summary </p> </div>
                    </div> */}
            </div>        

        )
}