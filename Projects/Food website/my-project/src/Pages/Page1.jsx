import Frame5 from "../Assets/Frame 5.png";
import Registration from "../Components/Regis";

export default function Page1() {
    return (
        <div className="w-full h-screen relative">
            {/* Background Image */}
            <img
                className="absolute w-full h-full object-cover"
                src={Frame5}
                alt=""
            />
            {/* Registration Component */}
            <div className="absolute inset-0 flex justify-center items-center">
                <Registration />
            </div>
        </div>
    );
}
