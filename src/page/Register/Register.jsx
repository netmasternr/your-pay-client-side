import { Helmet } from "react-helmet";

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>

            <section className="dark:bg-gray-900">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-gray-100 dark:bg-gray-800 flex items-center w-full max-w-2xl p-8 mx-auto lg:px-12 lg:w-3/5 rounded-lg shadow-lg">

                        <form className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your account now.
                            </h1>

                            <div className="mt-6 flex items-center gap-5">
                                <select className="select w-full max-w-xs">
                                    <option disabled selected>Select type of account</option>
                                    <option>user</option>
                                    <option>agent</option>
                                </select>
                            </div>

                            <div>
                                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Name</label>
                                        <input name="name" type="text" placeholder="name" className="block w-full px-5 py-3 mt-2 text-gray-800 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-50" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Pin</label>
                                        <input name="pin" type="text" placeholder="Pin number" className="block w-full px-5 py-3 mt-2 text-gray-800 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-50" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Phone number</label>
                                        <input name="phone" type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-800 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-50" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Email address</label>
                                        <input name="email" type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-800 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-50" />
                                    </div>

                                </div>

                                <div className="flex items-center justify-center mt-6 w-full">
                                    <button type="submit" className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        <span>Sign Up </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
