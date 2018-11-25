import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './components/navbar';
import ItiTab from './components/iti_tab';
import AddTab from './components/add_tab';
import ResultsTab from './components/results_tab';
import SearchTab from './components/search_tab';

class App extends Component {
  constructor(props){
    super(props);
    this.state={tab:1, itiId:null};
  }
  
  changeTab(no){
    this.setState({tab:no, itiId:null});
  }

  clickOnIti(id){
    this.setState({tab:4, itiId:id});
  }

  render() {
    var content;
    if(this.state.tab===1){
      content=<ItiTab clickOnIti={this.clickOnIti.bind(this)}/>;
    }
    else if(this.state.tab===2){
      content=<SearchTab/>
    }
    else if(this.state.tab===3){
      content=<AddTab/>;
    }
    else if(this.state.tab===4){
      content=<ResultsTab itiId={this.state.itiId}/>
    }
    return (
      <div className="yellow">
        <MyNav changeTab={this.changeTab.bind(this)} tab={this.state.tab}/>
        <div className="container">
            {content}
        </div>
      </div>
    );
  }
}

export default App;
