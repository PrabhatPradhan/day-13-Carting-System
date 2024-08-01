import React, { useReducer } from 'react';
import Products from './Products';

// Reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state.map((item, index) =>
        index === action.index ? { ...item, count: item.count + 1 } : item
      );
    case 'DECREASE':
      return state.map((item, index) =>
        index === action.index && item.count > 0 ? { ...item, count: item.count - 1 } : item
      );
    default:
      throw new Error('Unknown action type');
  }
};

const initialData = [
  { name: 'product1', price: 100, count: 2 },
  { name: 'product2', price: 200, count: 3 },
  { name: 'product3', price: 300, count: 2 },
  { name: 'product4', price: 400, count: 3 },
  { name: 'product5', price: 500, count: 2 }
];

function Card() {
  const [data, dispatch] = useReducer(cartReducer, initialData);

  const increase = (index) => {
    dispatch({ type: 'INCREASE', index });
  };

  const decrease = (index) => {
    dispatch({ type: 'DECREASE', index });
  };

  const totalCount = data.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = data.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className='flex justify-center items-center h-screen gap-10'>
      <div className='flex flex-col border-4 border-gray-400 rounded-md w-[500px]'>
        <span className='text-center font-bold text-[24px] m-3'>Products</span>
        {data.map((item, index) => (
          <div className='m-2 p-4 bg-red-500 rounded-md shadow-xl flex justify-between items-center' key={index}>
            <h1 className='text-white font-bold'>{item.name}</h1>
            <span className='text-white font-bold'>{item.price}</span>
            <div className='flex justify-between items-center px-3'>
              <button onClick={() => increase(index)} className='text-white font-bold text-[20px] bg-green-500 rounded-2xl px-3'>+</button>
              <span className='text-white font-bold text-[21px] px-3'>{item.count}</span>
              <button onClick={() => decrease(index)} className='text-white font-bold px-3 text-[20px] bg-green-500 rounded-2xl'>-</button>
            </div>
          </div>
        ))}
      </div>
      <Products data={data} totalCount={totalCount} totalPrice={totalPrice} />
    </div>
  );
}

export default Card;
