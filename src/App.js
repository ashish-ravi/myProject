import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import fire from "./fire";
import Chat from "./containers/chat";
import { TextField,Grid } from "@material-ui/core";
import NavBar from "./component/navbar";
import {useDispatch, useSelector} from "react-redux";
import MyCard from "./component/MyCard";
import MyCard2 from "./component/MyCard/app";
import { increment, decrement } from "./redux/actions";
import {Link } from "react-router-dom";
import img from "./codecolab1.gif";
import chtimg from "./chatapp1.gif";


function App() {
 
  const counter = useSelector((state)=>state.counter)
  // console.log(counter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(10));
  }

  const handleDecrement = () => {
    dispatch(decrement(5));
  }



  return (
    <div >
      <NavBar />      
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <Link to={"/user"}><button>Network call</button></Link>

      <h1 style={{marginTop: 30, textAlign: "center"}}>My Home Page</h1><br />
      <div style={styles.content}>
        <Grid container justify="left">
          <Grid item xs={3}>
            <MyCard />
          </Grid>
        
          <Grid item xs={3}>
            <MyCard2 imageUrl={img} Title={"Code Collab"} Description={"A Real time codecollaborator. Multiple users can test and run code in real-time collaborative environment"} />
          </Grid>

          
          
        </Grid>
      </div>
    </div>
  );
}

const styles = {
  content: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    marginTop: 30,
    padding: 0,
    marginLeft: 30
  }
}

export default App;
