import { FormBoxLogin, FormPage } from "../../components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import api from "../../services";
import { Input } from "../../components/Input";
import logo from "../../assets/img/webSpace-logo.png";
import Button from "../../components/Button";
import { useUser } from "../../providers/User/index";
import SignUpModal from "../../components/SignUpModal";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUser();
  const [SignUp, setSignUp] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    await api
      .post("auth/signin", data)
      .then((response) => {
        setUserInfo(response.data.user);
        toast.success(`Bem vindx, ${response.data.user.username}!`);
        localStorage.setItem(
          "@webspace:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@webspace:id",
          JSON.stringify(response.data.user._id)
        );
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Ops, algo de errado aconteceu!");
      });
  };

  return (
    <>
      {SignUp && <SignUpModal setModal={setSignUp} />}
      <FormPage>
        <aside className="app-info">
          <div className="aside-content">
            <div className="title">
              <img src={logo} alt="logo" />
              <h1>WebSpace</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              laudantium cupiditate, fuga veritatis magni voluptates et rerum
              nihil maxime molestiae, blanditiis totam sapiente aliquam incidunt
              expedita, debitis architecto odio eius.
            </p>
          </div>
        </aside>
        <FormBoxLogin className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="E-mail"
              register={register("email")}
              error={errors.email}
            />
            <span className="error-message">{errors.email?.message}</span>

            <Input
              placeholder="Senha"
              register={register("password")}
              type="password"
              error={errors.password}
            />
            <span className="error-message">{errors.password?.message}</span>
            <Button type={"signin"}>Entrar</Button>
            <Link to="#">Esqueceu a senha?</Link>
            <hr />
          </form>
          <Button onClick={() => setSignUp(true)} type={"action"}>
            Cadastre-se
          </Button>
        </FormBoxLogin>
      </FormPage>
    </>
  );
};

export default Login;
