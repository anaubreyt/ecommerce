import React from 'react'

export default function Item(props) {
  const { item } = props;
  return (
    <div className='item'>
        <img 
          src = {'./img/' + props.item.img}
          onClick = {() => props.onShowItem(item)}
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <b>{item.price}₾</b>
        <div className='add-to-card' onClick = {() => props.onAdd(item)}>+</div>
    </div>
  )
}
