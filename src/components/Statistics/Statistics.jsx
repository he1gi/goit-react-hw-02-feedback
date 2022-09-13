import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { List, Item, Span } from './Statistics.styled';

export default class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>
          Positive feedback:{' '}
          <Span percent={positivePercentage}>{positivePercentage}%</Span>
        </Item>
      </List>
    );
  }
}
