import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signup, login } = useContext(ShopContext);
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let success = false;
    if (state === "Sign Up") {
      if (!formData.username || !formData.email || !formData.password) {
        alert("Please fill all fields");
        return;
      }
      success = signup(formData);
    } else {
      success = login(formData.email, formData.password);
    }

    if (success) {
      alert(`${state} Successful!`);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-[1200px] bg-[var(--bg-color)] px-4 py-20">
      <div className="w-full max-w-md mx-auto bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--heading-color)] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--btn-color)] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>

        <div className="relative">
          <h1 className="text-4xl font-bold text-[var(--heading-color)] mb-2">
            {state}
          </h1>
          <p className="text-[var(--text-secondary)] mb-8">
            {state === "Sign Up"
              ? "Create your account to start shopping"
              : "Welcome back! Please login to your account"}
          </p>

          <div className="flex flex-col gap-5">
            {state === "Sign Up" && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[var(--text-color)] ml-1">Full Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={changeHandler}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all placeholder:text-[var(--text-secondary)]/50"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-color)] ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all placeholder:text-[var(--text-secondary)]/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-color)] ml-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all placeholder:text-[var(--text-secondary)]/50"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-8 bg-[var(--btn-color)] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-[0.98] transition-all"
          >
            Continue
          </button>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm">
            <span className="text-[var(--text-secondary)]">
              {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button
              onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
              className="text-[var(--heading-color)] font-bold hover:underline underline-offset-4"
            >
              {state === "Login" ? "Register here" : "Login here"}
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-4 mb-3">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded border-[var(--border-color)] text-[var(--btn-color)] focus:ring-[var(--btn-color)]" />
              <label htmlFor="terms" className="text-xs text-[var(--text-secondary)]">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
