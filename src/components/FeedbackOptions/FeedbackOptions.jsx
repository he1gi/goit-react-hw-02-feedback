import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Btn, Wrapper } from './FeedbackOptions.styled';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    const keys = Object.keys(options);

    return (
      <Wrapper>
        {keys.map(key => (
          <Btn type="button" key={key} name={key} onClick={onLeaveFeedback}>
            {key.toUpperCase()}
          </Btn>
        ))}
      </Wrapper>
    );
  }
}
