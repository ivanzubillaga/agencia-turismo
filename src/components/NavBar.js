import React from 'react'
import { useState, useEffect } from "react";
import { Spinner, Nav, Navbar } from "react-bootstrap";
import { getDataNav } from "../helpers/getDataNav";


export const NavBar = ({setAerolinea}) => {
  
    const [dataNav, setDataNav] = useState();
    const [loading, setLoading] = useState(true);    
  
    const newNav = async () => {
      const data = await getDataNav();
      setDataNav(data[0].companias);
      setLoading(false);    
    };
  
    useEffect(() => {
      newNav();
    }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
    
      <ul>
        {loading ? (
          <Spinner />
        ) : (
          dataNav.map(({ id, name, icon }) => <li className="btn-nav px-4" key={id} onClick={()=> setAerolinea(name) }>  
          <img
            src={process.env.PUBLIC_URL + icon}
            width="100"
            height="60"
            className="m-2 d-inline-block align-middle"
            alt={name}
          />
            
            </li>)
        )}
      </ul>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  )
}
