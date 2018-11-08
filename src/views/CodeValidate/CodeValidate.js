import React, { Component } from 'react';
import { Button, InputGroup, Input, Container, Row, Label, Col } from 'reactstrap';

import axios from "axios";

class CodeValidate extends Component {
  constructor(props){
      super(props);
      this.state = {
          code: ''
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
    axios({
        method: "post",
        url: "http://localhost:1337/api/v1/users/checkCode",
        data: {   
            vCode: this.state.code
        }
      }).then(response => {
        if (response.data.success === true) {
            localStorage.setItem('token', response.data.token);
            console.log("response",response.data.msg)
            localStorage.setItem('email', response.data.msg['email']);
            localStorage.setItem('userId', response.data.msg['userId']);
            this.props.history.push('userprofile');
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
                        <h1>Validate Code</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <InputGroup>
                        <div className="formgroup" id="name-form">
                            <Label className="label" for="name">Verify Code *</Label>
                            <Input className="input" 
                                id="code"
                                type="text"
                                name="code" value={this.state.code} 
                                onChange={this.handleChange}
                                     placeholder="56734" />
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

export default CodeValidate;
