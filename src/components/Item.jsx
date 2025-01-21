import React from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (<li className={styles.item}>
    <div className={styles["item-group"]}>
    <input 
    type="checkbox" 
    />
    {item.name}
    </div>
    </li> )
};

export default Item;
