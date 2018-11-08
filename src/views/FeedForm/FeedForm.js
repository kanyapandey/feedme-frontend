import React, { Component } from 'react';
import { Button, Input, Breadcrumb, BreadcrumbItem, Container, Row, Col, Form, FormGroup, Label} from 'reactstrap';

import axios from "axios";
class FeedForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            select: '',
            subject: '',
            rating: '',
            description: '',
            contact: ''
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
    clickHome(){
        this.props.history.push('/feedhome');
    }
    // home(){

    //     let email = localStorage.getItem('email');
    //     axios({
    //         method: "post",
    //         url: "https://feedforward.iamconsulting.co.th:53093/api/v1/feed/feed-form",
    //         data: {   
    //             email: email,
    //             category: this.state.select,
    //             subject: this.state.subject,
    //             rating: this.state.rating,
    //             description: this.state.description,
    //             contact: this.state.contact,

    //         }
    //       }).then(response => {
    //         if (response.data.success === true) {
    //             localStorage.setItem('count', response.data.msg);
    //             this.props.history.push('FeedHome');
    //         } else {
    //           alert(response.data.msg);
    //         }
    //       });
    // }
    home(){

        let email = localStorage.getItem('email');
        axios({
            method: "post",
            url: "http://localhost:1337/api/v1/feed/feed-form",
            data: {   
                email: email,
                category: this.state.select,
                subject: this.state.subject,
                rating: this.state.rating,
                description: this.state.description,
                contact: this.state.contact,

            }
          }).then(response => {
            if (response.data.success === true) {
                localStorage.setItem('count', response.data.msg);
                this.props.history.push('FeedHome');
            } else {
              alert(response.data.msg);
            }
          });
    }
  render() {
    return (
        <Container>
        <br />

        <Breadcrumb>
            <BreadcrumbItem><a onClick={this.clickHome}>Home</a></BreadcrumbItem>
            <BreadcrumbItem active>FeedForm</BreadcrumbItem>
        </Breadcrumb>
        <br/>
        <Row>
            <Col>
                <div className="validate2">
                    <Row>
                        <Col><h1 className="feedh1">Feed Forward Me</h1></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="7" sm="10">
                            <Form className="feedformgroup">
                                <FormGroup>
                                    <Label for="select">Select Category * </Label>
                                    <Input type="select" name="select" 
                                            value={this.state.handleChange}
                                            onChange={this.handleChange} id="select">
                                        <option>Social & Communication</option>
                                        <option>Onboard</option>
                                        <option>Learning</option>
                                        <option>Benefit</option>
                                        <option>Compensation</option>
                                        <option>Career Path</option>
                                        <option>Exit</option>
                                        <option>Other</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="subject">Subject * </Label>
                                    <Input type="text" name="subject" value={this.state.subject} 
                                onChange={this.handleChange} id="subject" placeholder="Subject" />
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <legend>Rating of Appreciation *</legend>
                                    <fieldset class="rating">
                                        <input type="radio" id="star5" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="5" />
                                            <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                        <input type="radio" id="star4half" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="4 and a half" />
                                            <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                        <input type="radio" id="star4" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="4" />
                                            <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                        <input type="radio" id="star3half" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="3 and a half" />
                                            <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                        <input type="radio" id="star3" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="3" />
                                            <label class = "full" for="star3" title="Meh - 3 stars"></label>
                                        <input type="radio" id="star2half" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="2 and a half" />
                                            <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                        <input type="radio" id="star2" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="2" />
                                            <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                        <input type="radio" id="star1half" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="1 and a half" />
                                            <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                        <input type="radio" id="star1" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="1" />
                                            <label class = "full" for="star1" value={this.state.rating} 
                                onChange={this.handleChange} title="Sucks big time - 1 star"></label>
                                        <input type="radio" id="starhalf" value={this.state.rating} 
                                onChange={this.handleChange} name="rating" value="half" />
                                            <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                </FormGroup>
                                {/* <FormGroup tag="fieldset">
                                    <legend>Rating of Appreciation *</legend>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        5 ดีเยี่ยม
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        4 ดี
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                        <Label check>
                                        <Input type="radio" name="radio1" disabled />{' '}
                                        3 ปานกลาง
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        2 น้อย
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        1 แย่
                                        </Label>
                                    </FormGroup>
                                </FormGroup> */}
                                <FormGroup>
                                    <Label for="description">Description </Label>
                                    <Input type="textarea" value={this.state.description} 
                                onChange={this.handleChange} name="description" id="description" />
                                </FormGroup>
                                {/* <FormGroup>
                                    <Label for="url">Add URL Picture </Label>
                                    <Input type="text" name="url" id="url" placeholder="http://" />
                                </FormGroup> */}
                                <FormGroup>
                                    <Label for="contact">Contact</Label>
                                    <Input type="number" name="contact" value={this.state.contact} 
                                onChange={this.handleChange} id="contact" placeholder="Contact" />
                                </FormGroup>
                                <br />
                                <Button  onClick={this.home} color="success" size="lg" block>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
        
        <br />
      </Container>
    )
  }
}

export default FeedForm;
