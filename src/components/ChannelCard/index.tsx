import { SiCashapp } from 'react-icons/si';

import Button from 'components/Button';

import { Channel } from 'store/types';

import { Card, CardContainer, ButtonGroup } from './ChannelCardComponents';

type ChannelCardProps = {
  channel: Channel;
  type?: 'full' | 'subscribe';
};

export default function ChannelCard({ channel, type }: ChannelCardProps) {
  if (type === 'full') {
    return (
      <CardContainer>
        <Card imgSize="w-20 h-20" channel={channel} />

        <ButtonGroup>
          <Button variant="gray">
            <SiCashapp className="text-xl" />
            <span>Apoiar</span>
          </Button>
          <Button variant="accent">Seguir</Button>
        </ButtonGroup>
      </CardContainer>
    );
  }
  if (type === 'subscribe') {
    return (
      <CardContainer>
        <Card imgSize="w-24 h-24" channel={channel} />

        <Button variant="accent">Inscrever-se</Button>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <Card imgSize="w-20 h-20" channel={channel} />;
    </CardContainer>
  );
}
