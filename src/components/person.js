import React from 'react';
import {Col, Row,MediaBox} from 'react-materialize';

class Person extends React.Component{
    render(){
        return(
            <Col l={6} m={12} className="personHover">
                <div className="container">
                    <Row >
                    <Col l={6} s={12} className="center">
                        <img  src={"http://localhost:8000"+this.props.person.picture} width="100px" height="100px" className=" circle" />
                    </Col>
                    <Col l={6} s={12} className="center">
                        <h5 className="header white-text">{this.props.person.name}</h5>
                        <p className="white-text">
                            {this.props.person.experience} year experience <br/>
                            {this.props.person.job}
                        </p>

                    </Col>
                    </Row>
                </div>
            </Col>
        )
    }
}

export default Person;