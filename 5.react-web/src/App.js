import logo from './logo.svg';
import './App.css';
import AppProvider from './LayerAndProvider';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import NAVIGATION from './LayerAndProvider/navigation';
import SignIn from './components/signIn';
import { useState } from 'react';
import { AppContext, Provider } from './storage/context';
import { useContext } from 'react';
import {doTicketLogin} from './action/auth'
function App() {
  const [{auth:{isAuth}}, dispatch] = useContext(AppContext)
  const [intervalId, setintervalId] = useState(null)

  const clearUser = () => {
    clearInterval(intervalId)
    dispatch({type: 'DELETE_USER'});
    setintervalId(null)
  }
  const onSignInSuccess = (info) => {
    dispatch({type: 'SAVE_USER', payload: info})
  }


  return <div>
    {
        (isAuth === false) ? <SignIn onSuccess={onSignInSuccess}/> :<AppProvider/>
    }
  </div>
}

export default App;
