import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  /*   const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
     
    }); */

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/api/auth/users/register", { name, email, password, role });
      if (response.status === 201) {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (



    <div className="py-10">
      <div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
        <h2 className="text-center text-green-700 text-3xl mb-4">Sign Up</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center space-y-2"
        >
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              required

              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              required

              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              required

              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <select
              required
              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Driver">Driver</option>
              <option value="Owner">Owner</option>


            </select>

          </div>



          <div className="flex items-center justify-center mt-5">
            <button type="submit" className="mt-2 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
              Sign Up

            </button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-8 mt-4">
          <p>
            Already have an account?{" "}
            <Link className="text-blue-800" to="/login">
              LOGIN.
            </Link>
          </p>
        </div>



      </div>
    </div>
  );
};

export default Register;
