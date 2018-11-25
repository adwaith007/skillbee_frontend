import React from 'react';
import axios from 'axios';
import Person from './person';
import Loader from './loader';
import {Col, Tabs,Tab, Row, Collapsible, CollapsibleItem} from 'react-materialize';

class ResultsTab extends React.Component{
    constructor(props){
        super(props);
        this.state={itiId:this.props.itiId, people:null}
    }

    componentDidMount(){
        axios.get(`/fetchData/`+this.props.itiId,{	headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
          }})
          .then(res => {
            if(res.data.success){
                console.log(res.data);
                this.setState({itiId:this.props.itiId, people:res.data.people});
            }
          });
    }
    render(){
        var resultContent;
        if(this.state.people){            
            const byYear=this.state.people;
            const byCourse=this.state.people;
            byYear.sort(function(a,b){
                return (a.year-b.year);
            })

            byCourse.sort(function(a,b){
                return (a.course.name-b.course.name);
            })
            const uniqueCourse=[...new Set(byCourse.map(obj=>obj.course))];
            const uniqueYear=[...new Set(byYear.map(obj=>obj.year))];

            var courseContent= uniqueCourse.map((course)=>{
                return (
                    <Col s={12}>
                        <Collapsible>
                                <CollapsibleItem className=" red darken-4" header={course.name+" ( "+course.duration+" YEAR COURSE )"}>
                                            <Row>
                                                {
                                                    byCourse.map((person)=>{
                                                        if(person.course.name===course.name){
                                                            return <Person person={person}/>
                                                        }
                                                        else return null;
                                                    })
                                                    
                                                }
                                            </Row>
                                </CollapsibleItem>
                            </Collapsible>
                    </Col>
                )
            })

            var yearContent= uniqueYear.map((year)=>{
                return (
                    <Col s={12}>
                        <Collapsible>
                                <CollapsibleItem className=" red darken-4"  header={year}>
                                            <Row>
                                            {
                                                byCourse.map((person)=>{
                                                    if(person.year===year){
                                                        return <Person person={person}/>
                                                    }
                                                    else return null;
                                                })
                                                
                                            }
                                            </Row>
                                </CollapsibleItem>
                            </Collapsible>
                    </Col>
                )
            });

            resultContent=(
                <div >
                    <Row>
                            <Col s={12}>
                                <Tabs>
                                <Tab title="course" active>
                                    <Col id="course" s={12}>
                                        {courseContent}
                                    </Col>
                                </Tab>
                                <Tab title="year">
                                    <Col s={12} id="year">
                                        {yearContent}
                                    </Col>
                                </Tab>
                                </Tabs>
                            </Col>
        

        

                    </Row>
                </div>
            );

            
        }
        else{
        resultContent=(<Loader/>);
        }

        return (
            <div>
                {resultContent}
            </div>
        )
    }
}


export default ResultsTab;