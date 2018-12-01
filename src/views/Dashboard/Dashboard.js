import React, { Component } from 'react';
import { Button, InputGroup, Form, FormGroup, Input, Container, Row, Label, Col } from 'reactstrap';
import axios from 'axios';
class Dashboard extends Component {
  constructor(props){
      super(props);
      this.state = {
        username: '',
        password: ''
      };
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
    // axios({
    //     method: "post",
    //     url: "http://58.137.14.227:1337/api/v1/updateprofile/login",
    //     data: {   
    //         username: this.state.username,
    //         password: this.state.password
    //     }
    //   }).then(response => {
    //     if (response.data.success === true) {
    //         localStorage.setItem('email', response.data.msg['email']);
    //         localStorage.setItem('userId', response.data.msg['userId']);
    //         this.props.history.push('FeedHome');
    //     } else {
    //       alert(response.data.msg);
    //     }
    //   });
      /* LOCALHOST */
    axios({
        method: "post",
        url: "https://iamfeedme.herokuapp.com/api/v1/updateprofile/login",
        data: {   
            username: this.state.username,
            password: this.state.password
        }
      }).then(response => {
        if (response.data.success === true) {
            localStorage.setItem('email', response.data.msg['email']);
            localStorage.setItem('userId', response.data.msg['userId']);
            this.props.history.push('/FinalFeedHome');
        } else {
          alert(response.data.msg);
        }
      });
  }

  render() {
    return (
        <Container>
            <Row>
            <Col>
            <div className="validate">
                <br />
                <Row>
                    <Col>
                        <h1>Login</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <InputGroup>
                        <div className="formgroup" id="name-form">
                            <Label className="label" for="name">Username *</Label>
                            <Input className="input" 
                                id="code"
                                type="text"
                                name="username" value={this.state.username} 
                                onChange={this.handleChange}
                                     placeholder="username" />
                            <Label className="label" for="name">Password *</Label>
                            <Input className="input" 
                                id="code"
                                type="password"
                                name="password" value={this.state.password} 
                                onChange={this.handleChange}
                                    placeholder="password" />
                        </div>
                        </InputGroup>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button 
                          onClick={this.home} className="borderSubmit" size="lg" color="success">submit</Button>{' '}
                    </Col>
                </Row>
                </div>
                <br />
                </Col>
                </Row>
      </Container>
    )
  }
}

export default Dashboard;
