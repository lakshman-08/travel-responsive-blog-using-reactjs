import "./SignupFormStyle.css";
import { useForm } from "react-hook-form";
import bgImg from "../assets/3.jpg";
import login from "./Login";
import { Link } from "react-router-dom";
function SignupForm() {
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
          <h2>Sign Up</h2>
          <span>register and enjoy the service</span>

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
            <input
              type="text"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            <input
              type="text"
              {...register("mobile", { required: true, maxLength: 10 })}
              placeholder="mobile number"
            />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button className="btn">Sign Up</button>
            <p>Already having account</p>
            <Link to="/login">Login</Link>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </>
  );
}
export default SignupForm;
