import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
const createStore = (initStateFn) => {
    let state = {};
    const listeners = new Set();
    const setState = (nextState) => {
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = { ...state, ...nextState };
            listeners.forEach((listener) => listener(state, previousState));
        }
    };
    state = initStateFn(setState);
    const initialState = state;
    return {
        getState: () => state,
        setState,
        getInitialState: () => initialState,
        subscribe: (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
        destroy: () => {
            listeners.clear();
        },
    };
};
const useStore = (store, selector) => {
    const slice = useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, selector);
    return slice;
};
export const create = (initStateFn) => {
    const store = createStore(initStateFn);
    const useBoundStore = (selector) => useStore(store, selector);
    return useBoundStore;
};
