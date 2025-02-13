import { useDispatch, useSelector } from "react-redux";
import { saveUserInfo } from "../redux/userSlice";
import { stopStartLoading } from "../redux/appSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const dispatch = useDispatch();

  console.log(userState);

  const _onClick = () => {
    dispatch(stopStartLoading(false));

    const userInfo = {
      name: userState.name,
      email: userState.email,
    };
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(saveUserInfo({ name: formData.name, email: formData.email, password: formData.password, number: formData.number }));
    navigate("./Profile");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <header className="bg-primary text-white p-3 text-center">
          <h2>My App</h2>
        </header>

        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow" style={{ width: "350px" }}>
            <h3 className="text-center">Sign Up</h3>

            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>

            <p className="text-center mt-2">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
