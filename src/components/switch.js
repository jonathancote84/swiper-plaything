import React, { useContext } from "react";
import Nav from "./nav";
import Box from "./box";
import { SwipeContext } from "../App";


const Switch = () => {
    const { slide } = useContext(SwipeContext);
    if (slide === 2 ) {
        return(
            <Nav/>
        )
    }else {
        return(
            <Box/>
        )
    }
}
export default Switch;