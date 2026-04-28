const LoginModal = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow-xl w-[320px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
        >
          ✕
        </button>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-xl font-semibold text-center">Login</legend>

          <label>Email</label>
          <input
            type="email"
            className="border px-3 py-2 rounded-md bg-white dark:bg-gray-800"
            placeholder="Email"
          />

          <label>Password</label>
          <input
            type="password"
            className="border px-3 py-2 rounded-md bg-white dark:bg-gray-800"
            placeholder="Password"
          />

          <button className="bg-black text-white py-2 rounded-md mt-3 cursor-pointer hover:bg-gray-800 transition active:bg-gray-700">
            Login
          </button>
          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              create account
            </a>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default LoginModal;
