import React from 'react';
import { ItemWrapper } from './statItemStyle';

const StatisticItem = ({ stat }) => {
  return (
    <ItemWrapper key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </ItemWrapper>
  );
};

export default StatisticItem;
