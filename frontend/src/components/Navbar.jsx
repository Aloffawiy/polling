import * as React from "react";
import logo from  "./aukLogo.jfif";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <AppBar position="relative" color="white" style={{marginBottom:'150px'}}>
      <Toolbar style={{paddingLeft:'80px'}}  >
      <img src={logo} alt="auk"  style={{ width:'100px' }} />

        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Typography variant="h3" style={{ fontFamily:'Roboto', color:'#a52a2a' }}>ePoll</Typography>
        </Link>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
