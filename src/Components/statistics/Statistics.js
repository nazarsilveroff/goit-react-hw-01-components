import React from 'react';
import StatisticItem from './statisticItem/StatisticItem';
import { StatisticsWrapper } from './statStyle';

const Statistics = ({ statistics }) => {
  return (
    <StatisticsWrapper>
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statistics.map(stat => (
          <StatisticItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </StatisticsWrapper>
  );
};

export default Statistics;
