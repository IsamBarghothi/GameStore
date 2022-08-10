import Header from "../Componoent/Header";
import React, { Component }  from 'react';
import {Link, Outlet} from "react-router-dom";
import { data } from '../data.js'
import GameTable from "../Componoent/GameTable";

class Store extends Component{
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
        this.handleAddGame = this.handleAddGame.bind(this);
    }

    handleAddGame(game) {
        let { games } = this.state;
        games.push(game);
        this.setState({ games });
    }


    render(){
        return (
            <main>
                <Header title="Store"
                        description="Here you can buy games that are available in our store">
                </Header>
                <GameTable list={data} onAdd={this.handleAddGame}></GameTable>
                <nav>
                    <Link to="/">Back to Main Page!!</Link>
                    <Link to= "/LoginPage">Register!!</Link>
                    <Link to= "/MyProfile">My Profile!!</Link>
                </nav>
                <Outlet/>
            </main>
        );
    }
}
export default Store;

