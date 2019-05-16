import React, { Component } from 'react';
import './Home.css';
import Cookies from 'universal-cookie';
import TextField from '../TextField/TextField';


const cookies = new Cookies();

class Home extends Component {
   
    constructor() {
        super()
        this.state = {
            name: "",
            firstNameError: "",
            lastName: "",
            cedula: null,
            email: "",
            dateOfBirth: '1994-02-14',
            usuarioGit: "",
        }      
    }
    validateName = name => {
        const regex = /[A-Za-z]{3,}/;
        return !regex.test(name)
            ? "The name must contain at least three letters. Numbers and special characters are not allowed."
            : "";
    };
    onFirstNameBlur = () => {
        const { name } = this.state;    
        const firstNameError = this.validateName( name );    
        return this.setState({ firstNameError });
      };
    handleInput=(event)=>{
        const {value, name} = event.target
        this.setState({
            [name]: value
        });
    }
    register = (event) => {
        event.preventDefault(); //Evita que se refresque la pantalla
        this.props.candidato(this.state);
        cookies.set('CANDIDATO', this.state, { path: '/' });
    }
    render() {
        const { firstNameError, name } = this.state;
        return (        
            <div className="content-form">
            <h2 className="h2">Registrar candidato</h2>
                <form className="card-body" onSubmit={this.register}>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" name="name" onChange={this.handleInput}  className="form-control" placeholder="Nombres" onBlur={this.onFirstNameBlur}/>
                        {this.state.firstNameError && <div style={{color: 'red', margin: 5}}>{this.state.firstNameError}</div>}
                    </div> 
                    <div className="form-group col-md-6">
                        <input type="text" name="lastName" className="form-control" placeholder="Apellidos" onChange={this.handleInput}/>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="number" name="cedula" className="form-control" placeholder="Cédula" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="date" name="dateOfBirth" className="form-control" placeholder="dateOfBirth" max="2019-01-01" value={this.state.dateOfBirth} onChange={this.handleInput}/>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Correo electrónico" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" name="usuarioGit" className="form-control" placeholder="Usuario de GitHub" onChange={this.handleInput}/>
                    </div>
                    </div> 
                    <div className="form-row">
                        <TextField name="name"
                            label="Nombres"
                            onChange={this.onFirstNameChange}
                            onBlur={this.onFirstNameBlur}
                            error={firstNameError} />  
                    </div>                          
                
                    <button type="submit" className="btn btn-blue btn-lg btn-block ">Registar</button>
                </form>
            </div> 
        );
    }
}

export default Home;