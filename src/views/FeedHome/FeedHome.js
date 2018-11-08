import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class FeedHome extends Component {
  constructor(props){
      super(props);
      this.feedForm = this.feedForm.bind(this);
      this.message = this.message.bind(this);
      this.reward = this.reward.bind(this);
      this.tracking = this.tracking.bind(this);
      this.updateUser = this.updateUser.bind(this);

      let token = localStorage.getItem('token');
      console.log("token",token);
      let count = localStorage.getItem('count');
      this.state = {
        count: count,
      };
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
                    <span onClick={this.updateUser} className="user fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-user fa-stack-1x"></i>
                    </span>
                    <span className="star fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <div className="count">{this.state.count}</div>
                        <i className="fa fa-star fa-stack-1x"></i>
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
