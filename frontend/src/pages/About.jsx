import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-12 border-t'>

        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className=' flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px]' src={assets.aboutimg} alt=''/>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

            <p>At SoleMate, we believe that the perfect pair of shoes or the right handbag can boost confidence and complete any outfit. That's why we offer a carefully selected collection of trendy sneakers, elegant heels, and fashionable bags to suit every occasion, whether it's a casual day out, the workplace, a party, or a special event.</p>
            <p>Our mission is to provide products that combine style, comfort, and affordability, making fashion accessible without compromising on quality. Every item in our collection is chosen with attention to modern trends, durability, and customer satisfaction.</p>
            <p>We are committed to delivering a smooth and enjoyable shopping experience, from browsing our collections to placing your order. With secure shopping, quality products, and dedicated customer support, SoleMate strives to become your go-to destination for women's fashion essentials.</p>

            <b className='text-gray-800'>
              Our Mission
            </b>
            <p>Our mission is to provide products that combine style, comfort, and affordability, making fashion accessible without compromising on quality. Every item in our collection is chosen with attention to modern trends, durability, and customer satisfaction.</p>


        </div>

      </div>

      <div className='text-4xl py-4'>

        <Title text1={'WHY' } text2={'CHOOSE US'} />

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>
              Quality Assurance:
          </b>

          <p className='text-gray-600'>
            At SoleMate, quality is at the heart of everything we do. Every pair of shoes, heels, and handbag is carefully selected to meet our standards for style, comfort, and durability. We pay close attention to materials, craftsmanship, and finishing to ensure that each product delivers long-lasting value and a premium feel.
          </p>
          
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>
              Convenience:
          </b>

          <p className='text-gray-600'>
           At SoleMate, we make shopping simple, convenient, and enjoyable. Our user-friendly website allows you to easily browse our collection of shoes, heels, and handbags, compare products, and place orders in just a few clicks. Whether you're shopping from home or on the go, we aim to provide a smooth and hassle-free online shopping experience.
          </p>
          
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>
              Exceptional Customer Service:
          </b>

          <p className='text-gray-600'>

          Customer satisfaction is our top priority. Our dedicated support team is always ready to assist with product inquiries, order updates, and any questions you may have. We are committed to providing friendly, reliable, and responsive service to ensure every customer enjoys a positive shopping experience with SoleMate.
          </p>
          
        </div>

      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
