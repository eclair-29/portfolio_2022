import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className="bg-[#e0f7fa] w-full h-screen">
            {/* wrapper */}
            <div className="max-w-[1000px] mx-auto px-8 flex justify-center flex-col h-full">
                <p className="text-[#ff5722]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-light text-[#212121]">
                    Miguel De Chavez
                </h1>
                <h2 className="text-4xl sm:text-7xl font-light text-[#00695c]">
                    i'm a Software Engineer.
                </h2>

                <div>
                    <button className="text-black border-2 px-6 py-3 my-4 flex items-center border-black">
                        View Projects <HiArrowNarrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
