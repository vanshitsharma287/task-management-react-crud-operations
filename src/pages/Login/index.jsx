import { Link } from "react-router";
import LoginForm from "./components/loginForm";
import loginBgImg from "/images/loginBg.png"

const Login = () => {
  return (
    <section className="login-section flex min-h-screen items-center justify-center">
      <div className="login-container flex rounded-2xl shadow-lg overflow-hidden">
        <div className="left-side text-white bg-purple-400 hidden md:flex flex-col items-center p-3">
          <i className="fa-solid fa-square-check"></i>
          <h1>Task Flow</h1>
          <ul className="flex list-inside list-disc items-center gap-4">
            <li className="list-none">Plan</li>
            <li>Organize</li>
            <li>Get Things Done</li>
          </ul>
          <img src={loginBgImg} alt="img" />

          <span>Your Productivity, Companion always</span>

        </div>
        <div className="right-side p-3 w-90 flex flex-col items-center gap-5">
          <div className="login-signUp-btn  bg-[#F0F1FA] rounded-full p-1 ">

            <button className="px-7 py-3 cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md">
              Login
            </button>

            <button className="px-7 py-3 cursor-pointer text-[#253052] rounded-full">
              Sign Up
            </button>

          </div>

          <div className="form-container w-80">
            <LoginForm />
            <small className="text-center block mt-3 font-medium text-base">Don't have an account? <Link to="/signup" className="text-blue-950 underline">Sign up</Link></small>
          </div>

        </div>
      </div>

    </section>
  )
}
export default Login;