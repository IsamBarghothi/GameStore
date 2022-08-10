import './App.css';
import Header from './Componoent/Header'
import React from 'react'
import {Link, Outlet} from "react-router-dom";


function App() {

  return (
      <div>
      <Header title= "Our Game Store"
              description = "Here You can purchase game at the finest Prices, Review Games and Add them to your Collection"
              ></Header>
          <nav
              style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
              }}
          >
              <Link to="/LoginPage">Login Here !!!</Link>
          </nav>
          <Outlet />


      </div>
  );
}

export default App;
