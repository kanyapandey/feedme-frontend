import React, { Component } from 'react';
import { Container, Row, Col, Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,Breadcrumb, BreadcrumbItem,
CarouselCaption } from 'reactstrap';

const items = [
    {
      src: 'http://geneslove.me/wp-content/uploads/2018/04/wonderful-christmas-gift-exchange-theme-free-printable-cards-for-the-best-holiday.jpg'
    },
    {
      src: 'https://i1.wp.com/d3ux7ng3t2s1zl.cloudfront.net/wp-content/uploads/2017/10/Christmas-party-drinks.jpg?resize=680%2C453'
    },
    {
      src: 'http://crimson-haze.com/wp-content/uploads/2014/11/Jerome-Tso-Photography-_-Bindu-Dan-484-2.jpg'
    }
  ];

class FeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.clickHome = this.clickHome.bind(this);
  }
  clickHome(){
    this.props.history.push('/feedhome');
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
        <Container>
        <br />
        <Breadcrumb>
            <BreadcrumbItem><a onClick={this.clickHome}>Home</a></BreadcrumbItem>
            <BreadcrumbItem active>IAM Message</BreadcrumbItem>
        </Breadcrumb>
        <Row>
            <Col>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </Col>
        </Row>
        <br />
      </Container>
    )
  }
}

export default FeedForm;
