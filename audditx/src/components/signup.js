import React, { useState } from 'react';


function SignupPage() {


  const [userDetails, setUserDetails] = useState({
    Name: '',
    GSTIN: '',
    Adress: '',
    Building: '',
    Landmark: '',
    State: '',
    City: '',
    Postalcode: '',
    Email: '',
    Username: '',
    password: '',
    Type: ''
  })

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value
    })
  }

  const submit = () => {

    console.log(userDetails)
  }
  return (
    <>
      <div className='w-full h-full  grid justify-items-center items-center '>
        <div className='shadow-lg border w-11/12 '>
          <h5 className='text-5xl font-bold text-center w-full'>AUDDIT</h5>
          {/* <h3 className='text-sm text-center '> Accelatating India</h3> */}

          <form className='p-5'>

            <div className='w-full h-full  grid grid-row-5 gap-3'>
              <div className='justify-items-center items-center'>
                <div className='text-xl text-gray-600 font-semibold'>Essantial Details</div>

                <div className='w-full grid  grid-cols-2 gap-3 mt-3 '>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Name <span className='text-gray-600'>(Trade name currently in use)</span></label>
                    <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name"
                      value={userDetails.Name} onChange={handleChange}
                      required />
                  </div>
                  <div className="flex justify-center">
                    <div className="mb-3 w-full">
                      <div for="exampleFormControlInput1" className="form-label  font-medium inline-block mb-2 text-gray-700"
                      >Business Type</div>

                      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' id="Ctype" onChange={() => { }} >
                        <option>Business Type </option>
                        <option value={'Manufacturer'} >Manufacturer</option>
                        <option value={'Retailer'}>Retailer</option>
                        <option value={'Distuributor'}>Distuributor</option>

                      </select>


                    </div>
                  </div>

                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">GSTIN <span className='text-gray-600'>(Trade name currently in use)</span></label>
                    <input type="name" id="GSTIN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="GSTIN" value={userDetails.GSTIN}
                      onChange={handleChange}
                      required />
                  </div>



                </div>
              </div>
              {/* 1st quater div ends here  */}
              <div className='justify-items-center items-center'>
                <div className='text-xl text-gray-600 font-semibold'>Adress</div>

                <div className='w-full grid  grid-cols-2 gap-3 mt-3 '>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Adress <span className='text-gray-600'></span></label>
                    <input type="name" id="Adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Adress" value={userDetails.Adress}
                      onChange={handleChange}
                      required />
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Building <span className='text-gray-600'></span></label>
                    <input type="name" id="Building" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Building" value={userDetails.Building}
                      onChange={handleChange}
                      required />
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Landmark <span className='text-gray-600'></span></label>
                    <input type="name" id="LandMark" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Landmark" value={userDetails.Landmark}
                      onChange={handleChange} required />
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">State <span className='text-gray-600'></span></label>
                    <input type="name" id="State" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="State" value={userDetails.State}
                      onChange={handleChange} required />
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">City <span className='text-gray-600'></span></label>
                    <input type="name" id="City" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="City" value={userDetails.City}
                      onChange={handleChange} required />
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Postal Code <span className='text-gray-600'></span></label>
                    <input type="Number" id="PostalCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Postal Code"
                      required />
                  </div>


                </div>
              </div>
              {/* 2nd div ends here */}
              <div className='justify-items-center items-center'>
                <div className='text-xl text-gray-600 font-semibold'>Contact</div>

                <div className='w-full grid  grid-cols-2 gap-3 mt-3 '>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone no. <span className='text-gray-600'></span></label>
                    <input type="Number" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+91"
                    />
                  </div>
                  <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className='text-gray-600'></span></label>
                    <input type="email" id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@example.com" value={userDetails.Email}
                      onChange={handleChange} />
                  </div>




                </div>
              </div>
              {/* 3rd div ends here  */}

              {/* 4th div ends here  */}
              <div className='justify-items-center items-center'>
                <div className='text-xl text-gray-600 font-semibold'>Login Information</div>

                <div className='w-full   gap-3 mt-3 '>
                  <div className='  items-center gap-3'>

                    <div className='flex flex-col	' >
                      <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Username <span className='text-gray-600' onKeyUpCapture={() => { console.log('click') }} >(Short Name To Be Used In The Erp,Marketplace and Login)</span></label>
                      <input type="name" id="Username" className="w-1/2 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Username" value={userDetails.Username}
                        onChange={handleChange} required />
                      <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Password<span className='text-gray-600'></span></label>
                        <input type="name" id="Password" className="w-1/2 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Password"
                          onChange={handleChange} required />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* 4th div ends here */}
              <div className='grid  w-full gap justify-items-center items-center'>

                <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4 w-1/3"
                  onClick={(e) => { submit(e) }}
                > Submit</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}




export default SignupPage;
