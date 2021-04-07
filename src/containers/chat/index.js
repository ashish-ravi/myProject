import React, { useState, useEffect, useRef } from "react";
import { Grid,TextField,Button,IconButton } from "@material-ui/core";
import fire from "../../fire";
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import NavBar from "../../component/navbar";
import Background from "../../hello.png";

const Chat = () => {
    
    const [message,setMessage] = useState("");
    const [revMessages,setRevMessages]= useState([]);
    const[name , setName] = useState("");
    

    const handleChange = (e) => {
        // console.log(e.target.value);
        let val = e.target.value;
        setMessage(val);
       
        
    }
    const messageEl = useRef(null);
    useEffect(() => {
        if (messageEl) {
          messageEl.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])

    // useEffect( () => {
    //     readMessageFromDatabase();
    // } , [] )


    useEffect(() => {
        readMessageFromDatabase();
        const list = (event) => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            handleClick();
            readMessageFromDatabase();

          }
        };
        document.addEventListener("keydown", list);
        return () => {
          document.removeEventListener("keydown", list);
        };
        
      }, []);



    const handleClick = () => {
        fire.database().ref("/chat").push({
            message: message,
            user: name,
        
        });
        //if we use set instead of push, /chat can contain only one value, we use push becuase /chat can store multiple values
        // alert(message);
        
        setMessage("");

          
        
        
        

    }

  

    const readMessageFromDatabase = () => {
        fire.database().ref("/chat").on("value", (snapshot) => {
            
            const messagesArray = [];
            const messagesObject = snapshot.val();
            for( let key in messagesObject){
                // console.log(messagesObject[key]);
                messagesArray.push(messagesObject[key]);
            }
            setRevMessages(messagesArray);
            // console.log(snapshot.val());
        } );
    };

    //Refer docs from firebase realtime database docs
    //This function has to be used only once. to call it multiple times use: useEffect

   
  
     const myFunction = () => {
        const person = prompt("Please enter your name: ","Ashish");
        if(person != null){
            setName(person)
        }
        else{
            setName("Ashish")
        }    
    }
    

    console.log("messages",revMessages);
    return(
        <div style={{backgroundImage: `url(${Background})` , backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"right top" }}>
        <NavBar />
        <br />
         <center><button onClick={myFunction}>Click here to Set name!</button></center>
            <div style={styles.content}>
                <Grid container justify="center" style={styles.chatContainer}>
                    <Grid item xs={5} style={{ border: "2px solid rgba(0,0,0,0.2)", backgroundColor:"#CCCC00", color:"black"}} >
                        <p>VApp</p>
                        <br/>
                        
                        <Grid container >
                            <Grid item xs={12} style={{backgroundColor:"white", color:"black", padding:20, border: "1px solid rgba(0,0,0,0.1)" }} >
                            <FaceTwoToneIcon fontSize="large" color="secondary" />&nbsp;&nbsp;&nbsp;<b style={{fontSize:"25px"}}>  Coconut</b>
                               <br/>
                               
                            </Grid>

                        </Grid>
                        <Grid container style={{height:"50vh", overflow:"auto", backgroundColor:"white", color:"black" }} ref={messageEl}>
                            <Grid item xs={12} ref={messageEl}>
                                {/* <p>Hi</p>
                                <p>Hello</p>
                                <p>Hey</p>
                                <p>Bye</p> */
                                    revMessages.map((msg,i) => {
                                        return(
                                            <span spacing="9">
                                            <span style={{fontSize:"12px",fontFamily:"cursive", color:"red" }}>{msg.user}</span><br/>
                                            <span key={i} >
                                                <span style={{color:"red"}}>|</span> {msg.message} <br/><br/>
                                            </span></span>
                                        );
                                    } )
                                }

                                
                            </Grid>
                        </Grid>
                        <Grid container justify="center" alignItems="center" spacing= "4" style={{ padding:15 }} >
                            <Grid item xs={11}>
                                <TextField fullWidth style={{ width:"100%"}}  id="standard-basic" label="Enter Message" variant="outlined" onChange={handleChange} value= {message} borderRadius="50%" margin="none" style={{backgroundColor:""}} />
                            </Grid>
                            <Grid item xs={1}>
                               <IconButton variant="outlined" color="primary" size="large" onClick={handleClick}  >  <SendIcon /></IconButton>
                            </Grid>
                        </Grid>

                    </Grid>
                    
                </Grid>
                
              
            </div>
        </div>
    );
};

const styles = {
    content: {
        minHeight: "140vh",
        marginTop: 80,
    },
    chatContainer: {
        height: "60vh",
    }
};

const sty = theme => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });
export default Chat;