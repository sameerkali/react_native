import React from 'react';
import Home from './Home';
import {store} from './Redux/Store/store.ts';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  );
}

export default App;
