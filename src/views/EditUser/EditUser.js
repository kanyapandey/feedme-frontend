import React, { Component } from 'react';
import { Button, InputGroup, Form, Breadcrumb, BreadcrumbItem,FormGroup, Input, Container, Row, Label, Col } from 'reactstrap';

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        birthyear: '',
        gender: '',
        status: '', 
        bu: '',
        email: '',
        phone: ''
    };
    this.clickHome = this.clickHome.bind(this);
    this.home = this.home.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event)  {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }
  home(){
    let user_email = localStorage.getItem('email');    
    let userId = localStorage.getItem('userId');

    if(this.state.password === ''){
        toast.error("Enter your password", {
            position: toast.POSITION.TOP_CENTER
        });
    }else {
    axios({
        method: "post",
        url: "https://iamfeedme.herokuapp.com/api/v1/updateprofile/update-profile/"+ userId,
        data: {   
            user_email: user_email,
            username: this.state.username,
            password: this.state.password,
            birthyear: this.state.birthyear,
            gender: this.state.gender,
            status: this.state.status,
            bu: this.state.bu,
            email: this.state.email,
            phone: this.state.phone

        }
      }).then(response => {
        if (response.data.success === true) {
            toast.success("Successfully Updated user profile", {
                position: toast.POSITION.TOP_CENTER
              });
            this.props.history.push('FinalFeedHome');
        } else {
          alert(response.data.msg);
        }
      });
    }
  }    
  clickHome(){
    this.props.history.push('/finalfeedhome');
  }
 
  render() {

    return (
        <Container>
            <br/>
            <Breadcrumb id="breadcrumb">
                <BreadcrumbItem><a onClick={this.clickHome}><span class="icon icon-home"> </span></a></BreadcrumbItem>
                <BreadcrumbItem><a><span class="icon icon-double-angle-right"></span> Edit User</a></BreadcrumbItem> 
            </Breadcrumb>
            <Row>
            <Col>
            <div className="validate">
                <br />
                <Row>
                    <Col>
                        <div>
                            <h1 className="h1User">User Profile</h1>
                        </div>
                        <div className="editIcon">
                            {/* <i className="fa fa-edit"></i> */}
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs="7" sm="10">
                    <Form className="feedformgroup">
                                <FormGroup>
                                    <Label for="password">Password * </Label>
                                    <Input type="password" name="password" id="password" placeholder="password" value={this.state.password} 
                                onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="year">Birth Year * </Label>
                                    <Input type="select" name="birthyear" id="year" value={this.state.handleChange}
                                        onChange={this.handleChange}>
                                        <option>---Select----</option>
                                        <option>1955-1964</option>
                                        <option>1965-1979</option>
                                        <option>1980-1997</option>
                                        <option>1998+</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="gender">Gender * </Label>
                                    <Input type="select" name="gender" id="gender" value={this.state.handleChange}
                                            onChange={this.handleChange}>
                                        <option>---Select----</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Status (optional) </Label>
                                    <Input type="select" name="status" id="status" value={this.state.handleChange}
                                            onChange={this.handleChange}>

                                        <option>---Select----</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorce</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bu">BU (optional) </Label>
                                    <Input type="select" name="bu" id="bu" value={this.state.handleChange}
                                            onChange={this.handleChange}>

                                        <option>---Select----</option>
                                        <option>ECM</option>
                                        <option>iCoach</option>
                                        <option>Basis</option>
                                        <option>CODEIT</option>
                                        <option>ERP</option>
                                        <option>iHR</option>
                                        <option>BOS</option>
                                        <option>MGT</option>
                                        <option>E-Commerce</option>
                                        <option>SDS-ERP</option>
                                        <option>SDS-iHR</option>
                                        <option>Swish</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email (optional)</Label>
                                    <Input type="text" name="email" id="email" value={this.state.email} 
                                onChange={this.handleChange} placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone (optional)</Label>
                                    <Input type="number" name="phone" id="phone" value={this.state.phone} 
                                onChange={this.handleChange} placeholder="phone" />
                                </FormGroup>
                                <br />
                                <Button  color="success" size="lg" onClick={this.home} block>Save</Button>
                            </Form>
                    </Col>
                </Row>
                </div>
                </Col>
                </Row>
      </Container>
    )
  }
}

export default EditUser;
