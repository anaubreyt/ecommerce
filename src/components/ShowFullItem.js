import React from 'react'

export default function ShowFullItem(props) {
    const { item } = props;
    return (
        <div className='full-item'>
            <div>
                <img 
                    src = {'./img/' + props.item.img}
                    onClick = {() => props.onShowItem(item)}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <b>{item.price}₾</b>
                <div className='add-to-card' onClick = {() => props.onAdd(item)}>+</div>
            </div>
        </div>
  )
}
