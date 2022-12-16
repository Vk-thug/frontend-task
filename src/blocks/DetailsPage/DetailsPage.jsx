import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Table } from '../../components'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { ldtheader } from '../../constants'

const DetailsPage = () => {
    const [searchdata, setSearchdata] = useState("");
    const [tableData, setTableData] = useState([]);
    const [tablefilterData, setTablefilterData] = useState(tableData);
    const [currentPage, setcurrentPage] = useState(0);

    const handleChange = (e) => {
        if(e.target.value !== ""){
            setSearchdata(e.target.value)
            const filteredData = tableData.filter((item) => item.id == e.target.value);
            setTablefilterData(filteredData);
        }else {
            setSearchdata("");
            setTablefilterData(tableData);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://reqres.in/api/users").then((res) => res.json())
                .then((json) => {
                    setTableData(json.data);
                    setTablefilterData(json.data)
                }).catch((err) => console.log(err))
        };
        fetchData();
    }, []);
  return (
    <React.Fragment>
            <div className="max-w-[1200px] lg:w-[100%] sm:w-full h-full flex flex-col justify-center items-center p-3 my-4 mx-auto">
            
                <div className='my-4 w-full p-5 bg-white border border-[#0f172a]/10 shadow-md rounded-md'>
                    <div className="w-full my-4 text-xl font-semibold text-[#191528]">User Details</div>
                    <div className='w-full flex justify-between items-center'>
                        <input name="search" type="search" className="p-2 mt-2 rounded-md border border-blue-500 dark:border-blue-200 font-normal text-[#191528] bg-[transparent] focus:outline focus:outline-blue-700" value={searchdata} onChange={handleChange} placeholder="Search"></input>
                        <Link to="/user/add" className="fp-label text-xl text-[#191528] flex  flex-row justify-center items-center font-normal py-1 px-4 rounded-md border border-[#27c79a] hover:shadow-md">
                            <div className='icon w-4 h-4 flex justify-center items-center mr-2'><BsFillPlusCircleFill className="w-full h-full" /></div>
                            Add
                        </Link>
                    </div>
                    <div className='w-full h-auto my-4'>
                        <Table header={ldtheader} data={tablefilterData} currentPage={currentPage} setcurrentPage={setcurrentPage}>
                        </Table>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default DetailsPage