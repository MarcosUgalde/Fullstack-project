import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './context/Provider'
import Register from './pages/Register'
import Login from './pages/Login'
import { Switch, Route, Redirect, Link, useRoute } from 'wouter'
import Mainmenu from './pages/Mainmenu'
import Createworkout from './pages/Createworkout'
import Guard from './components/Guard'
import Allworkouts from './pages/Allworkouts'
import Oneworkout from './pages/Oneworkout'

const CustomLink = ({ href, children }) => {
  const [isActive] = useRoute(href)

  return (
    <Link {...{ href }}>
      <a {...{ href }}>{children}</a>
    </Link>
  )
}

const Main = () => {
  return (
    <Provider>
      <nav>
        <CustomLink href='/'>Menu</CustomLink>
        <CustomLink href='/workouts'>Workouts</CustomLink>
      </nav>
      
      <Switch>
        <Route path='/signup' component={Register} />
        <Route path='/login' component={Login}/>
        <Route path='/'>  
          <Guard component={Mainmenu} />
        </Route>
        <Route path='/new-workout' component={Createworkout} />
        <Route path='/workouts' component={Allworkouts} />
        <Route path='/workout/:id' component={Oneworkout} />
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
