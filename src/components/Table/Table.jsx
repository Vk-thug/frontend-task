import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Table = (props) => {
      const [itemPerPage, setitemPerPage] = useState(5);
      const totalPages = Math.ceil(props.data.length / itemPerPage)
      const pagesVisted = props.currentPage * itemPerPage
      const showData = props.data.slice(pagesVisted, pagesVisted + Number(itemPerPage));
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                    {props.header.map((item, i) => {
                        return (
                            <th scope='col' key={i} className="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider">{item.title}</th>
                        )
                    })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {showData.length > 0 && showData.map((person, i) => (
                  <tr key={i}>
                    <td>
                        <div className="w-[124px] h-[124px] px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                          <img src={person.avatar} className="w-full h-full object-contain" alt={person.first_name} />
                        </div>
                    </td>
                    <td>
                        <div className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{person.id}</div>
                    </td>
                    <td>
                        <div className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{person.first_name} {person.last_name}</div>
                    </td>
                    <td>
                        <div className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{person.email}</div>
                    </td>
                </tr>
                ))}
              </tbody>
            </table>
            <div className='flex justify-between items-center m-4'>
              <div className='flex flex-row justify-start items-center'>
                <div className='text-base text-[#191528] font-normal whitespace-nowrap mr-4'>Page {showData.length > 0 ? props.currentPage + 1 : '0' } of {totalPages}</div>
                <select name="items" className="w-full p-1 rounded-md border border-blue-300 dark:border-blue-200 font-normal text-[#191528] bg-[transparent] focus:outline focus:outline-blue-500" value={itemPerPage} onChange={(e) => {props.setcurrentPage(0);setitemPerPage(e.target.value);}}>
                  {[5,10,25,50].map((item) => {
                    return ( <option key={item} value={item}>{item}</option> )
                  })}
                </select>
              </div>
              <div className='flex justify-center items-center rounded-lg border border-[#191528] space-x-2 divide-[#191528] divide-x p-2'>
                <div className='flex justify-center items-center'>
                  <IoMdArrowDropleftCircle className="w-auto h-auto text-[#191528]" onClick={(e) => {props.setcurrentPage(0)}}></IoMdArrowDropleftCircle>
                </div>
                <div className='flex justify-center items-center pl-1'>
                  <MdKeyboardArrowLeft className={`w-full h-full  ${props.currentPage === 0 ? `text-red-500` : `cursor-pointer text-[#191528]`}`} onClick={(e) => {props.currentPage === 0 ? props.setcurrentPage(0) :props.setcurrentPage(props.currentPage - 1)}}></MdKeyboardArrowLeft>
                </div>
                <div className='flex justify-center items-center pl-1'>
                  <MdKeyboardArrowRight className={`w-full h-full  ${props.currentPage === totalPages - 1 ? `text-red-500` : `cursor-pointer text-[#191528]`}`} onClick={(e) => {props.currentPage === totalPages - 1 ? props.setcurrentPage(totalPages - 1) : props.setcurrentPage(props.currentPage + 1)}}></MdKeyboardArrowRight>
                </div>
                <div className='flex justify-center items-center pl-1'>
                  <IoMdArrowDroprightCircle className="w-auto h-auto text-[#191528]" onClick={(e) => {props.setcurrentPage(totalPages - 1)}}></IoMdArrowDroprightCircle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table