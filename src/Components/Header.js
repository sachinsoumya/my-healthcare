import React from 'react'

const Header = () => {
  return (
    <div className='grid  grid-cols-3 gap-4 w-12/12'>
        <div className='w-24'>
            <img src='https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png' alt='logo' />
        

        </div>
        <div className='flex justify-between md:flex-row flex-col'>

            <div>Drugs</div>
            <div>Calculator</div>
            <div>Article</div>
            <div>News</div>
            <div>Quizzes</div>
            <div>Surveys</div>
            <div>Webinar</div>
            <div>Guidelines</div>

            

        </div>
        <div className='flex mx-auto justify-between w-16'>
            <div className='border border-blue-400 rounded-md p-2 h-8 md:h-auto'>
                274

            </div>

            <div className='border border-blue-400 rounded-full p-2 h-8 w-12 md:h-auto'>
                A

            </div>
            

        </div>
    </div>
  )
}

export default Header