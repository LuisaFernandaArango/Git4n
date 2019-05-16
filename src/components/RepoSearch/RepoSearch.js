import React, { Component } from 'react';
import './RepoSearch.css';

class RepoSearch extends Component {

  	render(){
		return <div className="search">
				<nav className="navbar navbar-light bg-light justify-content-between">
					<a className="icon navbar-brand" href="http://github.com/"><i className="fa fa-github"></i></a>
					<form className="form-inline">
						<input className="form-control mr-sm-2" type="search" placeholder="Buscar repositorio" aria-label="Search" onChange={this.props.searchBy}/>
						<button className="btn btn-search my-2 my-sm-0" type="submit">Search</button>
					</form>
				</nav>
			</div>
	}
}

export default RepoSearch;