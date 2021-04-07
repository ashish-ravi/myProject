import React, {useEffect, useState} from "react";
import CommCard from "../../component/MyCard/comcard";
import {Grid} from "@material-ui/core";

const Users = () => {

    const [friends, setFriends] = useState([]);

    useEffect( () => {
        fetch("https://randomuser.me/api/?results=25")
            .then(response => response.json())
            .then(data => setFriends(data.results));
    }, [] );
    console.log(friends);

   return(
            <>
                <h1>Users</h1>
                <Grid container justify="center" spacing={2}>
                {
                    friends.map((friend, i) => {
                        return(
                                <Grid item key={i} spacing={2}>
                                <CommCard imageUrl={friend.picture.large} Title={ `${friend.name.first} ${friend.name.last} `} Description={friend.email}  />
                                </Grid>
                        )
                    } )
                }
                </Grid>

                
            </>
        
   );
};

export default Users;
