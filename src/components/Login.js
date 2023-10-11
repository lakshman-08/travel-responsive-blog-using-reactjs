import "./SignupFormStyle.css";
import { useForm } from "react-hook-form";
import bgImg from "../assets/3.jpg";
import SignupForm from "../components/SignupForm";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
function login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="register">
        <div className="col-1">
          <h2>Login</h2>
          <span>Login and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="text" {...register("username")} placeholder="email" />
            <input
              type="text"
              {...register("password")}
              placeholder="password"
            />

            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button className="btn">Sign In</button>
            <p>New User Register</p>
            <Link to="/Signup">SignUp</Link>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
      <NavBar />
    </>
  );
}
export default login;
