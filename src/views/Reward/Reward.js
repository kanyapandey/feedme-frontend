import React, { Component } from 'react';
import { Card, Button, CardImg, Breadcrumb, BreadcrumbItem,CardTitle, CardText, CardColumns,
     CardBody, Container, Row, Col} from 'reactstrap';

class Reward extends Component {
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
        <br />

        {/* <Breadcrumb>
            <BreadcrumbItem><a onClick={this.clickHome}>Home</a></BreadcrumbItem>
            <BreadcrumbItem active>Reward</BreadcrumbItem>
        </Breadcrumb> */}
        <Row>
            <Col xs="8">
                <Breadcrumb className="rewardbreadcrumb">
                    <BreadcrumbItem><a onClick={this.clickHome}>Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Reward</BreadcrumbItem>
                </Breadcrumb>
                <div className="collect">
                    <span className="star fa-stack fa-lg">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-1x"></i>
                    </span>
                </div>
            </Col>
        </Row>

        <Row>
            <Col xs="12" sm="8">
                <CardColumns>
                    <Card>
                        <CardImg top width="100%" src="https://malaysiafreebies.com/wp-content/uploads/2017/07/IMG_1401.gif" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Starbuck 2018</CardTitle>
                        <CardText>Redeem This voucher for 200 point</CardText>
                        <Button>More</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://i-h2.pinimg.com/564x/65/6c/e1/656ce1f5c3a4c18cac1207650cdf3052.jpg" alt="Card image cap" />
                    </Card>
                    <Card>
                        <CardBody>
                        <CardTitle>Annual Leave Day</CardTitle>
                        <CardText>Redeem This voucher for 2500 point</CardText>
                        <Button>More</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width="100%" src="https://i-h2.pinimg.com/564x/47/64/1a/47641a8b19fa1f4b26940a241ee51244.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>iPhone Xs</CardTitle>
                        <CardText>Redeem This voucher for 30000 point</CardText>
                        <Button>More</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width="100%" src="https://i-h2.pinimg.com/564x/4f/6f/ec/4f6fecfe6aaeffb8c9afb26c369e4575.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Top Voucher 100 Baht</CardTitle>
                        <CardText>Redeem This voucher for 100 point</CardText>
                        <Button>More</Button>
                        </CardBody>
                    </Card>
                    <Card body inverse color="primary">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">More</Button>
                    </Card>
                </CardColumns>
            </Col>
        </Row>
      </Container>
    )
  }
}

export default Reward;
