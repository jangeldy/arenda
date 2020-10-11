import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: -15px;
  padding: 0 10px;
`;

const ChartItem = styled.div`
  width: 2%;
  margin-right: 1px;
  background-color: ${(props) => props.primaryColor};
  opacity: ${(props) => (props.active ? 0.7 : 0.2)};
`;
const chartData = [
  0,
  4,
  3,
  7,
  20,
  31,
  64,
  47,
  41,
  20,
  15,
  13,
  6,
  10,
  4,
  2,
  3,
  1,
  1,
  3,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
];

function PriceChart({ data = chartData, priceFrom, priceTo }) {
  const { palette } = useTheme();
  return (
    <Wrapper>
      {data.map((item, index) => (
        <ChartItem
          primaryColor={palette.primary.main}
          active={priceFrom <= index * 10000 && index * 10000 <= priceTo}
          style={{ height: item }}
        />
      ))}
    </Wrapper>
  );
}

export default PriceChart;
