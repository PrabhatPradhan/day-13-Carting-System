import React from 'react';

function Products({ data, totalCount, totalPrice }) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col border-4 border-gray-400 rounded-md w-[500px]'>
        <span className='text-center font-bold text-[24px] m-3'>Cart</span>
        <div className='m-2 p-4 bg-blue-500 rounded-md shadow-xl flex justify-between items-center'>
          <span className='text-white font-bold text-[21px]'>Total Count:</span>
          <span className='text-white font-bold text-[21px]'>{totalCount}</span>
        </div>
        <div className='m-2 p-4 bg-blue-500 rounded-md shadow-xl flex justify-between items-center'>
          <span className='text-white font-bold text-[25px]'>Total Price:</span>
          <span className='text-white font-bold text-[25px]'>$ {totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Products;
