import { useState } from 'react';

export function useTabClick() {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(tab: number) {
    setActiveTab(tab);
  }

  return {
    activeTab,
    handleTabClick
  };
}
