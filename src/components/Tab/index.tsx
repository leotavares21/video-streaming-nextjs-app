type TabProps = {
  children: React.ReactNode;
  activeTab: number;
  tabNumber: number;
  handleTab: () => void;
};

function Tab({ children, activeTab, tabNumber, handleTab }: TabProps) {
  return (
    <button
      onClick={handleTab}
      className={`flex items-center gap-2 text-xl py-2 pr-4 hover:brightness-90 ${
        activeTab === tabNumber ? 'text-secondary' : 'text-gray-200'
      }`}
      data-testid={`tab-button${tabNumber}`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full bg-secondary ${
          activeTab === tabNumber ? 'opacity-1' : 'opacity-0'
        }`}
      />
      {children}
    </button>
  );
}

export default Tab;
