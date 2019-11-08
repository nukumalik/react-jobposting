import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Store
import store from './redux/store'

// Component
import Navbar from './components/Navbar'

// Job Pages
import JobAdd from './pages/jobs/JobAdd'
import JobDetail from './pages/jobs/JobDetail'
import JobUpdate from './pages/jobs/JobUpdate'
import JobList from './pages/jobs/JobList'

// Company Pages
import CompanyAdd from './pages/companies/CompanyAdd'
import CompanyDetail from './pages/companies/CompanyDetail'
import CompanyUpdate from './pages/companies/CompanyUpdate'
import CompanyList from './pages/companies/CompanyList'

// User Pages
import Login from './pages/users/Login'
import Register from './pages/users/Register'

function App() {
  return (
    <div className="bg-light pt-5" style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path="/" component={JobList} exact />
            <Route path="/jobs/add" component={JobAdd} exact />
            <Route path="/jobs/edit/:id" component={JobUpdate} />
            <Route path="/jobs/:id" component={JobDetail} />
            <Route path="/users/login" component={Login} exact />
            <Route path="/users/register" component={Register} exact />
            <Route path="/companies" component={CompanyList} exact />
            <Route path="/companies/add" component={CompanyAdd} exact />
            <Route path="/companies/edit/:id" component={CompanyUpdate} />
            <Route path="/companies/:id" component={CompanyDetail} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
