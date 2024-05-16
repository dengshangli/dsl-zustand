import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';

type InitStateFn = (state: any) => void;
type Listener = (
  state: Record<string, any>,
  prevState: Record<string, any>
) => void;

const createStore = <T>(initStateFn: InitStateFn) => {
  let state: any = {};
  const listeners: Set<Listener> = new Set();

  const setState = (nextState: T) => {
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = { ...state, ...nextState } as T;
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  state = initStateFn(setState);
  const initialState = state as T;

  return {
    getState: () => state,
    setState,
    getInitialState: () => initialState,
    subscribe: (listener: Listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    destroy: () => {
      listeners.clear()
    },
  };
};

const useStore = (store: any, selector?: any) => {
  const slice = useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getState,
    store.getInitialState,
    selector
  );
  return slice;
};

export const create = <T>(initStateFn: InitStateFn) => {
  const store = createStore<T>(initStateFn);

  const useBoundStore: any = (selector?: any) => useStore(store, selector);

  return useBoundStore;
};

