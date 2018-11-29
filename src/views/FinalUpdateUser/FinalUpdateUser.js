import React, { Component } from 'react';
import { Button, InputGroup, Form, Breadcrumb, BreadcrumbItem,FormGroup, Input, Container, Row, Label, Col } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

class FinalUpdateUser extends Component {
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
        phone: '',
        employee: [],
        loading: true
    };
    this.clickHome = this.clickHome.bind(this);
    this.home = this.home.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.edituser = this.edituser.bind(this);
      //   this.props.history.push('FeedHome');
      let user_email = localStorage.getItem('email');

      let userId = localStorage.getItem('userId');
      /* LOCALHOST */
      axios({
          method: "get",
          url: "https://iamfeedme.herokuapp.com/api/v1/updateprofile/userprofile/"+ userId
        }).then(response => {
          if (response.data.success === true) {
              console.log("userprofile test",response.data.data)
              this.setState({
                  employee: response.data.data,
                  loading: false
                });
          } else {
              this.setState({
                  loading: false
                });
            alert(response.data.msg);
          }
        });
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
    this.props.history.push('/finalfeedhome');
  }    
  clickHome(){
    this.props.history.push('/finalfeedhome');
  }
  edituser(){
    this.props.history.push('/edituser');
  }
  onChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  
  }
  render() {

    const {employee,loading} = this.state;
    return (
        <Container>
            <br/>
            <Breadcrumb id="breadcrumb">
                <BreadcrumbItem><a onClick={this.clickHome}><span class="icon icon-home"> </span></a></BreadcrumbItem>
                <BreadcrumbItem><a><span class="icon icon-double-angle-right"></span> Update User</a></BreadcrumbItem> 
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
                            <i onClick={this.edituser} className="fa fa-edit"></i>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs="7" sm="10">
                    {!loading
                      ? employee.map(e => {
                          return (
                    <Form className="feedformgroup">

                    
                                <FormGroup>
                                    <Label for="username">Username * </Label>
                                    <Input readOnly type="text" name="username" id="username" placeholder={e.username} value={this.state.username} 
                                />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password * </Label>
                                    <Input readOnly type="password" name="password" id="password" placeholder={e.password} value={this.state.password}  
                                />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="year">Birth Year * </Label>
                                    <Input  readOnly name="birthyear" id="year" placeholder={e.birthyear} value={this.state.birthyear}
                                        >
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="gender">Gender * </Label>
                                    <Input  readOnly name="gender" id="gender" placeholder={e.gender} value={this.state.gender}
                                            >
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Status (optional) </Label>
                                    <Input  readOnly name="status" placeholder={e.status} id="status" value={this.state.status}
                                           >
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bu">BU (optional) </Label>
                                    <Input readOnly name="bu" id="bu" placeholder={e.bu} value={this.state.bu}
                                            >
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email (optional)</Label>
                                    <Input readOnly  type="text" name="email" id="email" placeholder={e.email} value={this.state.email} 
                                 placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone (optional)</Label>
                                    <Input readOnly type="number" name="phone" id="phone" placeholder={e.phone} value={this.state.phone} 
                                 placeholder="phone" />
                                </FormGroup>
                                <br />
                                {/* <Button  color="success" size="lg" onClick={this.home} block>Save</Button> */}
                            
                                   
                            </Form>
                             );
                            })
                        : "Loading.."}
                    </Col>
                </Row>
                </div>
                </Col>
                </Row>
      </Container>
    )
  }
}

export default FinalUpdateUser;
