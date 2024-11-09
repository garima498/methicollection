import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const about = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus, aliquam fugit inventore ut ad laudantium culpa magni quae veritatis beatae, rem dolores, quasi similique tenetur excepturi optio voluptates pariatur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus esse consequuntur expedita commodi odit placeat in ea aspernatur, quas error illo! Perspiciatis ducimus mollitia sapiente corporis deserunt obcaecati voluptatum.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam hic repellendus aut delectus dolorem incidunt nesciunt perferendis necessitatibus, ipsam architecto est assumenda porro ut enim molestiae voluptatum. Deserunt, libero soluta!</p>

        </div>

      </div>

      <div className='py-4 text-xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae corporis neque quis soluta. Inventore facilis vitae nulla sunt deleniti velit repellendus, expedita, cupiditate est cum in aut dolorum fugiat?</p>

        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae corporis neque quis soluta. Inventore facilis vitae nulla sunt deleniti velit repellendus, expedita, cupiditate est cum in aut dolorum fugiat?</p>

        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae corporis neque quis soluta. Inventore facilis vitae nulla sunt deleniti velit repellendus, expedita, cupiditate est cum in aut dolorum fugiat?</p>

        </div>

      </div>
      <NewsletterBox />
      
    </div>
  )
}

export default about