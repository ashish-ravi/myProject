import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import fire from "../../fire";
import NavBar from "../../component/navbar";
import {useDispatch, useSelector} from "react-redux";



const CodeCollab = () => {
    
    const counter = useSelector((state)=>state.counter)

    const[code,setCode] = useState("");

    useEffect(() => {
        readFromDatabase();
    }, []);
    
    const readFromDatabase = () => {
        fire.database().ref("/code").on("value",(snapshot)=>{
            setCode(snapshot.val().value)
            console.log(snapshot.val());
        });
    };


    const onChange = (val) => {
        console.log(val);
        fire.database().ref("/code").set({
            value: val,
            lang: "javascript",
        });
    };
    return(
        <>
        <NavBar />
        <p>{counter}</p>
        <div style={styles.root}>
            <h2>Code Collab</h2>
            <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                value={code}
                editorProps={{ $blockScrolling: true }}
            />
        </div>
        </>
    );
};

const styles = {
    root:{
        marginTop: 80,
        display: "flex",
        flexDirection: "column",
        flex:1,
        alignItems: "center",
    }
}

export default CodeCollab;