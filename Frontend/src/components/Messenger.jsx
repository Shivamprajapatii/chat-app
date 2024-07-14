import React from 'react'
import {AppBar, Toolbar, styled } from "@mui/material";

import LoginBox from './account/LoginBox';

// Top Header Part Style 
let headerStyle = {
  height: '200px',
  backgroundColor : '#00BFA5',
  boxShadow : 'none',
}

// Body Style 
let bodyStyle = {
   height : '100vh',
   backgroundColor :'#DCDCDC',
}

function Messenger() {
  return (
    <div className='body' style={bodyStyle}>
      <AppBar className='header' style={headerStyle}>
        <Toolbar>

        </Toolbar>
      </AppBar>

      <LoginBox />
    </div>
  )
}

export default Messenger;