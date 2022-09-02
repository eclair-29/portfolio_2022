const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#e0f7fa] text-black">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-light inline text-[#ff5722] ">
                        Skills
                    </p>
                    <p className="py-4 text-[#00695c]">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="border-2 border-black">
                        <p className="my-4">ReactJS</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">React Native</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Node JS</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Express JS</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Hapi JS</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Mongo DB</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Oracle</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Redis</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Docker</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Sass</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Linux</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Shell Scripting</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">ServiceNow</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Redux</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">ETL</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">Git</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">RESTful API</p>
                    </div>
                    <div className="border-2 border-black">
                        <p className="my-4">PHP</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
