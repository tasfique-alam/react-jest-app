import React from 'react';
import { Provider } from "react-redux";
import { store } from '@/redux/store';
import { ReduxService } from '@/components/layouts/ReduxService';
import { Routes } from '@/routes';

interface AppProps {

}

const App: React.FC<AppProps> = () => (
  <>
    <Provider store={store}>
      <ReduxService>
        <Routes />
      </ReduxService>
    </Provider>
  </>
);

export default App;
