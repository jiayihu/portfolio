import React, { PropTypes } from 'react';
import DotController from './DotController';

export default class DotsControllers extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    this.props.goToSlide(index);
  }

  render() {
    const indexes = [0, 1, 2, 3];
    const dots = indexes.map((index) => (
      <DotController
        isActive={this.props.currentSlide === index}
        key={index}
        index={index}
        onClick={this.onClick}
      />
    ));

    return (
      <ul className="carousel-dots">
        {dots}
      </ul>
    );
  }
}

DotsControllers.propTypes = {
  currentSlide: PropTypes.number,
  goToSlide: PropTypes.func,
  slideCount: PropTypes.number,
  slidesToScroll: PropTypes.number,
};
