import React, { Component } from 'react';
import './RepoList.css';
import axios from 'axios'; 

class RepoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            faqs: [],
            currentPage: 1,
            todosPerPage: 5, 
        }; 
        if(props.candidatoGit.usuarioGit!==""){
            this.servicio(props);
        }    
    }

    handleClick = (event)=> {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    servicio=(props) => {
        axios.get('https://api.github.com/users/'+props.candidatoGit.usuarioGit+'/repos')
            .then(res => {
                const faqs = res.data.slice(0,10);
                this.setState({ faqs });
            })
    }

    render() {
        let { faqs, currentPage, todosPerPage } = this.state;
        const isList = this.state.faqs;
        let contenido;

        // Logic for displaying current repo
        const indexOfLast = currentPage * todosPerPage;
        const indexOfFirst = indexOfLast - todosPerPage;
        const repo = faqs.slice(indexOfFirst, indexOfLast);       

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(faqs.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item" key={number.toString()} id={number} onClick={this.handleClick}>
                    {number}
                </li>
                
            );
        });
        const listRepo = repo.map((faq )=> {
            if(faq.name.search(this.props.repoSearch.searchRepo) >  -1) {
                return(
                    <tbody>
                        <tr>
                            <td>{faq.language}</td>
                            <td>{faq.default_branch}</td>
                            <td><a href={faq.html_url} target="_blank">{faq.html_url}</a></td>
                            <td>{faq.name}</td>
                            <td>{faq.description}</td>
                        </tr>                                    
                    </tbody>
                );
            }
        });

        if(isList.length<=0){
            contenido = <div className="loading"></div>;
        }
        else{
            contenido = <div>
                            <div className="container">
                            <section className="section-head">
                                <p className="subtitle is-4">Repositorios públicos de :</p>
                                <p className="title">{this.props.candidatoGit.usuarioGit}</p>
                            </section>                             
                            <div className="columns">
                            <table className="table table-hover table-bordered ">
                                <thead>
                                    <tr>
                                        <th scope="col">Lenguaje</th>
                                        <th scope="col">Branch default</th>
                                        <th scope="col">Url Github</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descriptión</th>
                                    </tr>
                                </thead>
                                {listRepo}                                
                                
                            </table> 
                            <nav aria-label="Page navigation example">
                                <ul id="page-numbers" className="pagination justify-content-end">
                                    {renderPageNumbers}
                                </ul>                  
                            </nav>
                        </div>                        
                    </div>
                </div>                
        }
        return (
            <div>
                {contenido}          
            </div>
        );        
    }
}

export default RepoList;