import React, { useMemo } from 'react';
import { LineChart } from 'react-native-chart-kit';

import theme from 'src/style/theme';

import { getRandomNumber } from '@utils/generator';

import { Container } from './styles';

interface IProps {
  open: number;
  close: number;
  width: number;
  height: number;
}

const WHITE = theme.colors.pureWhite;

const Chart: React.FC<IProps> = ({ open, close, width, height }) => {
  const data = useMemo(() => 
    [open, ...(new Array(13).fill(0).map(() => getRandomNumber(Math.min(open, close) - 10, Math.max(open, close) + 10, 2))), close],
    [open, close])
  const color = useMemo(() => theme.colors[close > open ? 'secondarySolid' : 'lightCoral'], 
    [open, close]);
  
  return (
    <Container>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data
            }
          ]
        }}
        width={width} // from react-native
        height={height}
        yAxisInterval={1} // optional, defaults to 1

        withHorizontalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        chartConfig={{
          height: height - 10,
          width,
          backgroundColor: WHITE,
          backgroundGradientFrom: WHITE,
          backgroundGradientTo: WHITE,
          decimalPlaces: 2, // optional, defaults to 2dp
          fillShadowGradientFrom: WHITE,
          fillShadowGradientTo: WHITE,
          color: (opacity = 1) => color,
          labelColor: (opacity = 1) => color,
          style: {
            borderRadius: 4,
          },
          propsForBackgroundLines:{
            stroke: WHITE
          },
        }}
        withDots={false}
        bezier
        style={{
          borderRadius: 4,
          paddingRight: 0,
          margin: 0,
          padding: 0
        }}
      />
    </Container>
  );
}

export default Chart;