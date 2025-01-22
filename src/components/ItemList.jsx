import React from 'react'
import Item from './Item'
import styles from './ItemList.module.css'

function ItemList({items , deletePackingItem, updateCompletedStatus}) {
  return (
    <ul className={styles.tasks}>
        {
            items.sort((a,b) => b.id - a.id).map((item) => (
                <Item 
                key={item.id}
                item={item}
                deletePackingItem={deletePackingItem}
                updateCompletedStatus={updateCompletedStatus}
                />
            ))
        }

    </ul>
  )
}

export default ItemList