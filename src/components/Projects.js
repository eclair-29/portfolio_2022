const Projects = () => {
    return (
        <div
            name="projects"
            className="w-full h-screen bg-[#e0f7fa] text-black"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-light inline text-[#ff5722] ">
                        Projects
                    </p>
                    <p className="py-4 text-[#00695c]">
                        These are the projects and repositories on my Github
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8">
                    <div className="border-2 border-black">
                        <p className="my-4">
                            <a
                                className="text-[#ff5722] text-2xl"
                                href="https://github.com/eclair-29/__animazing"
                                target="_blank"
                            >
                                animazing streaming app
                            </a>
                            <p className="text-gray-500 text-sm">
                                personal project that uses reactjs and google
                                adsense
                            </p>
                        </p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">
                            <a
                                className="text-[#ff5722] text-2xl"
                                href="https://github.com/eclair-29/portfolio_2022"
                                target="_blank"
                            >
                                portfolio repository
                            </a>
                            <p className="text-gray-500 text-sm">
                                portfolio project created this 2022
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
