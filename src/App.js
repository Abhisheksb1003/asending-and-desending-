import React, { useState, useCallback } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascendingOrder, setAscendingOrder] = useState(true);
  const [listItems] = useState([5, 3, 1, 10, 9]);

  const toggleOrderHandler = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder);
    setListTitle((prevTitle) => (prevTitle === 'My List' ? 'New Title' : 'My List'));
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} ascendingOrder={ascendingOrder} />
      <Button onClick={toggleOrderHandler}>
        {ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order'}
      </Button>
    </div>
  );
}

export default App;
