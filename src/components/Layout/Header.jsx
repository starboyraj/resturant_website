import React,{useState} from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, Divider } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
       <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1}}>
            <FastfoodIcon />
                My Resturant
                 </Typography>
            
             <ul className='mobile-navigation'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
             </ul>
            </Box>
        
    )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
         <Toolbar>
            <IconButton 
            color='inherit'
             aria-label='open drawer'
              edge='start'
               sx={{
                mr:2,
                display: {sm: "none"},
                }}
                onClick={handleDrawerToggle}
            >
             <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1}}>
            <FastfoodIcon />
                My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block"} }}>
             <ul className='navigation-menu'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
             </ul>
            </Box>
         </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer variant='temporary' open={mobileOpen}
               onClose={handleDrawerToggle}
               sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
                boxSizing: "border-box",
                width: "240px",
               },
             }}
             >
                {drawer}
              </Drawer>
            </Box>
            <Toolbar />
      </Box>
    </>
  )
}

export default Header;