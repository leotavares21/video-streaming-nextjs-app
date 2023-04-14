import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'store/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
