import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Register = () => {
  const [authUser, setAuthUser] = useAuth(); // ✅ important
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ✅ get previous route or fallback
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        // if (res.data) {
        //   toast.success("SignUp Successfully");
        //   navigate(from, { replace: true });
        // }
        // localStorage.setItem("User", JSON.stringify(res.data.user));

        if (res.data?.user) {
          // ✅ set auth state
          setAuthUser(res.data.user);

          // ✅ store in localStorage
          localStorage.setItem("User", JSON.stringify(res.data.user));

          toast.success("SignUp Successfully");

          // ✅ navigate AFTER state update
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("User Already Exist");
      });
  };

  return (
    <div className="w-full fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow-xl w-[320px] relative">
        {/* Close */}
        <Link to="/">
          <button className="absolute font-bold top-3 right-4 text-gray-500 hover:text-red-500 cursor-pointer">
            ✕
          </button>
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <legend className="text-xl font-semibold text-center">
            Register
          </legend>

          {/* Name */}
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className={`border px-3 py-2 rounded-md ${
              errors.fullname ? "border-red-500" : ""
            }`}
            {...register("fullname", {
              required: "Full Name is required",
              minLength: {
                value: 3,
                message: "Full Name must be at least 3 characters",
              },
            })}
          />
          {errors.fullname && (
            <span className="text-red-500 text-sm">
              {errors.fullname.message}
            </span>
          )}

          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className={`border px-3 py-2 rounded-md ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className={`border px-3 py-2 rounded-md ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          <button className="bg-black text-white py-2 rounded-md mt-3 cursor-pointer hover:bg-gray-800 active:bg-gray-600">
            Create Account
          </button>

          <p className="text-sm text-center text-gray-500">
            Have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
