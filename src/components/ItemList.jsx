import React from 'react'
import Item from './Item'
import styles from './ItemList.module.css'

function ItemList({items}) {
  return (
    <ul className={styles.items}>
        {
            items.sort((a,b) => b.id - a.id).map((item) => (
                <Item 
                key={item.id}
                item={item}
                />
            ))
        }

    </ul>
  )
}

export default ItemList