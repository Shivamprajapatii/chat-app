import React from 'react'
import { Box, Dialog, Typography, List, ListItem,} from '@mui/material'
import { qrCodeImage } from '../../constants/data'
import {GoogleLogin} from "@react-oauth/google"
import { jwtDecode } from "jwt-decode";


const dialogBoxStyle = {
  height: '96%',
  marginTop: '12%',
  width: '70%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
}

// Main Box Styling  
let mainBoxStyle = {
  display : 'flex',
}
// Left Box Style
let leftBoxStyle = {
    padding : '56px 0 56px 56px'
}


// typorgaphy or p tag style
let typoStyle = {
  marginBottom : '25px',
  fontSize : '26px',
  color : '#525252',
  fontFamily : 'inherit'
}
// list item Style 
let lsitItemsStyle = {
  padding : "0",
  margin : "15px",
  fontSize : "18px",
  lineHeight : "28px",
  color : "#4A4A4A",
}

// Right Side Container 
let RightContainerStyle = {
  position : "relative",
}

// QR code Image Style
let qrCodeStyle = {
  height : '264',
  with : '264',
  margin : '50px 0 0 50px'
}

let gooleLoginStyle = {
  position : "absolute",
  top : "50%",
  transform : "translateX(30%)"
}

function LoginBox() {
  const onLoginSucces = (res) => {
    const decode = jwtDecode(res.credential);
    console.log(decode);
  }

  const onLoginError = (res) => {
    console.log("login Fiald",res);
  }

  return (
    <Dialog className="dialogBoxStyle" open={true} PaperProps={{ sx: dialogBoxStyle }} hideBackdrop ={true}>

      <Box className = 'Main-container' style = {mainBoxStyle}>

        <Box className="left-conainer" style = {leftBoxStyle}>
          <Typography style={typoStyle}>Use WhatsApp on your computer</Typography>
          <List className='list-items' style={lsitItemsStyle}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap <b> Menu </b> on Android, or  on iPhone </ListItem>
            <ListItem>3. Tap Linked device and then Link a device</ListItem>
            <ListItem>4. Point your phone at this screen to capture the QR code </ListItem>
          </List>
        </Box>

        <Box className ="Right-container" style = {RightContainerStyle}>
          <img style = {qrCodeStyle} src={qrCodeImage} alt="QR Code" />
          <Box style={gooleLoginStyle}>
             <GoogleLogin onSuccess={onLoginSucces} onError={onLoginError}/>
          </Box>
        </Box>

      </Box>
      
    </Dialog>
  )
}

export default LoginBox