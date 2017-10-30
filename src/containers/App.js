import React from 'react'
import {Link, Router, Route} from '../utils'
import {About, Home} from '../components'
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap'

const App = () => (
  <div className='container'>
    <Router>
      <Navbar color='faded' light>
        <Link path='/' className='navbar-brand'>Home</Link>
        <Nav className='mr-auto' navbar>
          <NavItem className='active'>
            <Link path='/about' className='nav-link'>About</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Router>
  </div>
);

export default App;
