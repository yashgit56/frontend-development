import { useForm } from "react-hook-form";
import "./App.css";
import FormikForm from "./components/FormikForm";

type LoginFormInputs = {
  email: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    console.log();
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                minLength: 5,
                maxLength: 50,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 50,
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <FormikForm />
    </>
  );
}

export default App;
