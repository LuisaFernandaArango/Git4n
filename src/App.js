import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import RepoList from './components/RepoList/RepoList';
import RepoSearch from './components/RepoSearch/RepoSearch';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class App extends Component {

  constructor(){  
    super(); 
    this.state={
      name : "",
      usuarioGit : "",
      searchRepo: ""
    }
  }

  getCandidato =(candidato) => {
    this.setState({
      name : candidato.name,
      usuarioGit : candidato.usuarioGit       
    });
  }
  
  searchBy=(input)=>{
		this.setState({ 
      searchRepo : input.target.value 
    });
  }
  
  render() {    
    const isLoggedIn = cookies.get('CANDIDATO');
    let contenido;
    if(isLoggedIn!==undefined){
        contenido = <div>
                      <RepoSearch searchBy={this.searchBy.bind(this)} />
                      <RepoList candidatoGit={isLoggedIn} repoSearch={this.state} />
                  </div>;
    }
    else{
      contenido = <Home candidato={this.getCandidato} />
    }

    return (
      <div className="App">
        <Header candidatoName={this.state.name}/>     
        {contenido}
        <Footer />
      </div>
    );
  }
}

export default App;
