import { Component } from 'react';
import PropTypes from 'prop-types';
export class Statistics extends Component {
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
      <>
        <ul>
          <li>Good: {good}</li>
          <li>Neatural: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total ?? 0}</li>
          <li>Positive feedback: {positivePercentage ?? 0}%</li>
        </ul>
      </>
    );
  }
}
