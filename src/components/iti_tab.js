import React from 'react';
import axios from 'axios';
import Loader from './loader';


class ItiTab extends React.Component{
    constructor(props){
        super(props);
        this.state={itis:null};
    }
    
    componentDidMount() {
        axios.get(`/iti`,{	headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
          }})
          .then(res => {
            if(res.data.success){
                console.log(res.data);
                this.setState({itis: res.data.itis});
            }
          });
      }
    render(){
        var cards;
        if(!this.state.itis){
            cards= <Loader/>;
        }else{
            cards=this.state.itis.map((iti)=>{
                return (
                    <div className="col s12 m6 l4 ">
                        <div className="card col-content">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" width="250px" height="250px" src={iti.image}/>
                                </div>
                                <div className="card-content  blue darken-3 center">
                                    <div className="card-title activator white-text text-darken-4"><span className="center">{iti.name}</span><i className="material-icons right">arrow_drop_down</i></div>
                                    <a className="waves-effect waves-light btn red darken-4" onClick={()=>{this.props.clickOnIti(iti._id)}}>View Alumni</a>
                                </div>
                                <div className="card-reveal grey darken-4 white-text">
                                    <span className="card-title white-text text-darken-4">{iti.name}<i className="material-icons right">close</i></span>
                                    <p>{iti.desc}</p>
                                </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div>
                <h2 className="header center teal-text text-darken-4">ITI List</h2>
                <div className="row">
                    {cards}
                </div>
            </div>
        )
    }
}

export default ItiTab;