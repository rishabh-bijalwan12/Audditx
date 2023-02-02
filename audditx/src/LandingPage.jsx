import React from 'react'

const Landingpage = () => {
  return (
    <>
    <div className='w-screen    h-fit  lg:h-screen  grid  md:text-start  bg-gradient-to-b  gap-4  lg:bg-gradient-to-r from-green1 to-green2 '>
        <div className='   w-full mb-5  grid '>
            <div className='mb-5 lg:ml-5 '>
            <div className='font-letter   lg:text-5xl  text-center  lg:text-start  text-xl'>AUDITX</div>
               <div className='text-xs  w-full lg:w-fit text-center  lg:text-end font-abc '>ACCELERATING INDIA</div>
            <div className=' mt-5 grid justify-items-center  '>
            <ul className='flex gap-2 lg:scale-100 lg:absolute lg:right-0 rounded-l-2xl  lg:gap-5 lg:bg-white lg:p-5 lg:top-8'>
                <li className='hover:border-b-2 cursor-pointer border-black'>HOME</li>
                <li className='hover:border-b-2 cursor-pointer border-black'>CONTACT</li>
                <li className='hover:border-b-2 cursor-pointer border-black'>ABOUT US</li>
                <li className='hover:border-b-2 cursor-pointer border-black'>FREE SERVICES</li>
                <li className='hover:border-b-2 cursor-pointer border-black   '>SIGN IN</li>
            </ul>
          </div>
          </div>
            
        </div>
        <div className='w-full grid justify-items-center'>

        <div className=' grid grid-rows-2  lg:ml-0   lg:grid-rows-none   lg:grid-cols-2 gap-10 lg:w-11/12'>
        <div className='font-letter  grid gap-3 lg:gap-1 '>
            <div>

                <span className='font-letter text-lg pr-2 pl-0'>AUDITX</span>is a indian startup which aims to provide  full business solution at very low to free Services.The services targets small and medium businesses
                <div>
                Our startup is designed to make doing business hassel free as it provide all the services required to run a business
                </div>
            </div>
                <div>some of are free services are </div>
                <ul className='list-disc'>
                    <li className=''>Free Accounting Software</li>
                    <li>Free Setup and Opreating of Online Store </li>
                    <li>Free Tax Filling</li>
                </ul>
                <div>We also Provide Service Like </div>
                <ul className='list-disc'>
                    <li className=''>One Click Transportation/Logistics</li>
                    <li>Buy Now Pay Later </li>
                    <li>Working Capital Finance without colletral</li>
                    <li>Business Loans without colletral </li>
                </ul>

            </div>
        
                 <div className='w-full h-full   grid z-50  shadow-2xl lg:rounded-2xl bg-stone-100 p-5   justify-items-center items-center'>
                    <div className=' grid  m-5r'>
                    <div className='font-head text-center '> Note:  Our app is still under development</div>
                    <div className='font-letter m-2 ' >Provide us Your Email or Phone(or both),So we can Contact With you   </div>
                    </div>
                    <form className='w-full grid ustify-items-center '>

                    <div className='w-full justify-items-center text-start  grid'> 

                    </div>
                                    <div  className='font-letter text-center '>Enter your Email or Contact No.</div>
                                    <div className='w-full justify-items-center  grid'>   <input
                                    type="text"
                                    className="
                                    form-control
                                    block
                                    w-11/12
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-green1 focus:outline-none
                                    "
                                    id="TO2"
                                    placeholder="Email or Contact"
                                    /> </div>
                               
                                <div className='w-full grid mt-5 justify-items-center'>
                                <button className=" m-2 w-4/6 bg-transparent hover:bg-green1 text-green1 font-semibold hover:text-white py-2 px-4 border border-green1 hover:border-transparent rounded"
                                onClick={()=>{window.print()}}    >
                                    Submit
                                </button> 
                                    <div className=' font-letter  m-2 text-center'>Or</div>
                                    <button className=" m-2 w-4/6 bg-transparent hover:bg-green1 text-green1 font-semibold hover:text-white py-2 px-4 border border-green1 hover:border-transparent rounded"
                                onClick={()=>{window.print()}}    >
                                    Have a Invite Code
                                </button> 
                                </div>
                                
                                        </form>
                    </div>  
  

        </div>
        </div>
        <div className='w-full grid grid-flow-col justify-items-end gap-0  scale-0 lg:scale-75  items-end'>
            <img className='w-20 h-60' src='Man.png'></img>
            <div className=' lg:w-20 lg:h-14  bg-white'></div>
            <div className=' lg:w-20 lg:h-16  bg-white'></div>
            <div className=' lg:w-20 lg:h-20  bg-white'></div>
            <div className=' lg:w-20 lg:h-24  bg-white'></div>
            <div className=' lg:w-20 lg:h-28  bg-white'></div>
            <div className=' lg:w-20 lg:h-32  bg-white'></div>
            <div className=' lg:w-20 lg:h-36  bg-white'></div>
            <div className=' lg:w-20 lg:h-40  bg-white'></div>
            <div className=' lg:w-20 lg:h-44  bg-white'></div>
            <div className=' lg:w-20 lg:h-48  bg-white'></div>
            <div className=' lg:w-20 lg:h-52  bg-white'></div>
            <div className=' lg:w-20 lg:h-56  bg-white'></div>
            <div className=' lg:w-20 lg:h-60  bg-white'></div>
           
        </div>
    </div>
    </>
  )
}

export default Landingpage