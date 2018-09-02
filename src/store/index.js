import { createStore , compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import { createLogger } from 'redux-logger';

const middleWare = [];

middleWare.push(thunk)

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',

});

middleWare.push(loggerMiddleware)

const store = createStore(
    Reducers,
    {},
    compose(
        applyMiddleware(...middleWare)
    )
)

export default store