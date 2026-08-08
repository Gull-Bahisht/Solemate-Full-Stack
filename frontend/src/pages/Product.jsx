import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size,setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])


  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-100 opacity-100'>

      {/* Main Product Section */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1'>
          <img
            src={productData.image[0]}
            className='w-full max-w-[500px] border border-gray-300'
            alt=''
          />
        </div>


        {/* Product Information */}
        <div className='flex-1'>

          <h1 className='font-medium text-2xl mt-2'>
            {productData.name}
          </h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.stardull} alt='' className='w-3 5'/>
            <img src={assets.stardull}  alt='' className='w-3 5'/>
            <img src={assets.stardull}  alt='' className='w-3 5'/>
            <img src={assets.stardull}  alt='' className='w-3 5'/>
            <img src={assets.star} alt='' className='w-3 5'/>
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>
          {/*  */}
          
          {/* <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 '>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-4 px-6 bg-gray-100 ${item === size ? 'border-pink-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div> */}
          {
  productData.sizes.length > 0 && (

    <div className='flex flex-col gap-4 my-8'>

      <p>Select Size</p>

      <div className='flex gap-2'>

        {productData.sizes.map((item,index)=>(

          <button
            onClick={()=>setSize(item)}
            className={`border py-4 px-6 bg-gray-100 ${
              item === size ? 'border-pink-500' : ''
            }`}
            key={index}
          >
            {item}
          </button>

        ))}

      </div>

    </div>

  )
}


              <button onClick={()=>addToCart(productData._id, productData.sizes.length > 0 ? size : "no-size")} className='mt-6 bg-pink-600 text-white px-8 py-3 text-sm active:bg-gray-500'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return & exchange policy within 7 days.</p>
              </div>
        </div>

          </div>
          {/* Description and review section */}
        <div className='mt-20'>
          <div className='flex '>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'> Reviews (122)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum officiis quos voluptatem nemo asperiores libero quidem ut possimus nam molestias iure perferendis soluta tempora obcaecati, eaque consequuntur magni laborum quis.

          </p>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta iusto cupiditate debitis aperiam est quidem recusandae qui, accusamus nesciunt sapiente eos, quae ipsa explicabo minima quam repellendus aliquam quia?
          </p>
        </div>

      </div>
      {/* display related products */}
      <RelatedProducts category={productData.category}/>

    </div>

  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product