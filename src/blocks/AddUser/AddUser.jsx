import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import axios from 'axios';
import { useForm } from "react-hook-form";
import { ajvResolver } from '@hookform/resolvers/ajv';

const schema = {
    type: 'object',
    properties: {
      first_name: {
        type: 'string',
        minLength: 1,
        errorMessage: { minLength: 'First Name is required' },
      },
      last_name: {
        type: 'string',
        minLength: 1,
        errorMessage: { minLength: 'Last Name is required' },
      },
      email: {
        type: 'string',
        minLength: 1,
        errorMessage: { minLength: 'Email is required' },
      },
    },
    required: ['first_name', 'last_name', 'email'],
    additionalProperties: false,
  };

const AddUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: ajvResolver(schema),
      });
      const [formData, setFormdata] = useState({})
      const handleChange = (e) => {
          const value = e.target.value;
          setFormdata({
            ...formData,
            [e.target.name]: value
          });
      }
      const onSubmit = (data) => {
        axios.post('https://reqres.in/api/users', formData)
          .then(response => {
            if(response.status == 201){
                toast('✉ User Added Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setFormdata({...formData, first_name: '', last_name: '', email: ''});
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            } else {
                toast('✉ Error Ocuured', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
        }
  return (
    <React.Fragment>
            <div className="max-w-[1200px] lg:w-[100%] sm:w-full h-full flex flex-col justify-center items-center p-3 my-4 mx-auto">
            <ToastContainer />
                <div className='my-4 w-full p-5 bg-white border border-[#0f172a]/10 shadow-md rounded-md'>
                    <div className="w-full my-4 text-xl font-semibold flex justify-start items-center text-[#191528]">
                        <Link to="/" className='w-8 h-8 flex justify-center items-center p-1'>
                            <BsFillArrowLeftCircleFill className="w-full h-full" />
                        </Link>
                        <div className='ml-3 mt-1 flex justify-center items-center text-2xl'>Add User</div>
                    </div>
                    <div className='w-full h-auto my-4'>
                        <div className="w-full p-1 flex lg:flex-nowrap flex-wrap justify-start items-center">
                            <label className="lg:w-[80%] lg:mr-3 w-full text-base font-semibold text-[#191528] "><div className="after:content-['*'] after:ml-0.5 after:text-red-500">First Name</div>
                                <input  {...register('first_name')} name="first_name" type="text" className="w-full p-2 mt-2 rounded-md border border-blue-300 dark:border-blue-200 font-normal text-[#191528] bg-[transparent] focus:outline focus:outline-blue-500" value={formData.first_name} onChange={handleChange} placeholder="First Name"></input>
                                {errors.first_name && <span className='text-sm text-red-600 font-normal text-left'>{errors.first_name.message}</span>}
                            </label>
                            <label className="lg:w-[20%] mt-3 lg:mt-0 w-full text-base font-semibold text-[#191528]"><div className="after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</div>
                                <input  {...register('last_name')} name="last_name" type="text" className="w-full p-2 mt-2 rounded-md border border-blue-300 dark:border-blue-200 font-normal text-[#191528] bg-[transparent] focus:outline focus:outline-blue-500" value={formData.last_name} onChange={handleChange} placeholder="Last Name"></input>
                                {errors.last_name && <span className='text-sm text-red-600 font-normal text-left'>{errors.last_name.message}</span>}
                            </label>
                        </div>
                        <div className="w-full p-1 mt-3 flex lg:flex-nowrap flex-wrap justify-start items-center">
                            <label className="w-full text-base font-semibold text-[#191528]"><div className="after:content-['*'] after:ml-0.5 after:text-red-500">User Email</div>
                                <input {...register('email')} name="email" type="text" className="w-full p-2 mt-2 rounded-md border border-blue-300 dark:border-blue-200 font-normal text-[#191528] bg-[transparent] focus:outline focus:outline-blue-500" placeholder="Email" value={formData.email} onChange={handleChange}></input>
                                {errors.email && <span className='text-sm text-red-600 font-normal text-left'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className={`mt-3 w-full p-3 flex justify-end items-end`}>
                            <button type="button" className="ml-auto px-6 py-1 bg-transparent hover:bg-[#191528] hover:text-white hover:font-medium border-2 border-[#191528] text-[#191528] text-lg font-semibold flex" onClick={handleSubmit(onSubmit)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default AddUser