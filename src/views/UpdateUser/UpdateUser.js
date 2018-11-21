import React, { Component } from 'react';
import { Button, InputGroup, Form, Breadcrumb, BreadcrumbItem,FormGroup, Input, Container, Row, Label, Col } from 'reactstrap';

import axios from "axios";
class UpdateUser extends Component {
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
    //   this.props.history.push('FeedHome');
    let user_email = localStorage.getItem('email');
    /* LOCALHOST */
    axios({
        method: "post",
        url: "https://iamfeedme.herokuapp.com/api/v1/updateprofile/update-profile",
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
            this.props.history.push('FeedHome');
        } else {
          alert(response.data.msg);
        }
      });
    // axios({
    //     method: "post",
    //     url: "http://58.137.14.227:1337/api/v1/updateprofile/update-profile",
    //     data: {   
    //         user_email: user_email,
    //         username: this.state.username,
    //         password: this.state.password,
    //         birthyear: this.state.birthyear,
    //         gender: this.state.gender,
    //         status: this.state.status,
    //         bu: this.state.bu,
    //         email: this.state.email,
    //         phone: this.state.phone

    //     }
    //   }).then(response => {
    //     if (response.data.success === true) {
    //         this.props.history.push('FeedHome');
    //     } else {
    //       alert(response.data.msg);
    //     }
    //   });
  }    
  clickHome(){
    this.props.history.push('/feedhome');
  }
  render() {
    return (
        <Container>
            <br/>
            <Breadcrumb id="breadcrumb">
                <BreadcrumbItem><a onClick={this.clickHome}><span class="icon icon-home"> </span></a></BreadcrumbItem>
                <BreadcrumbItem><a><span class="icon icon-double-angle-right"></span> Tracking</a></BreadcrumbItem> 
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
                            <i className="fa fa-edit"></i>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs="7" sm="10">
                    <Form className="feedformgroup">
                                <FormGroup>
                                    <Label for="username">Username * </Label>
                                    <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} 
                                onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password * </Label>
                                    <Input type="password" name="password" id="password" placeholder="password" value={this.state.password} 
                                onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="year">Birth Year * </Label>
                                    <Input type="select" name="birthyear" id="year" value={this.state.handleChange}
                                        onChange={this.handleChange}>
                                        <option>1999</option>
                                        <option>1998</option>
                                        <option>1997</option>
                                        <option>1996</option>
                                        <option>1995</option>
                                        <option>1994</option>
                                        <option>1993</option>
                                        <option>1992</option>
                                        <option>1991</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="gender">Gender * </Label>
                                    <Input type="select" name="gender" id="gender" value={this.state.handleChange}
                                            onChange={this.handleChange}>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Status (optional) </Label>
                                    <Input type="select" name="status" id="status" value={this.state.handleChange}
                                            onChange={this.handleChange}>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorce</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bu">BU (optional) </Label>
                                    <Input type="select" name="bu" id="bu" value={this.state.handleChange}
                                            onChange={this.handleChange}>
                                        <option>Swish</option>
                                        <option>Other</option>
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

export default UpdateUser;
