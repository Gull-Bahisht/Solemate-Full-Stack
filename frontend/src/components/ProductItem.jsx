import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer p-2' to={`/product/${id}`}>
        <div className='overflow-hidden  bg-gray-100 rounded-lg'>
            <img className='w-full aspect-square object-cover hover:scale-105 transition ease-out' src={image[0]} alt=""/>

        </div>
        <p className='pt-3 text-sm '>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
