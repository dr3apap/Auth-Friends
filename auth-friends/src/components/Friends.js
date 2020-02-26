import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styles from "./friends.module.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = () => {
      axiosWithAuth()
        .get("/api/friends")
        .then(res => {
          console.log(res);

          setFriends(res.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    };
    getFriends();
  }, []);

  return (
    <div className={styles.container}>
      {friends.map(friend => (
        <div className={styles.parent} key={friend.id}>
          <h2>Name:{friend.name}</h2>
          <p>Age:{friend.age}</p>
          <p>E-mail:{friend.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Friends;
