import React, { useState } from 'react'

export default function Categories(props) {
    const [categories, setCatigories] = useState([
        {
            id: '1',
            key: 'all',
            name: 'Всё',
        },
        {
            id: '2',
            key: 'wardrobes',
            name: 'Шкафы',
        },
        {
            id: '3',
            key: 'tables',
            name: 'Столы',
        },
        {
            id: '4',
            key: 'beds',
            name: 'Кровати',
        },
        {
            id: '5',
            key: 'chairs',
            name: 'Стулья',
        },
        {
            id: '6',
            key: 'sofas',
            name: 'Диваны',
        },
        {
            id: '7',
            key: 'armchair',
            name: 'Кресла',
        }
    ])
  return (
    <div className='categories'>
        {categories.map((category) => (
            <div key = {category.id} onClick = {() => props.chooseCategory(category.key)}>{category.name}</div>
        ))}
    </div>
  );
}
