import React, { Component } from 'react';
import { Card, InputGroup,Input,Breadcrumb, BreadcrumbItem,InputGroupAddon,Container, Row, Col, CardHeader, CardBlock, Table} from 'reactstrap';

class Tracking extends Component {
    constructor(props){
        super(props);
        this.clickHome = this.clickHome.bind(this);
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
                        <tr>
                            <td>235</td>
                            <td>Environment</td>
                            <td>Need tree in office</td>
                            <td>I love green space</td>
                            <td>Submitted</td>
                            <td></td>
                        </tr>
                        <tr>
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
                        </tr>
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
