import { useTabClick } from 'hooks/useTabClick';

import { Tab } from 'components/Tab';

import { useUserStore } from 'store';

import { ProfileTab } from './components/ProfileTab';
import { VideosTab } from './components/VideosTab';

export function SettingsPageContent() {
  const {
    state: { user }
  } = useUserStore();

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
