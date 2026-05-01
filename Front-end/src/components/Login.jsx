import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginModal = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if (!open) return null;

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          setOpen(false);

          window.location.reload();
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        toast.error("User Not Found");
      });
  };

  // console.log(watch("email"));

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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <legend className="text-xl font-semibold text-center">Login</legend>

          <label>Email</label>
          <input
            type="email"
            className="border px-3 py-2 rounded-md bg-white dark:bg-gray-800"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}

          <label>Password</label>
          <input
            type="password"
            className="border px-3 py-2 rounded-md bg-white dark:bg-gray-800"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />

          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          <button className="bg-black text-white py-2 rounded-md mt-3 cursor-pointer hover:bg-gray-800 transition active:bg-gray-700">
            Login
          </button>
          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
