import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import {Row,Col,Input} from 'react-materialize';
import Loader from './loader';


class AddTab extends React.Component{
    constructor(props){
        super(props);
        this.state={itis:null,courses: null};
    }

    submitForm(e){
        let formData = new FormData();
        e.preventDefault();
        console.log(e.target.firstname.value);
        let name=e.target.firstname.value+" "+e.target.lastname.value;
        let job=e.target.role.value+ " at "+e.target.company.value;
        let year=e.target.year.value;
        let experience=e.target.experience.value;
        let iti = e.target.iti.value;
        let course=e.target.course.value;
        let file=e.target.picture.files[0];
        formData.append("name",name);
        formData.append("job",job);
        formData.append("year",year);
        formData.append("experience",experience);
        formData.append("iti",iti);
        formData.append("course",course);
        formData.append("picture",file);
        axios.post('/addperson',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload();
            }
            else{
                alert(res.data.message);
            }
        })

    }

    componentDidMount(){
        axios.get(`/list`,{	headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
          }})
          .then(res => {
            if(res.data.success){
                console.log(res.data);
                this.setState({itis: res.data.itis, courses: res.data.courses});
            }
          });
    }


    render(){
        var content;
        if(!this.state.courses||!this.state.itis){
            content=(
                    <Loader/>
            );
        }
        else {

            var opitis=this.state.itis.map((iti)=>{
                return (
                    <option value={iti._id}>{iti.name}</option>
                )
            });

            var opcourse=this.state.courses.map((course)=>{
                return (
                    <option value={course._id}>{course.name+" ( "+course.duration+" YEAR )"}</option>
                )
            });

        content = (
            <div className="container white">
              <form onSubmit={(e)=>this.submitForm(e)}>
                <Col s={12}>
                  <Row>
                  <Input  s={12} l={6} label="Firstname" name="firstname" required/>
                  <Input label="Lastname" s={12} l={6} name="lastname" required />
                  </Row>
        
                  <Row>
                    <Input type="file" label="Picture" s={12} name="picture" required/>
                  </Row>
        
                  <Row>
        
                    <Input  s={12} l={6} label="Company" name="company" required/>
                    <Input  s={12} l={6} label="Role" name="role" required/>

                    <Input  s={12} l={6} type="number" label="Experience (in yrs)" name="experience" required/>
        
                    <Input  s={12} l={6} type="number" label="Year" name="year" required/>
                  </Row>
        
                  <Row>
                    <Input s={12} l={6} type='select' label="ITI" defaultValue='1' name="iti" required>
                        <option value='1' disabled>Select ITI</option>
                        {opitis}
                    </Input>

                    <Input s={12} l={6} type='select' label="Course" defaultValue='1' name="course" required>
                        <option value='1' disabled>Select Course</option>
                        {opcourse}
                    </Input>
                  </Row>
        
                  <Row>
                      <button className="btn waves-effect waves-light col s12 m2 offset-m5 grey darken-4" name="action">Submit
                          <i className="material-icons right">send</i>
                      </button>
                  </Row>
        
                </Col>
              </form>
            </div>
        
        )
        }
        return (content);
    }
}

export default AddTab;