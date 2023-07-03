import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './context/Provider'
import Register from './pages/Register'
import Login from './pages/Login'
import { Switch, Route, Redirect } from 'wouter'
import Mainmenu from './pages/Mainmenu'
import Guard from './components/Guard'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/signup' component={Register} />
        <Route path='/login' component={Login}/>
        <Route path='/'>  
          <Guard component={Mainmenu} />
        </Route>
        <Redirect to='/login' />
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
