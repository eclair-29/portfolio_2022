import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [navCollapse, setNavCollapse] = useState(false);

    const handleNavCollapse = () => setNavCollapse(!navCollapse);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#004d40] text-gray-100">
            <h1 id="logo" className="font-bold">
                brand
            </h1>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Repos</li>
            </ul>

            {/* collapsable */}
            <div onClick={handleNavCollapse} className="md:hidden z-10">
                {!navCollapse ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul
                className={
                    !navCollapse
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#004d40] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Experience</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Repos</li>
            </ul>

            {/* social icons */}
            <div className="hidden"></div>
        </div>
    );
};

export default NavBar;
