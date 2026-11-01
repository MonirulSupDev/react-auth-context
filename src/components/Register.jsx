import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setRegisterSuccess("");
    setRegisterError("");

    if (!terms) {
      setRegisterError("You must accept the Terms and Conditions to register.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterSuccess("User created successfully!");
        e.target.reset();
        navigate("/");
        toast.success("User registered successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="w-full min-h-[70vh] bg-sky-100 flex justify-center">
      <form className="my-10" onSubmit={handleRegister}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl">
          <legend className="fieldset-legend text-lg">Register</legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
            required
          />

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
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}"
            title="Must contain uppercase, lowercase, number, special character and at least 8 characters."
          />
          <label className="label">
            <input type="checkbox" name="terms" className="checkbox" />
            Accept our{" "}
            <Link to="" className="hover:underline">
              Terms and Conditions
            </Link>
          </label>

          <button className="btn btn-neutral mt-4 ">Register</button>
          {registerSuccess && (
            <p className="text-green-600">{registerSuccess}</p>
          )}
          {registerError && <p className="text-red-600">{registerError}</p>}
          <p>
            Already have an account? Please{" "}
            <Link to="/login" className="text-blue-600 text-sm hover:underline">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
