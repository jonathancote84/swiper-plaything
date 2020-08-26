import React, { useContext } from "react";
import { SwipeContext } from "../App";

const Nav = () => {
  const { slide } = useContext(SwipeContext);
    return(
        <footer>
          My Nav stuff
          {slide}
          <button/>
        </footer>
    )
};

export default Nav;