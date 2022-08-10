import React, { Component }  from 'react';
import Header from "../Componoent/Header";
import ProductForm from "../Componoent/RegisterationForm";
import {Link, Outlet} from "react-router-dom";

class MyProfile extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <main>
                <Header title="My Profile"
                        description="Here you can see your account Details and your collection of games"></Header>

                <nav>
                    <Link to="/">Back to Main Page!!</Link>
                    <Link to= "/Store">Go Shopping!!</Link>
                </nav>
                <Outlet />
            </main>
        );
    }
}

export default MyProfile;