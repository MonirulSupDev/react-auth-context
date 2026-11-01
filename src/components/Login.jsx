import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoginError("");
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast.success("Logged in successfully!", {
          position: "top-center",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in with Google successfully!", {
          position: "top-center",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="w-full min-h-[70vh] bg-emerald-100 flex justify-center">
      <form className="my-10" onSubmit={handleLogin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl">
          <legend className="fieldset-legend text-lg">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            autoComplete="nope"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            autoComplete="new-password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="italic font-semibold text-center text-base">or</p>
          <button
            type="button"
            className="btn btn-neutral bg-blue-700 border-blue-700"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
          {loginError && <p className="text-red-600">{loginError}</p>}
          <p>
            New here? Please{" "}
            <Link
              to="/register"
              className="text-blue-600 text-sm hover:underline"
            >
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
