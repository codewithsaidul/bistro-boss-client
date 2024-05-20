import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/others/authentication2.png";
import LoginBG from "../../assets/others/authentication.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();


  const naviGate = useNavigate()

  const { user, setUser, googleSignIn, facebookSignIn, createNewUser } = useAuth();

  const handleSignUp = (data) => {

    const { name, email, password } = data;

    createNewUser(email, password)
    .then((result) => {
      updateProfile(result.user, {
        displayName: name,
      })
      setUser({...user, displayName: name})
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up Successfull",
          showConfirmButton: false,
          timer: 1500
        });
  
        naviGate('/')
    });
  };



  const handleGoogleLogin = () => {
    googleSignIn()
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign In Successfull",
        showConfirmButton: false,
        timer: 1500
      });

      naviGate('/')
    })
      .catch((error) => console.log(error.message));
  };


  const handleFacebookLogin = () => {
    facebookSignIn()
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign In Successfull",
        showConfirmButton: false,
        timer: 1500
      });

      naviGate('/')
    })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register</title>
      </Helmet>

      <div
        className="flex justify-center items-center min-h-screen px-6 lg:px-0"
        style={{ backgroundImage: `url(${LoginBG})` }}
      >
        <div className="flex flex-col md:items-center md:flex-row gap-10 w-full lg:w-[75%] shadow-custom py-10 px-6 lg:px-10">
          <div className="grow shrink-0">
            <h2 className="text-center text-4xl text-[#151515] font-bold mb-7">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-5">
              {/* Name */}
              <div>
                <label>Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="outline-none border-0 py-3 px-7 bg-white text-[#A1A1A1] w-full rounded-lg mt-2"
                  placeholder="Type Here"
                />

                {errors.name && (
                  <p className="text-red-500 font-semibold">Name is Required</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                  })}
                  className="outline-none border-0 py-3 px-7 bg-white text-[#A1A1A1] w-full rounded-lg mt-2"
                  placeholder="Type Here"
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-500 font-semibold">
                    Email is Required
                  </p>
                )}

                {errors.email?.type === "pattern" && (
                  <p className="text-red-500 font-semibold">
                    Provide Valid Email{" "}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label>Password</label>
                <input
                  type="password"
                  {...register("password", {
                    validate: {
                      validatedPassword: (value) => {
                        if (value.length < 6) {
                          return "Password Should Be At Least 6 Character or Above";
                        } else if (!/[A-Z]/.test(value)) {
                          return "Password should contain at least one uppercase letter";
                        } else if (!/([a-z])/.test(value)) {
                          return "Your password should have at least one lowercase character";
                        }
                      },
                    },
                  })}
                  className="outline-none border-0 py-3 px-7 bg-white text-[#A1A1A1] w-full rounded-lg mt-2"
                  placeholder="Type Your Password"
                />
                {errors.password && (
                  <p className="text-red-500 font-semibold">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="w-full disabled:bg-slate-400 py-3 px-7 bg-[#D1A054B2] rounded-lg tex-xl text-white font-semibold"
              />
            </form>

            <div className="text-center mt-7">
              <p className="text-xl text-[#D1A054]">
                Already Registered? <Link to="/login">Go To Login</Link>
              </p>

              <p className="text-xl font-medium text-[#444444] my-5">
                Or sign in with
              </p>

              <div className="flex gap-4 justify-center">
                <button onClick={handleFacebookLogin} className="p-3 rounded-full border border-[#444444]">
                  <FaFacebookF size={20} />
                </button>
                <button onClick={handleGoogleLogin} className="p-3 rounded-full border border-[#444444]">
                  <FaGoogle size={20} />
                </button>
                <button className="p-3 rounded-full border border-[#444444]">
                  <FaGithub size={20} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <figure>
              <img className="w-96" src={LoginImg} alt="Login Image" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
