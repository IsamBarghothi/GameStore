import React, { Component }  from 'react';
import Header from "../Componoent/Header";
import ProductForm from "../Componoent/RegisterationForm";
import {Link, Outlet} from "react-router-dom";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }


    handleSubmit(){
    }

    render(){
        return (
            <main>
                <Header title="Registration"
                        description="Enter your information here and make your account!!"></Header>
                <ProductForm onAdd={this.handleSubmit}></ProductForm>
                <nav>
                    <Link to="/">Back to Main Page!!</Link>
                    <Link to= "/Store">Go Shopping!!</Link>
                    <Link to= "/LoginPage">Register!!</Link>
                </nav>
                <Outlet />
            </main>
        );
    }
}

export default LoginPage;
