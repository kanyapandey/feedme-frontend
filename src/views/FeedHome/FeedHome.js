import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import 'regenerator-runtime/runtime';
class FeedHome extends Component {
  constructor(props){
      super(props);
      this.feedForm = this.feedForm.bind(this);
      this.message = this.message.bind(this);
      this.reward = this.reward.bind(this);
      this.tracking = this.tracking.bind(this);
      this.updateUser = this.updateUser.bind(this);

        this.state = {
            count: "0",
        };   

      let userId = localStorage.getItem('userId');
      var self = this;
    //   axios({
    //     method: "get",
    //     url: "http://58.137.14.227:1337/api/v1/feed/getCount/"+ userId
    //   }).then(response => {
    //     if (response.data.success === true) {
    //         console.log("last",response.data.data[0].count)
    //         localStorage.setItem('counts', response.data.data[0].count);
    //         let count = localStorage.getItem('counts');
    //         console.log("now",count);
    //         this.state = {
    //             count: count,
    //         }; 
    //         self.setState({count: count})
    //         console.log("this state count now", this.state.count)
    //     } else {
    //       alert(response.data.msg);
    //     }
    //   });

      console.log("final count", this.state.count)
      /* LOCALHOST */
      axios({
          method: "get",
          url: "https://iamfeedme.herokuapp.com/api/v1/feed/getCount/"+ userId
        }).then(response => {
          if (response.data.success === true) {
              console.log("last",response.data.data[0].count)
              localStorage.setItem('counts', response.data.data[0].count);
              let count = localStorage.getItem('counts');
              console.log("now",count);
              this.state = {
                  count: count,
              }; 
              self.setState({count: count})
              console.log("this state count now", this.state.count)
          } else {
            alert(response.data.msg);
          }
        });

        console.log("final count", this.state.count)
}
 
  feedForm(){
      this.props.history.push('/FeedForm');
  }
  message(){
      this.props.history.push('/Message');
  }
  reward(){
      this.props.history.push('/reward');
  }
  tracking(){
      this.props.history.push('/tracking');
  }
  updateUser(){
    this.props.history.push('/updateuser');
  }
  render() {
    return (
        <Container>
        <br />
        <Row className="welcome">
            <Col xs="6">
                <h2>Welcome Anonymous</h2>
            </Col>
            <Col xs="6">
                <div className="collect">
                    <span className="arrow bounce">
                        <i className="fa fa-angle-double-right fa-5x" aria-hidden="true"></i>
                    </span>
                    <span onClick={this.updateUser} className="user fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="alert1 fa fa-exclamation-circle"><span className="span">Update Your profile</span></i>
                        <i className="fa fa-user fa-stack-1x"> 
                        </i> 
                    </span>
                    <span className="star fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-1x"></i>
                        <div className="count">{this.state.count}</div>
                    </span>
                </div>
            </Col>

        </Row>
        <Row className="option">
            <Col xs="6">
                <Button onClick={this.feedForm} className="feedNow" size="lg" color="warning">
                <div className="icon">
                    <i className="fa fa-comment"></i>
                </div>
                FeedNow</Button>{' '}
            </Col>
            <Col xs="6">
                <Button onClick={this.tracking} className="Tracking" size="lg" color="danger">
                <div className="icon">
                    <i className="fa fa-list-ul"></i>
                </div>
                Tracking</Button>{' '}
            </Col>
        </Row>
        <Row className="option2">
            <Col xs="6">
                <Button onClick={this.message} className="Iam" size="lg" color="primary">
                <div className="icon">
                    <i className="fa fa-envelope"></i>
                </div>
                I AM Message</Button>{' '}
            </Col>
            <Col xs="6">
                <Button onClick={this.reward} className="Reward" size="lg" color="success">
                <div className="icon">
                    <i className="fa fa-trophy"></i>
                </div>
                Reward</Button>{' '}
            </Col>
        </Row>
      </Container>
    )
  }
}

export default FeedHome;
