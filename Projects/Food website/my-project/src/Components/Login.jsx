import { Link } from "react-router-dom";
import Frame5 from "../Assets/Frame 5.png";

export default function Login() {
    return (
        <div className="w-full h-screen relative flex flex-col justify-center items-center">
            {/* Background Image */}
            <img
                className="absolute w-full h-full object-cover"
                src={Frame5}
                alt=""
            />

            {/* Header Text */}
            <div className="relative w-full text-center z-10 px-4 mt-[-50px] md:mt-[-20px]">
                <h1 className="font-Righteous text-[30px] md:text-[40px] text-black">
                    LOGIN
                </h1>
                <p className="font-Inter text-[12px] md:text-[15px] mt-2">
                    Over
                    <span className="font-medium text-[13px] md:text-[16px] text-white">
                        {" "}
                        500K{" "}
                    </span>
                    Recipes from the world
                </p>
            </div>

            {/* Registration Component */}
            <div className="relative z-10 w-11/12 max-w-lg bg-white rounded-3xl shadow-lg p-6 sm:p-8 mt-8 md:mt-6">
                <form className="flex flex-col gap-4">
                    {/* Username Input */}
                    <input
                        type="text"
                        placeholder="Username / Email"
                        className="border-slate-300 border-[1px] rounded-xl py-3 px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-slate-300 border-[1px] rounded-xl py-3 px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Forgot Password Link */}
                    <p className="text-right text-[#DB8A89] text-xs md:text-sm hover:underline cursor-pointer">
                        Forgot Password?
                    </p>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="bg-[#DB8A89] text-white py-3 rounded-full hover:bg-[#AF6D6C] transition duration-200 text-sm md:text-base"
                    >
                        Login
                    </button>

                    {/* Registration Link */}
                    <p className="text-center text-xs md:text-sm">
                        Don't have an Account?{" "}
                        <Link to="/" className="text-[#DB8A89] hover:underline cursor-pointer">
                        Registration
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
