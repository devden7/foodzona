'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, store } from './store';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  const persistor = persistStore(storeRef.current);
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
