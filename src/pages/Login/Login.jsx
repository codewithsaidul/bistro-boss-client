import LoginImg from "../../assets/others/authentication2.png";
import LoginBG from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {


  const axiosPublic = useAxiosPublic();

  const location = useLocation();

  const from = location.state || '/'

  const naviGate = useNavigate()



  const [disable, setDisable] = useState(true);

  const { user, facebookSignIn, loggedIn, googleSignIn } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  useEffect(() => {
    if(user) {
      naviGate('/')
    }
  }, [naviGate, user])

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loggedIn(email, password)
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign In Successfull",
        showConfirmButton: false,
        timer: 1500
      });

      naviGate(from, {replace: true})
    })
    .catch((error) => console.log(error.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
    .then( async(result) => {
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email
      }

     try {
      await axiosPublic.post('/users', userInfo);
      
     } catch (err) {
      console.log(err.message)
     }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign In Successfull",
        showConfirmButton: false,
        timer: 1500
      });

      naviGate(from, {replace: true})
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

      naviGate(from, {replace: true})
    })
      .catch((error) => console.log(error.message));
  };



  const handleValidateCaptcha = (e) => {
    const captchaValue = e.target.value;

    if (validateCaptcha(captchaValue)) {
      setDisable(false);
    } else {
      setDisable(true)
    }
    e.current.value = "";
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>

      <div
        className="flex justify-center items-center min-h-screen px-6 lg:px-0"
        style={{ backgroundImage: `url(${LoginBG})` }}
      >
        <div className="flex flex-col md:items-center md:flex-row gap-10 w-full lg:w-[75%] shadow-custom py-10 px-6 lg:px-10">
          <div>
            <figure>
              <img className="w-96" src={LoginImg} alt="Login Image" />
            </figure>
          </div>

          <div className="grow shrink-0">
            <h2 className="text-center text-4xl text-[#151515] font-bold mb-7">
              Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="outline-none border-0 py-3 px-7 bg-white text-[#A1A1A1] w-full rounded-lg mt-2"
                  placeholder="Type Here"
                />
              </div>

              {/* Password */}
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="outline-none border-0 py-3 px-7 bg-white text-[#A1A1A1] w-full rounded-lg mt-2"
                  placeholder="Type Your Password"
                />
              </div>

              {/* Recaptcha */}
              <div>
                <label>
                  {" "}
                  <LoadCanvasTemplate />
                </label>
              </div>

              {/* Recaptcha */}
              <div>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  className="outline-none border-0 py-3 px-7 bg-white text-[#A1A1A1] w-full rounded-lg mt-2"
                  placeholder="Type Above Captcha"
                />

              </div>

              <input
                type="submit"
                disabled={disable}
                value="Sign In"
                className="w-full disabled:bg-slate-400 py-3 px-7 bg-[#D1A054B2] rounded-lg tex-xl text-white font-semibold"
              />
            </form>

            <div className="text-center mt-7">
              <p className="text-xl text-[#D1A054]">
                New Here? <Link to="/register">Create a New Account</Link>
              </p>

              <p className="text-xl font-medium text-[#444444] my-5">
                Or sign in with
              </p>

              <div className="flex gap-4 justify-center">
                <button onClick={handleFacebookLogin} className="p-3 rounded-full border border-[#444444]">
                  <FaFacebookF size={20} />
                </button>
                <button
                  onClick={handleGoogleLogin}
                  className="p-3 rounded-full border border-[#444444]"
                >
                  <FaGoogle size={20} />
                </button>
                <button className="p-3 rounded-full border border-[#444444]">
                  <FaGithub size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
