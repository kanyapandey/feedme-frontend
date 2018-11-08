import React, { Component } from 'react';
import { Button, InputGroup, Form, Breadcrumb, BreadcrumbItem,FormGroup, Input, Container, Row, Label, Col } from 'reactstrap';

class UpdateUser extends Component {
  constructor(props){
      super(props);
      this.home = this.home.bind(this);
      this.clickHome = this.clickHome.bind(this);
  }
  home(){
      this.props.history.push('FeedHome');
  }    
  clickHome(){
    this.props.history.push('/feedhome');
  }
  render() {
    return (
        <Container>
            <br/>
            <Breadcrumb>
                <BreadcrumbItem><a onClick={this.clickHome}>Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Tracking</BreadcrumbItem>
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
                                    <Input type="text" name="username" id="username" placeholder="Username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password * </Label>
                                    <Input type="password" name="password" id="password" placeholder="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="year">Birth Year * </Label>
                                    <Input type="select" name="year" id="year">
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
                                    <Input type="select" name="gender" id="gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="status">Status  </Label>
                                    <Input type="select" name="status" id="status">
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorce</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bu">BU  </Label>
                                    <Input type="select" name="bu" id="bu">
                                        <option>Swish</option>
                                        <option>Other</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input type="number" name="phone" id="phone" placeholder="phone" />
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
