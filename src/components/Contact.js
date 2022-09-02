const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[#e0f7fa] flex justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://reqres.in/api/users"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline text-[#ff5722]">
                        Contact
                    </p>
                    <p className="text-[#00695c] py-4">
                        Submit the form below or shoot me an email -
                        miguel.dechavez.48@gmail.com
                    </p>
                </div>
                <input
                    className="my-4 p-2 bg-[#ccd6f6] border-2 border-black"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-2 border-2 border-black"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-black border-2 border-black px-4 py-3 my-8 mx-auto flex items-center">
                    Let's Connect!
                </button>
            </form>
        </div>
    );
};

export default Contact;
