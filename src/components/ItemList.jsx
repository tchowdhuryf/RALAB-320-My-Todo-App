import React from 'react'
import Item from './Item'
import styles from './ItemList.module.css'

function ItemList({items , deletePackingItem, updatePackedStatus}) {
  return (
    <ul className={styles.tasks}>
        {
            items.sort((a,b) => b.id - a.id).map((item) => (
                <Item 
                key={item.id}
                item={item}
                deletePackingItem={deletePackingItem}
                updatePackedStatus={updatePackedStatus}
                />
            ))
        }

    </ul>
  )
}

export default ItemList