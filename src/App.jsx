import { Fragment } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}

export default App
