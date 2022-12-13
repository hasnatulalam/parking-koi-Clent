
import { Link, useLocation } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

import { useContext } from "react";
import { UserContext } from "../../context/Context";

const AllUsers = () => {
 
  const [list, setList] = useState([]);
  const [state]= useContext(UserContext)


 
  
   const { data,loading, error } = useFetch("http://localhost:9000/api/users/getallusers");  
 
  
   

   const handleDelete = async (_id) => {
    try {
     await axios.delete(`http://localhost:9000/api/users/deleteuser/${_id}`);
   
    
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
                    <th>Email</th>
                   
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-black">
                {data.map((user, index) => (
                    <tr>
                        <th>{index + 1}</th>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                      
                        <td>
                       
                                <button
                                    onClick={() => handleDelete(user._id)}
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

export default AllUsers;