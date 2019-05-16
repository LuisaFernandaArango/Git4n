import React, { Component } from 'react';
import './Header.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {

  logout=()=>{
    cookies.remove('CANDIDATO', { path: '/' });
    this.setState();
  }

  render() {   
    const candidato =cookies.get('CANDIDATO');
    let isLogout= "";
    let nameUSer= "";
    if(candidato!==undefined){
      isLogout = <div className="rigth">                  
                    <button className="btn btn-search my-2 my-sm-0" type="submit" onClick={this.logout}>Cerrar sesión</button>
                </div>
      nameUSer =  <div className="left">
                    <p className="nameCandidato">{candidato.name}</p>
                  </div>       
    }
    return (
        <div className="container-header">
          {nameUSer}
          <div className="center">
            <h1 className="title">Git4n</h1>
          </div>
          {isLogout}
        </div>
    );
  }
}

export default Header;
