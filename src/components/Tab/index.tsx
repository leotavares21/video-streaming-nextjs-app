import { handleIfTabIsActive } from './utils';

type TabProps = {
  children: React.ReactNode;
  activeTab: number;
  tabNumber: number;
  handleTab: () => void;
};

export default function Tab({
  children,
  activeTab,
  tabNumber,
  handleTab
}: TabProps) {
  return (
    <button
      onClick={handleTab}
      className={`flex items-center gap-2 text-xl py-2 pr-4 hover:brightness-90 ${
        handleIfTabIsActive(activeTab, tabNumber)
          ? 'text-primary'
          : 'text-gray-200'
      }`}
      data-testid={`tab-button${tabNumber}`}
      role="menu"
    >
      <div
        className={`w-1.5 h-1.5 rounded-full bg-primary ${
          handleIfTabIsActive(activeTab, tabNumber) ? 'opacity-1' : 'opacity-0'
        }`}
      />
      {children}
    </button>
  );
}
