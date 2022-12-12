import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import userMiddleware from '../middlewares/userMiddleware';
import annoucementsMiddleware from '../middlewares/annoucementsMiddleware';
import categoriesMiddleware from '../middlewares/categoriesMiddleware';

// import nameMiddleware from '../middlewares/nameMiddleware

const middlewareEnhancer = applyMiddleware(
  // nameMiddleware,
  userMiddleware,
  annoucementsMiddleware,
  categoriesMiddleware,
);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  reducer,
  composedEnhancers,
);

export default store;
