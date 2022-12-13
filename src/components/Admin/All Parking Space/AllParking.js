


import { Link, useLocation } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const AllParking = () => {
 
 
  

 
  
   const { data, loading, error } = useFetch("http://localhost:9000/api/parking/AllParkings");  
 
  


  const handleDelete = async (_id) => {
      try {
       await axios.delete(`http://localhost:9000/api/parking/delete/${_id}`);
     
      
    } catch (err) {}   
   
  }; 

 
  return (
    <div className="shadow rounded-xl">
   
    <h2 className="text-2xl font-bold pt-4 pl-10 mb-2">All Users</h2>
    <hr className="border-[#21252c] h-[1px] mb-6" />
    <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr className="text-black">
                    <th></th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Slots</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-black">
                {data.map((parking, index) => (
                    <tr>
                        <th>{index + 1}</th>
                        <td>{parking.name}</td>
                        <td>{parking.city}</td>
                        <td>{parking.address}</td>
                       
                        <td>
                       
                                <button
                                    onClick={() => handleDelete(parking._id)}
                                    className="btn btn-error btn-xs"
                                >
                                    Remove User
                                </button>
                     
                            
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  );
};

export default AllParking;