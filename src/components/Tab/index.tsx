import { connect } from 'react-redux';

import { Dispatch, bindActionCreators } from 'redux';

import * as tabActions from 'store/actions/tab';
import { PagesMapState } from 'store/types';

type TabProps = {
  children: React.ReactNode;
  tabNumber: number;
  activeTab: number;
  setCurrentTab: (tabNumber: number) => void;
};

function Tab({ children, tabNumber, activeTab, setCurrentTab }: TabProps) {
  return (
    <button
      onClick={() => setCurrentTab(tabNumber)}
      className={`flex items-center gap-2 text-xl py-2 pr-4 hover:brightness-90 ${
        activeTab === tabNumber ? 'text-secondary' : 'text-gray'
      }`}
      data-testid={`tab-button${tabNumber}`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full bg-secondary ${
          activeTab === tabNumber ? 'opacity-1' : 'opacity-0'
        }`}
      />
      <span>{children}</span>
    </button>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  activeTab: state.tab.activeTab
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(Object.assign({}, tabActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
