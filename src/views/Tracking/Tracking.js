import React, { Component } from 'react';
import { Card, InputGroup,Input,Breadcrumb, BreadcrumbItem,InputGroupAddon,Container, Row, Col, CardHeader, CardBlock, Table} from 'reactstrap';
import axios from 'axios';
class Tracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee: [],
            loading: true
          };
        this.clickHome = this.clickHome.bind(this);

        let userId = localStorage.getItem('userId');
        axios({
            method: "get",
            url: "http://localhost:1337/api/v1/feed/getFeed/"+ userId
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
        this.props.history.push('/feedhome');
    }
  render() {
    const {employee,loading} = this.state;
    return (
        <Container>
            <br/>
            <Breadcrumb>
                <BreadcrumbItem><a onClick={this.clickHome}>Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Tracking</BreadcrumbItem>
            </Breadcrumb>
            <Row>
                <Col>
                    <h1 className="statush1">Status Feedback ID : 231 </h1>
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
                        </tr>
                        </thead>
                        <tbody>

                    {!loading
                      ? employee.map(e => {
                          return (
                            <tr>
                            <td>235</td>
                            <td>{e.category}</td>
                            <td>{e.subject}</td>
                            <td>{e.description}</td>
                            <td>Submitted</td>
                            <td>Thank you, We have warned Call center to solve problem</td>
                            <td></td>
                        </tr>
                        // <tr>
                        //     <td>235</td>
                        //     <td>Environment</td>
                        //     <td>Need tree in office</td>
                        //     <td>I love green space</td>
                        //     <td>Submitted</td>
                        //     <td></td>
                        // </tr>
                        );
                    })
                  : "Loading.."}
                        {/* <tr>
                            <td>231</td>
                            <td>Engagement</td>
                            <td>Need benefit for employee</td>
                            <td>I want party every month</td>
                            <td>Take action</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>122</td>
                            <td>Call Center</td>
                            <td>Can't Contact</td>
                            <td>No Response</td>
                            <td>Done</td>
                            <td>Thank you, We have warned Call center to solve problem</td>
                        </tr> */}
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
