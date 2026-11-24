import { useState } from "react";
import { Link } from "react-router";
const LoginForm = () => {
    const [form, setForm] = useState({email: "", password: "", rememberMe: false});
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    
    return (
        <div className="login-form">
            <h2 className="text-3xl font-medium">Welcome Back</h2>
            <p>Sign in to continue to TaskFlow</p>

            <form className="flex flex-col gap-3 mt-4">

                {/* Email */}
                <div className="relative">
                    <i className="fa-regular fa-envelope absolute top-1/2 left-3 -translate-y-1/2"></i>

                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="email"
                        className="border rounded w-full py-2 pl-10 pr-3 text-gray-700 focus:outline-none"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        required
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <i className="fa fa-lock absolute top-1/2 left-3 -translate-y-1/2"></i>

                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="password"
                        className="border rounded w-full py-2 pl-10 pr-10 text-gray-700 focus:outline-none"
                        placeholder="Enter your password"
                        name="password"
                        value={form.password}
                        required
                    />

                    <i className="fa-regular fa-eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"></i>
                </div>
                <div className="remember-me-forget-password flex justify-between ">
                    <div className="flex gap-2 items-center">
                        <input 
                          onChange={(e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.checked }))}
                          type="checkbox"
                          id="remember-me"
                          name="rememberMe"
                          checked={form.rememberMe}
                          className="scale-125"
                        />
                        <label for="remember-me"> Remember me</label>
                    </div>
                    <Link to="/forgot-password" className="text-blue-900 underline">Forgot Password?</Link>
                </div>

                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-700 transition duration-300 cursor-pointer text-white w-full rounded-2xl p-3"
                >
                    Login
                </button>

            </form>
        </div>
    );
};

export default LoginForm;