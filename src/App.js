import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';



function App() {
  let [orders, setOrders] = useState([]);
  const [items, setItems] = useState([
    {
      id: 1,      
      title: 'Шкаф гардеробный',
      img: 'wardrobe.jpeg',
      description: 'Просторный шкаф для хранения одежды',
      category: 'wardrobes',
      price: '2499',
    },
    {
      id: 2,
      title: 'Стол дубовый',
      img: 'oak-table.jpeg',
      description: 'Прочный и стильный обеденный стол из дуба',
      category: 'tables',
      price: '2999',
    },
    {
      id: 3,
      title: 'Кровать двуспальная',
      img: 'double-bed.jpeg',
      description: 'Удобная двуспальная кровать с ортопедическим матрасом',
      category: 'beds',
      price: '1799',      
    },
    {
      id: 4,
      title: 'Стул серый',
      img: 'gray-chair.jpeg',
      description: 'Удобный и мягкий стул для обеденного стола',
      category: 'chairs',
      price: '1299',
    },
    {
      id: 5,
      title: 'Диван угловой',
      img: 'corner-sofa.jpeg',
      description: 'Уютный угловой диван для гостиной',
      category: 'sofas',
      price: '3999',
    },
    {
      id: 6,
      title: 'Мягкое кресло',
      img: 'gray-armchair.jpeg',
      description: 'Мягкое и крепкое кресло для отдыха',
      category: 'armchair',
      price: '2999',
    }
  ]);
  let [currentItems, setCurrentItems] = useState([...items]);
  let [showFullItem, setShowFullItem] = useState(false);
  let [fullItem, setFullItem] = useState({});

  const addToOrder = (item) => {
    if (!orders.includes(item)) {
      setOrders([...orders, item]);
    }

  }

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  }

  const handlerShowFullItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
    console.log(fullItem);
  }
  
  const chooseCategory = (category) => {
    console.log(category);
    if (category && category !== 'all') {
      setCurrentItems(items.filter(item => item.category === category))
    } else if (!category || category === 'all') {
      setCurrentItems([...items]);
    }
  }

  return (
   <div className='wrapper'>
    <Header orders = {orders} onDelete = {deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items onShowItem = {handlerShowFullItem} items = {currentItems} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem onAdd={addToOrder}  onShowItem = {handlerShowFullItem} item = {fullItem}/>}
    <Footer />
   </div>
  );
}

export default App;
