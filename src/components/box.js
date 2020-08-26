import React, { useContext } from "react";
import { SwipeContext } from "../App";
import "./box.css";


const Box = () => {
    const { slide } = useContext(SwipeContext);

        if (slide === 0 ){
            return ( 
                <div className="box">
                    <h1>ENTER</h1>
                    <p>and such and such...</p>
                </div>
            )
        } else{
            return (
                <div className="box">
                    <h2>something else</h2>
                    <p>more stuff</p>
                </div>
            )    
        }
};

export default Box;