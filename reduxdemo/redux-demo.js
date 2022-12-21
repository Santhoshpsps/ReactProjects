const redux = require('redux');

const reducerFn = (state={counter:0},action)=>{
    return {
        counter: state.counter+1
    }
}

const store = redux.legacy_createStore(reducerFn);
console.log(store.getState())

const counterSubscriber=()=>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});