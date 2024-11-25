import { Link } from "react-router-dom";




export default function Registration() {
    return (
        <div className="relative">
            {/* Header Text */}
            <div className="absolute inset-x-0 top-[60px] text-center">
                <h1 className="font-Righteous text-[40px] text-black ml-[-38px] sm:text-[26px] md:text-[33px] lg:text-[40px]">REGISTRATION</h1>
                <p className="font-Inter  text-[15px] mt-2 w-64 ml-[45px] sm:text-[9px] md:text-[12px] lg:text-[15px] sm:ml-[-22px] md:ml-[18px] lg:ml-[42px]">
                    Over
                    <span className="font-medium  text-[16px] text-white"> 500K </span>
                    Recipes from the world
                </p>
            </div>

            {/* Registration Form */}
            <div className="Form mt-[170px] ml-[-42px] flex justify-center items-center w-[450px] sm:w-[300px] md:w-[370px] lg:w-[450px]">
                <form
                    action="#"
                    className="r bg-white w-[90%] max-w-[450px] rounded-3xl border-[1px] border-slate-400 pt-7 shadow-slate-500 shadow-xl"
                >
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Username..."
                        className="border-[1px] border-slate-300 rounded-md px-[10%] py-[10px] my-3 block w-[80%] mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-[1px] border-slate-300 rounded-md px-[10%] py-[10px] my-3 block w-[80%] mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-[1px] border-slate-300 rounded-md px-[10%] py-[10px] my-3 block w-[80%] mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="border-[1px] border-slate-300 rounded-md px-[10%] py-[10px] my-3 block w-[80%] mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="sm:py-2 sm:px-[60px] md:py-3 md:px-[100px] bg-[#DB8A89] text-white py-3 px-[120px] rounded-full hover:bg-[#AF6D6C] transition duration-200 block mx-auto mt-[30px]"
                    >
                        Register
                    </button>
                    <p className="font-normal font-Inter text-center text-[12px] mb-8 mt-5">
                        Already a member?
                        <Link to="/Login" className="font-Inter font-normal text-[14px] text-[#DB8A89] hover:underline cursor-pointer">
                           
                             Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
