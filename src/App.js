import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/iceCreamContainer'
import HookCakeContainer from './components/HookCakeContainer';
import store from './redux/store';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer></UserContainer>
        {/* <ItemContainer cake />
        <ItemContainer iceCream />
        <HookCakeContainer></HookCakeContainer>
        <CakeContainer></CakeContainer>
        <HookIceCreamContainer></HookIceCreamContainer>
        <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer> */}
      </div>
    </Provider>
  );
}

export default App;
