import React from 'react';
import "./Form.css"

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            age: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const {firstName, lastName, email, userName, age, password} = this.state;
        const newUser = {firstName, lastName, email, userName, age, password}
        this.props.onAdd(newUser);
        this.setState({
            formOpen: false,
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            age: '',
            password: ''
        });
    }
    render() {
        const button = <button id="add" onClick={() => { this.setState({ formOpen: !this.state.formOpen }) }}>
            <i>Add User!!</i>
        </button>;
        const form = (
            <div>
                <form>
                    <h2>Fill Out Form!!</h2>
                    <label>First Name: </label>
                    <input type="text" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })} /><br /><br />
                  <label>Last Name: </label>
                        <input type="text" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} /><br /><br />
                    <label>Email: </label>
                      <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} /><br /><br />
                    <label>User Name: </label>
                        <input type="text" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} /><br /><br />
                    <label>Age: </label>
                    <input type="number" value={this.state.age} min={5} max={99} onChange={e => this.setState({ age: e.target.value })} /><br /><br />
                    <label>Password: </label>
                        <input type="password" value={this.state.password} minLength={6} maxLength={20} onChange={e => this.setState({ password: e.target.value })} /><br /><br />
                    <button id="register" type="submit" onClick={this.handleSubmit}>Register!!</button>
                  </form>
            </div>
        );
        return this.state.formOpen ? form : button;
        }
    }
