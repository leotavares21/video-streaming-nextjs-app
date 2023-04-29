import { handleTextColor, handleCircleVisibility } from './utils';

type TabProps = {
  children: React.ReactNode;
  activeTab: number;
  tabNumber: number;
  handleTab: () => void;
};

export function Tab({ children, activeTab, tabNumber, handleTab }: TabProps) {
  return (
    <button
      onClick={handleTab}
      className={`flex items-center gap-2 text-xl py-2 pr-4 hover:brightness-90 
      ${handleTextColor(activeTab, tabNumber)}`}
      data-testid={`tab-button${tabNumber}`}
      role="menu"
    >
      <div
        className={`w-1.5 h-1.5 rounded-full bg-primary 
        ${handleCircleVisibility(activeTab, tabNumber)}`}
      />
      {children}
    </button>
  );
}
