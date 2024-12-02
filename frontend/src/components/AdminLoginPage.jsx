

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700  font-bold mb-2">
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              className="shadow appearance-none border rounded w-full h-[62px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full h-[62px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="admin-id" className="block text-gray-700 font-bold mb-2">
              Admin ID Number
            </label>
            <input
              type="text"
              id="admin-id"
              className="shadow appearance-none border rounded w-full h-[62px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
          </div>
          <div className="mt-2 mb-4 ml-20 text-center text-right text-gray-500">
          <a href="#" className="text-gray-700 font-bold text-right">
            Forgot Password?
          </a>
        </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
        </form>
       
        
        <div className="mt-4 text-gray-500 text-center text-sm justify-center items-center">
          <span className="text-center">login to access admin dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;