import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const imageHostKey = process.env.REACT_APP_imgbb_key;

  const {createUser, updateUser, setLoading} = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  // const [image, setImage] = useState(null)
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setLoading(true)
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate('/')
      toast.success("User created successfully!", {
        position: "top-center"
      })
      // const image = data.image[0];
      // const formData = new FormData();
      // formData.append('image', image);
      // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      // fetch(url, {
      //   method: 'POST',
      //   body: formData
      // })
      // .then(res => res.json())
      // .then( imageData => {
      //   console.log(imageData.data.url);
      //   setImage(imageData.data.url)
      // })


      const userInfo = {
        displayName : data.name,
        photoURL : data.image
      }
      updateUser(userInfo)

    })
    .catch((error) => {
      console.log(error);
      setSignUPError(error.message);
    });
  };

  return (
    <div className="h-[800px] flex justify-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">University</span>
            </label>
            <input
              type="text"
              {...register("university", {
                required: "University is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.university && (
              <p className="text-red-500">{errors.university.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", {
                required: "Address is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              {...register("image", {
                required: "Image is Required",
              })}
              placeholder = "Image URL"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-3">
          Already have an account{" "}
          <Link className="text-orange-500" to="/login">
            Please Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
