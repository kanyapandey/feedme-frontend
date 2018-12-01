import React, { Component } from 'react';
import { Card, InputGroup,Input,Breadcrumb, BreadcrumbItem,InputGroupAddon,Container, Row, Col, CardHeader, CardBlock, Table} from 'reactstrap';
import axios from 'axios';
class Tracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee: [],
            loading: true,
            shown: true
          };
        this.clickHome = this.clickHome.bind(this);
        this.check = this.check.bind(this);
        let userId = localStorage.getItem('userId');
        // axios({
        //     method: "get",
        //     url: "http://58.137.14.227:1337/api/v1/feed/getFeed/"+ userId
        //   }).then(response => {
        //     if (response.data.success === true) {
        //         this.setState({
        //             employee: response.data.data,
        //             loading: false
        //           });
        //     } else {
        //         this.setState({
        //             loading: false
        //           });
        //       alert(response.data.msg);
        //     }
        //   });
          /* LOCALHOST */
        axios({
            method: "get",
            url: "https://iamfeedme.herokuapp.com/api/v1/feed/getFeed/"+ userId
          }).then(response => {
            if (response.data.success === true) {
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
    clickHome(){
        setTimeout(() => { this.props.history.push('/feedhome');
        }, 1000)
    }
    check(){
        this.setState({
			shown: !this.state.shown
		});
    }
  render() {
    var shown = {
        display: this.state.shown ? "block" : "none"
    };
    
    var hidden = {
        display: this.state.shown ? "none" : "block"
    }
    const {employee,loading} = this.state;
    return (
        <Container>
            <br/>
            <Breadcrumb id="breadcrumb">
                <BreadcrumbItem><a onClick={this.clickHome}><span class="icon icon-home"> </span></a></BreadcrumbItem>
                <BreadcrumbItem><a><span class="icon icon-double-angle-right"></span> Tracking</a></BreadcrumbItem> 
            </Breadcrumb>  
            <div style={ hidden }>
            <Row>
                <Col>
                    <h1 className="statush1">Status Feedback </h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <div className="steps1">
                        <ul className="progressbar1">
                            <li className="active">Submitted</li>
                            <li>In-progress</li>
                            <li>Reviewing</li>
                            <li>Take Action</li>
                            <li>Done</li>
                        </ul>
                    </div>
                    <div className="steps2">
                        <ul className="progressbar2">
                            <li className="active">Step 1</li>
                            <li>Step 2</li>
                            <li>Step 3</li>
                            <li>Step 4</li>
                            <li>Step 5</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            </div>
            <br/>
            <br/>
            <Row>
                <Col xs="12">
                    <Card>
                    <CardHeader>
                        <InputGroup>
                            <Input
                                name="searchString"
                                placeholder="Search..."
                                type="text"
                            />
                        </InputGroup>
                    </CardHeader>

                    
                    <CardBlock className="card-body">
                        <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                            <th>Feedback ID</th>
                            <th>Category</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Response from IAM</th>
                            <th>Submitted Date</th>
                        </tr>
                        </thead>
                        <tbody>

                    {!loading
                      ? employee.map(e => {
                          return (
                            <tr>
                            <td>{e.feedId}</td>
                            <td>{e.category}</td>
                            <td className="tdsub">{e.subject}</td>
                            <td className="tdsub">{e.description}</td>
                            <td onClick={this.check}>Submitted</td>
                            <td>Waiting for response</td>
                            <td>{e.date}</td>
                        </tr>
                        );
                    })
                  : "Loading.."}
                        </tbody>
                        </Table>
                    </CardBlock>
                    </Card>
                </Col>
            </Row>
      </Container>
    )
  }
}

export default Tracking;
