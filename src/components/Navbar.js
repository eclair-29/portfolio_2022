import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { Link } from "react-scroll";

const NavBar = () => {
    const [navCollapse, setNavCollapse] = useState(false);

    const handleNavCollapse = () => setNavCollapse(!navCollapse);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e0f7fa] text-black">
            <h1 id="logo" className="font-bold text-[#00695c]">
                migz'22
            </h1>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
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
                        : "absolute top-0 left-0 w-full h-screen bg-[#e0f7fa] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleNavCollapse}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleNavCollapse}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleNavCollapse}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleNavCollapse}
                        to="projects"
                        smooth={true}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleNavCollapse}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
                        <a
                            className="flex justify-between items-center w-full text-white"
                            target="_blank"
                            href="https://www.linkedin.com/in/miguel-de-chavez-26513a185?fbclid=IwAR0e3v2QR-0sA-EyGoHO_vE4lVzOc4Drz2WfV35FnVNffYbOecp0Q7k0bIg"
                        >
                            Linkedin <GrLinkedin size={30} color="#fff" />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
                        <a
                            className="flex justify-between items-center w-full text-white"
                            href="https://github.com/eclair-29"
                            target="_blank"
                        >
                            Github <GrGithub size={30} color="#fff" />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#004d40]">
                        <a
                            className="flex justify-between items-center w-full text-white"
                            href="/"
                        >
                            Email <BiMailSend size={30} color="#fff" />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#311b92]">
                        <a
                            className="flex justify-between items-center w-full text-white"
                            download
                            href="/miguel_dechavez_job_cv_version_2.2.pdf"
                        >
                            Resume <AiOutlineFilePdf size={30} color="#fff" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
