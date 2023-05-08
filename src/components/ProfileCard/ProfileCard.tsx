import { SiCashapp } from 'react-icons/si';

import { Button } from 'components/Button';

import { Profile } from 'store/@types';

import { ButtonGroup, Card, CardContainer } from './components';

type ProfileCardProps = {
  profile: Profile;
  type?: 'full' | 'follow';
};

export function ProfileCard({ profile, type }: ProfileCardProps) {
  if (type === 'full') {
    return (
      <CardContainer>
        <Card imgSize="w-20 h-20" profile={profile} />

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
  if (type === 'follow') {
    return (
      <CardContainer>
        <Card imgSize="w-24 h-24" profile={profile} />

        <Button variant="accent">Seguir</Button>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <Card imgSize="w-20 h-20" profile={profile} />;
    </CardContainer>
  );
}
