
npm install --save redux-devtools-extension

import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [] //put your middleware over here

export const store = createStore(Reducer,composeWithDevTools(
    applyMiddleware(...middlewares))
);