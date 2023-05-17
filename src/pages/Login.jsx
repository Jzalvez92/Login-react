import "./login.css";
import { useContext } from "react";
import { JwtContext } from "../context/JwtContext";
import { useForm } from "react-hook-form";
import { Api } from "../services/Api";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);
  const onSubmit = (FormData) => {
    Api.post("login", FormData).then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", res.data.user);
      setJwt(localStorage.getItem("token"));
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        <label htmlFor="password">Contraseña::</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
