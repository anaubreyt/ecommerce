import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function Order(props) {
    const { item }  = props;
  return (
    <div className='item'>
        <img src = {'./img/' + item.img}/>
        <h2>{item.title}</h2>
        <b>{item.price}₾</b>
        <FaTrash className = 'delete-icon' onClick = {() => props.onDelete(item.id)}/>
    </div>
  )
}
