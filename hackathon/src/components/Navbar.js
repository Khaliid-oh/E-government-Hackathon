import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'react-router-dom/Link'




function Navbar() {
  return (
    <div>
    <AppBar sx={{height: '70px', background: '#193961'}}>
   <Toolbar className='nav-bar'> 
    <Button color='inherit' component={Link} to='/home'>HOME</Button>
    <Button color='inherit'component={Link} to='/login'>LOGIN</Button>
    <Button color='inherit'component={Link} to='/signup'>SIGNUP</Button>
   </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar