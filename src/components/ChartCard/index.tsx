import React, { useMemo } from 'react';

import { TFundType } from '@interfaces/Server';

import Chart from '@components/Chart';

import Up from '@assets/icons/Up.svg';
import Down from '@assets/icons/Down.svg';
import Wind from '@assets/icons/Wind.svg';
import Sun from '@assets/icons/Sun.svg';
import Nature from '@assets/icons/Nature.svg';

import { Container, Title, BottomInfo, BottomPercent, BottomValue } from './styles';
import { PrivateSSP } from '@interfaces/screen';

interface IProps {
  type: TFundType;
  id: string;
  totalOpen: string;
  totalClose: string;
  percent: number;
  navigation: PrivateSSP<'Home'>['navigation'];
}

const ChartCard: React.FC<IProps> = ({
  type,
  totalOpen,
  totalClose,
  percent,
  navigation,
  id
}) => {
  const Icon = useMemo(() => {
    switch(type) {
      case 'Nature':
        return Nature;
      case 'Solar':
        return Sun;
      default:
        return Wind;
    }
  }, [type]);

  return (
    <Container onPress={navigation.navigate.bind(null, 'FundDetails', { id })}>
      <Icon width={16} height={16}/>
      <Title>
        {`${type} Fund`}
      </Title>
      <Chart
        open={parseFloat(totalOpen.replace(',', ''))}
        close={parseFloat(totalClose.replace(',', ''))}
        width={80}
        height={40}
      />
      <BottomInfo>
        <BottomValue>
          ${totalClose}
        </BottomValue>
        {
          percent > 0 ? (
            <Up width={14} height={14}/>
          ) : (
            <Down width={14} height={14}/>
          )
        }
        <BottomPercent isNegative={percent <= 0}>
          {Math.abs(percent).toFixed(2)}%
        </BottomPercent>
      </BottomInfo>
    </Container>
  );
}

export default ChartCard;