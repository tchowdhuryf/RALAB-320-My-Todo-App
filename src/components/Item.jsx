import React, { useState } from "react";
import styles from "./Item.module.css";
import { CheckIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const Item = ({ item, deletePackingItem, updatePackedStatus}) => {
  const [isPacked, setIsPacked] = useState(item.packed);

  const handlePack = (e) => {
    setIsPacked(!isPacked);
    updatePackedStatus(item.id);
  };
  return (
    <li className={styles.item}>
      <div className={styles["item-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isPacked}
          name={item.name}
          id={item.id}
          onChange={handlePack}
        />
        <label htmlFor={item.id} className={styles.label}>
          {item.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>

        <div className={styles["item-group"]}>
          <button
            className="btn"
            onClick={() => editItem(item)}>
            <PencilSquareIcon width={24} height={24} />
          </button>
          <button
            className={`btn ${styles.delete}`}
            onClick={() => deletePackingItem(item.id)}>
            <TrashIcon width={24} height={24} />
          </button>
        </div>

      </div>
    </li>
  );
};

export default Item;
