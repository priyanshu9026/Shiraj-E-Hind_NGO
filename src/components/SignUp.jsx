import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser, setcurrent }) => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [state, setstate] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [email, setemail] = useState("");
  const [True, setTrue] = useState(true);
  const navigate = useNavigate();

  const Register = async () => {
    console.log("D");
    if (name === "" || username === "" || state === "") {
      alert("please fill all details");
    } else {
      console.log("Dd");
      const res = await axios.post("http://localhost:8000/user/register", {
        username: username,
        full_name: name,
        address: address,
        city: city,
        state: state,
        email: email,
        phone_number: phone,
        password: password,
      });
      var flag = true;
      if (res.data.message === "fail") {
        console.log("True");
        flag = false;
        alert("unable to create userresponse");
      }
      setTrue(flag);
    }
  };
  const SignIN = async () => {
    if (password === "" || username === "") {
      alert("please fill all details");
    } else {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(res.data.message);
      if (res.data.message === "success") {
        setUser(res.data.user);
        navigate("/login");
        setcurrent(res.data.user);
      } else {
        alert("password or username invalid");
      }
    }
  };
  return (
    <div>
      {True ? (
        <div className="flex  flex-col mb-10 items-center justify-center mt-10">
          <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] gap-10">
            <div className="flex flex-col w-full items-center gap-5">
              <h1 className="text-red-500 font-bold text-3xl">LOGIN</h1>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                User Name:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Password:{" "}
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <button onClick={SignIN}>Log in</button>
              <button
                onClick={() => {
                  setTrue(!True);
                }}
                className="bg-red-600"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mb-10 items-center justify-center mt-10">
          <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)]  gap-10">
            <div className="flex flex-col w-full items-center gap-5">
              <h1 className="text-red-500 font-bold text-3xl">Register</h1>
              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Name:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={name}
                  required
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                User Name:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={username}
                  required
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Email:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Password:{" "}
                <input
                  value={password}
                  required
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  type="password"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                address:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={address}
                  required
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                City:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={city}
                  required
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                State:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={state}
                  required
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Phone:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={phone}
                  required
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-5">
              <button
                onClick={() => {
                  Register();
                }}
              >
                Register
              </button>
              <button
                onClick={() => {
                  setTrue(!True);
                }}
                className="bg-red-600"
              >
                Already Have An account?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
