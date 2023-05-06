import { connect } from 'react-redux';

import { useTabClick } from 'hooks/useTabClick';

import { Tab } from 'components/Tab';

import { PagesMapState, User } from 'store/types';

import { ProfileTab } from './components/ProfileTab';
import { VideosTab } from './components/VideosTab';

type SettingsPageProps = {
  user: User;
};

function SettingsPage({ user }: SettingsPageProps) {
  const { activeTab, handleTabClick } = useTabClick();

  return (
    <div className="flex flex-col">
      <h1 className="flex lg:justify-start justify-center">Configuração</h1>
      <div className="flex lg:justify-start justify-center mb-4">
        <Tab
          handleTab={() => handleTabClick(1)}
          tabNumber={1}
          activeTab={activeTab}
        >
          Perfil
        </Tab>
        <Tab
          handleTab={() => handleTabClick(2)}
          tabNumber={2}
          activeTab={activeTab}
        >
          Videos
        </Tab>
      </div>

      {activeTab === 1 && <ProfileTab user={user} />}

      {activeTab === 2 && <VideosTab user={user} />}
    </div>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  user: state.user.data
});

const SettingsPageContent = connect(mapStateToProps)(SettingsPage);

export { SettingsPageContent };
