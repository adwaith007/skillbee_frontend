import React from 'react';
import $ from 'jquery';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term:this.props.state, timer:null};
    }

    onSearchChange(t){
        console.log(t);
        let timer = setTimeout(()=>{ this.props.searchOnChange(t); }, 3000);
        clearTimeout(this.state.timer);
        this.setState({term:t, timer:timer});
    }

    render(){
        return(
            <nav className="searchAlumni blue darken-4">
                <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input id="search_input" type="search" onChange={(e)=>this.onSearchChange.bind(this)(e.target.value)} value={this.state.value} required/>
                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>
        )
    }
}

export default SearchBar;