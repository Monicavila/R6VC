import React from "react";
import { v1 as uuid } from "uuid";
import './landing.scss'

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div className={styles.Landing_page}>
      <div className={styles.App}>
        <div className={styles.left_side}>
          <div className={styles.logo}></div>
          <div className={styles.startmeeting}></div>
        </div>

        <div className={styles.center_up}></div>
        <div className={styles.center_down}>
          <div className={styles.slider}></div>
        </div>
        <div className={styles.right_side}></div>
      </div>
      <button onClick={create}>Create room</button>
    </div>
        
    );
};

export default CreateRoom;