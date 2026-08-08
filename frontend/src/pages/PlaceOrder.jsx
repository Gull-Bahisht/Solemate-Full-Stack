import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import OrderSuccessPopup from '../components/OrderSuccessPopup'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const [showOrderPopup, setShowOrderPopup] = useState(false)
  const [placedOrder, setPlacedOrder] = useState(null)
  
  const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products,currency} = useContext(ShopContext);

  const [formData,setformData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) => {

    const name = event.target.name

    const value = event.target.value

    setformData(data=>({...data,[name]:value}))

  }

  const onSubmitHandler = async  (event) => {

    event.preventDefault()
    try {

      let orderItems = []

      for(const items in cartItems){

        for(const item in cartItems[items]){

          if (cartItems[items][item]>0) {

            const itemInfo = structuredClone(products.find(product => product._id === items))

            if (itemInfo) {

              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
              
            }
            
          }
        }
      }

      let orderDta = {
        address: formData,
        items:orderItems,
        amount: getCartAmount()+delivery_fee
      }

      switch (method) {

        

        case 'cod':
    console.log("Sending order...");
    console.log("Backend URL:", backendUrl);
    console.log("Token:", token);
    console.log("Order data:", orderDta);

    const response = await axios.post(
    backendUrl + '/api/order/place',
    orderDta,
    { headers: { token } }
)

if (response.data.success) {


    const newOrder = {
        ...orderDta
    }

     setPlacedOrder(newOrder)

    

    setCartItems({})

    toast.success('Order placed successfully!')

    setShowOrderPopup(true)


    

} else {

    toast.error(response.data.message)

}

    break;
      }

      
    } 
    // catch (error) {

    //   console.log(error);
      
      
    // }

    catch (error) {
    console.log("ORDER ERROR:", error);
    console.log("SERVER RESPONSE:", error.response?.data);
    console.log("ERROR STATUS:", error.response?.status);

    toast.error(
        error.response?.data?.message || error.message
    );
}



  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between pt-5 sm:pt-14 min-h-[80vh] border-t' >
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='flex gap-3'>

            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name'/>
            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName}className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name'/>

          </div>  
            <input required onChange={onChangeHandler} name='email' value={formData.email}  className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Email address'/>
            <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>

          <div className='flex gap-3'>

            <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
            <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>

          </div> 

          <div className='flex gap-3'>

            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode'/>
            <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>

          </div> 
            <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-t-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone'/>



      </div>

      {/* Right side */}

      <div className='mt-8'>

        <div className='mt-8 min-w-80'>

          <CartTotal/>

        </div>

        <div className='mt-12'>

          <Title text1={'PAYMENT'} text2={'METHOD'}/>

          <div className='flex gap-3 flex-col lg:flex-row'>

            {/* Payment methods */}

            

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>

                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-1' src={assets.cod } alt=''/>
                <p className='text-gray-500 text-sm font-medium mx-3'>Cash on delivery</p>
            </div>


          </div>

          <div className='w-full text-end mt-8'>

            <button type='submit' className='bg-pink-600 text-white px-16 py-3 text-sm active:bg-slate-300'>
              PLACE ORDER
            </button>

          </div>

        </div>

      </div>

      {
  showOrderPopup && (
    <OrderSuccessPopup
      order={placedOrder}
      currency={currency}
      onClose={() => setShowOrderPopup(false)}
      onViewOrders={() => navigate('/orders')}
    />
  )
}


    </form>
  )
}

export default PlaceOrder
