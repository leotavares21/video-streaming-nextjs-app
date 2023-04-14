import React from 'react';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const initialState = {
  tab: {
    activeTab: 1
  }
};

const store = mockStore(initialState);

import HomePage from 'pages';

describe('HomePage', () => {
  it('should render at least one video in container', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const container = screen.getByTestId('videos-container');
    expect(container.children.length).toBeGreaterThan(0);
  });
});
