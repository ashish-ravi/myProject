import React from "react";
import {AppBar,Toolbar,Typography, Button, IconButton, makeStyles } from '@material-ui/core';
import {Link } from "react-router-dom";





import MenuIcon from '@material-ui/icons/Menu';



const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                <IconButton edge="start" className={classes.space} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Menu
                </Typography>
                <Link to={"/"}>
                    <Button  color="secondary" size="large" className={classes.space}>
                        Home
                    </Button>
                </Link>
                <Button  color="secondary" size="large" className={classes.space}>
                    About
                </Button>
                <Link to={"/chat"}>
                    <Button color="secondary" size="large" className={classes.space}>
                        Chat
                    </Button>
                </Link>
                <Link to={"/codecollab"}>
                    <Button color="secondary" size="large" className={classes.space}>
                        CodeCollab
                    </Button>
                </Link>
               
                <Button color="secondary" size="large">Login</Button>
                </Toolbar>
            </AppBar>
         </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    space: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

  }));

export default NavBar;