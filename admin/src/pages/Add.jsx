
// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {

//   const [image1,setImage] = useState(false)
//   // const [image2,setImage] = useState(false)
//   // const [image3,setImage] = useState(false)
//   // const [image4,setImage] = useState(false)

//   const [name,setName] = useState("");

//   const [description,setDescription] = useState("");

//   const [price,setPrice] = useState("");

//   const [category,setCategory] = useState("Bags");

//   const [bestseller,setBestseller] = useState(false);

//   const [sizes,setSizes] = useState([]);

//   const onSubmitHandler = async (e) => {

//     e.preventDefault();

//     try {

//       const formData = new FormData()

//       formData.append("name",name)
//       formData.append("description",description)
//       formData.append("price",price)
//       formData.append("category",category)
//       formData.append("bestseller",bestseller)
//       formData.append("sizes",JSON.stringify(sizes))

//       formData.append("image1",image1)

//       const response = await axios.post(backendUrl+ "/api/product/add",formData,{headers:{token}})


//       if (response.data.success) {

//         toast.success(response.data.message);
//         setName('')
//         setDescription('')
//         setImage(false)
//         setPrice('')
//       }else{
//         toast.error(response.data.message)
//       }

      
//     } catch (error) {

//       console.log(error);
//       toast.error(error.message)
      
//     }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>

//       {/* Upload Image */}
//       <div>
//         <p className='mb-2 font-medium'>Upload Image</p>

//         <div className='flex gap-2'>
//           <label htmlFor="image1">
//             <img
//               className='w-20'
//               src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
//               alt=""
//             />
//             <input onChange={(e)=>setImage(e.target.files[0])}
//               type="file"
//               id="image1"
//               hidden
//             />
//           </label>

//           {/* 
//           <label htmlFor="image2">
//             <img
//               className='w-20'
//               src={assets.upload_area}
//               alt=""
//             />
//             <input
//               type="file"
//               id="image2"
//               hidden
//             />
//           </label>

//           <label htmlFor="image3">
//             <img
//               className='w-20'
//               src={assets.upload_area}
//               alt=""
//             />
//             <input
//               type="file"
//               id="image3"
//               hidden
//             />
//           </label>

//           <label htmlFor="image4">
//             <img
//               className='w-20'
//               src={assets.upload_area}
//               alt=""
//             />
//             <input
//               type="file"
//               id="image4"
//               hidden
//             />
//           </label>
//           */}
//         </div>
//       </div>


//       {/* Product Name */}
//       <div className='w-full'>
//         <p className='mb-2 font-medium'>Product name</p>

//         <input
//           onChange={(e)=>setName(e.target.value)} value = {name}
//           className='w-full max-w-[500px] px-3 py-2 bg-gray-100'
//           type="text"
//           placeholder='Type here..'
//           required
//         />
//       </div>


//       {/* Product Description */}
//       <div className='w-full'>
//         <p className='mb-2 font-medium'>Product description</p>

//         <textarea
//            onChange={(e)=>setDescription(e.target.value)} value = {description}
//           className='w-full max-w-[500px] px-3 py-2 bg-gray-100'
//           placeholder='Write content here..'
//           required
//         />
//       </div>


//       {/* Category and Price */}
//       <div className='flex flex-col sm:flex-row gap-8 w-full'>

//         {/* Product Category */}
//         <div>
//           <p className='mb-2 font-medium'>Product category</p>

//           <select  onChange={(e)=>setCategory(e.target.value)}  className='w-full px-3 py-2 sm:w-[120px]'>
//             <option value="Shoes">Shoes</option>
//             <option value="Heels">Heels</option>
//             <option value="Bags">Bags</option>
//           </select>
//         </div>


//         {/* Product Price */}
//         <div>
//           <p className='mb-2 font-medium'>Product Price</p>

//           <input
//             onChange={(e)=>setPrice(e.target.value)} value = {price}
//             className='w-full px-3 py-2 sm:w-[120px]'
//             type="number"
//             placeholder='25'
//             required
//           />
//         </div>

//       </div>


//       {/* Product Sizes */}
//       <div>
//         <p className='mb-2'>Product Sizes</p>

//         <div className='flex gap-3'>
//           <div onClick={()=>setSizes(prev => prev.includes("37")?prev.filter(item=>item!=="37") : [...prev,"37"])}>
//           {/* Size 37 */}
//         <p className={`${sizes.includes("37")?"bg-red-200":"bg-slate-200"} px-4 py-2 cursor-pointer font-medium active:bg-slate-300`}>
//             37
//           </p>
//           </div>

//           {/* Size 38 */}
//           <div onClick={()=>setSizes(prev => prev.includes("38")?prev.filter(item=>item!=="38") : [...prev,"38"])}>
//           <p className={`${sizes.includes("38")?"bg-red-200":"bg-slate-200"} px-4 py-2 cursor-pointer font-medium active:bg-slate-300`}>
//             38
//           </p>
//           </div>

//           {/* Size 39 */}
//           <div  onClick={()=>setSizes(prev => prev.includes("39")?prev.filter(item=>item!=="39") : [...prev,"39"])}>
//           <p className={`${sizes.includes("39")?"bg-red-200":"bg-slate-200"} px-4 py-2 cursor-pointer font-medium active:bg-slate-300 `}>
//             39
//           </p>
//           </div>

//           {/* Size 40 */}
//           <div  onClick={()=>setSizes(prev => prev.includes("40")?prev.filter(item=>item!=="40") : [...prev,"40"])}>
//           <p className={`${sizes.includes("40")?"bg-red-200":"bg-slate-200 "} px-4 py-2 cursor-pointer font-medium active:bg-slate-300`}>
//             40
//           </p>
//           </div>

//         </div>
//       </div>

//       <div className='flex gap-2 mt-2'>
//         <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type="checkbox" id='bestseller' />
//         <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//       </div>

//       <button type='submit' className='rounded-full font-medium w-28 py-3 mt-4 bg-cyan-500 text-white active:bg-slate-300'>
//               ADD
//       </button>

//     </form>
//   )
// }

// export default Add


import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Bags')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('category', category)
      formData.append('bestseller', bestseller)
      formData.append('sizes', JSON.stringify(sizes))

      formData.append('image1', image1)

      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        { headers: { token } }
      )

      if (response.data.success) {

        toast.success(response.data.message)

        // Reset form
        setName('')
        setDescription('')
        setImage(false)
        setPrice('')
        setCategory('Bags')
        setBestseller(false)
        setSizes([])

      } else {

        toast.error(response.data.message)

      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }
  }

  // Handle category change
  const handleCategoryChange = (e) => {

    const newCategory = e.target.value

    setCategory(newCategory)

    // Bags do not have shoe sizes
    if (newCategory === 'Bags') {
      setSizes([])
    }
  }

  // Handle size selection
  const handleSizeClick = (size) => {

    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    )
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col w-full items-start gap-3'
    >

      {/* Upload Image */}
      <div>

        <p className='mb-2 font-medium'>
          Upload Image
        </p>

        <div className='flex gap-2'>

          <label htmlFor='image1'>

            <img
              className='w-20'
              src={
                !image1
                  ? assets.upload_area
                  : URL.createObjectURL(image1)
              }
              alt=''
            />

            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              id='image1'
              hidden
            />

          </label>

        </div>

      </div>


      {/* Product Name */}
      <div className='w-full'>

        <p className='mb-2 font-medium'>
          Product name
        </p>

        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2 bg-gray-100'
          type='text'
          placeholder='Type here..'
          required
        />

      </div>


      {/* Product Description */}
      <div className='w-full'>

        <p className='mb-2 font-medium'>
          Product description
        </p>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-3 py-2 bg-gray-100'
          placeholder='Write content here..'
          required
        />

      </div>


      {/* Category and Price */}
      <div className='flex flex-col sm:flex-row gap-8 w-full'>

        {/* Product Category */}
        <div>

          <p className='mb-2 font-medium'>
            Product category
          </p>

          <select
            value={category}
            onChange={handleCategoryChange}
            className='w-full px-3 py-2 sm:w-[120px]'
          >

            <option value='Shoes'>
              Shoes
            </option>

            <option value='Heels'>
              Heels
            </option>

            <option value='Bags'>
              Bags
            </option>

          </select>

        </div>


        {/* Product Price */}
        <div>

          <p className='mb-2 font-medium'>
            Product Price
          </p>

          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full px-3 py-2 sm:w-[120px]'
            type='number'
            placeholder='25'
            required
          />

        </div>

      </div>


      {/* Product Sizes */}
      {(category === 'Shoes' || category === 'Heels') && (

        <div>

          <p className='mb-2'>
            Product Sizes
          </p>

          <div className='flex gap-3'>

            {/* Size 37 */}
            <div
              onClick={() => handleSizeClick('37')}
            >

              <p
                className={`
                  ${sizes.includes('37')
                    ? 'bg-red-200'
                    : 'bg-slate-200'
                  }
                  px-4 py-2 cursor-pointer font-medium
                `}
              >
                37
              </p>

            </div>


            {/* Size 38 */}
            <div
              onClick={() => handleSizeClick('38')}
            >

              <p
                className={`
                  ${sizes.includes('38')
                    ? 'bg-red-200'
                    : 'bg-slate-200'
                  }
                  px-4 py-2 cursor-pointer font-medium
                `}
              >
                38
              </p>

            </div>


            {/* Size 39 */}
            <div
              onClick={() => handleSizeClick('39')}
            >

              <p
                className={`
                  ${sizes.includes('39')
                    ? 'bg-red-200'
                    : 'bg-slate-200'
                  }
                  px-4 py-2 cursor-pointer font-medium
                `}
              >
                39
              </p>

            </div>


            {/* Size 40 */}
            <div
              onClick={() => handleSizeClick('40')}
            >

              <p
                className={`
                  ${sizes.includes('40')
                    ? 'bg-red-200'
                    : 'bg-slate-200'
                  }
                  px-4 py-2 cursor-pointer font-medium
                `}
              >
                40
              </p>

            </div>

          </div>

        </div>

      )}


      {/* Bestseller */}
      <div className='flex gap-2 mt-2'>

        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type='checkbox'
          id='bestseller'
        />

        <label
          className='cursor-pointer'
          htmlFor='bestseller'
        >
          Add to bestseller
        </label>

      </div>


      {/* Add Button */}
      <button
        type='submit'
        className='rounded-full font-medium w-28 py-3 mt-4 bg-cyan-500 text-white active:bg-slate-300'
      >
        ADD
      </button>

    </form>
  )
}

export default Add

