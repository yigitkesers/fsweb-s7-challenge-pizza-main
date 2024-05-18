
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './components/header'
import HomePage from './components/homepage'
import { Route, Switch } from 'react-router-dom';

import Form from './components/form'
function App() {
  

  return (
    <>
    <Header />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/Form' exact>
                    <Form />
                </Route>
            </Switch>
    </>
  )
}

export default App
