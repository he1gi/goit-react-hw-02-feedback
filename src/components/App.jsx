import React, { Component } from 'react';

import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

import { MAIN_WRAPPER } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const targetName = evt.target.name;

    this.setState(prevState => ({
      [targetName]: prevState[targetName] + 1,
    }));
  };

  countTotalFeedback() {
    const total = Object.values(this.state);
    return total.reduce((previousValue, num) => previousValue + num, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const feedBacks = this.countTotalFeedback();
    if (!feedBacks) {
      return 0;
    }
    return Number(((good / feedBacks) * 100).toFixed(2));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <MAIN_WRAPPER>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positive}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </MAIN_WRAPPER>
      </>
    );
  }
}
