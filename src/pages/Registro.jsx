import { useForm } from "react-hook-form";
import { Api } from "../services/Api";


const Registro = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (FormData) => {
    // console.log(FormData);
    Api.post("users/register", FormData).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  };
  return (
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
  );
};

export default Registro;
