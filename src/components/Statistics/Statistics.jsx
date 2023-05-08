import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsLi, StatisticsUl } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsUl>
      <StatisticsLi>
        <p>Good: {good}</p>
      </StatisticsLi>
      <StatisticsLi>
        <p>Neutral: {neutral}</p>
      </StatisticsLi>
      <StatisticsLi>
        <p>Bad: {bad}</p>
      </StatisticsLi>
      <StatisticsLi>
        <p>Total: {total}</p>
      </StatisticsLi>
      <StatisticsLi>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatisticsLi>
    </StatisticsUl>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;