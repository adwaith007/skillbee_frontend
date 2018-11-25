import React from 'react';
import axios from 'axios';
import Person from './person';
import Loader from './loader';
import SearchBar from './search_bar';
import {Row} from 'react-materialize';

class SearchTab extends React.Component{
    constructor(props){
        super(props);
        this.state={term: "", result:null};
    }

    searchOnChange(term){
        if(term!=""){
            axios.get(`/search?key=`+term,{	headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
              }})
              .then(res => {
                if(res.data.success){
                    console.log(res.data);
                    this.setState({term:this.state.term,result: res.data.result});
                }
              });

        }else{
            this.setState({term:this.state.term,result: null});

        }
    }

    render(){
        var content;
        if(this.state.result){
            content=this.state.result.map((person)=>{
                return (<Person person={person}/>);
            });
        }
        else{
            content=(<Loader/>)
        }

        return (
            <div className="container">
                <SearchBar term={this.state.term} searchOnChange={this.searchOnChange.bind(this)}/>
                <Row className=" red darken-4" >
                    {content}
                </Row>
            </div>
        );
    }

    
}

export default SearchTab;