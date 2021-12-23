import { DoubleInput, HeaderSignUp, ModalBackground, SignUpBox } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import api from "../../services";
import { useUser } from "../../providers/User/index";
import { useState } from "react";

const SignUpModal = ({ setModal }) => {
  const navigate = useNavigate();
  const { setUserInfo } = useUser();
  const [dateInput, setDateInput] = useState("text");

  const schema = yup.object().shape({
    username: yup
      .string()
      .max(12, "Tamanho máx. (12)")
      .required("Username obrigatório"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
        "Nome deve conter apenas letras."
      )
      .max(50, "Nome deve conter no máximo 50 caracteres."),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(8, "Senha com no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirmar senha obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
    birthDate: yup.date().required("Campo obrigatório"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
        "Número errado"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    await api
      .post("auth/signup", data)
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
    <ModalBackground>
      <SignUpBox>
        <HeaderSignUp>
          <h1>Cadastre-se</h1>
          <div className="close-button" onClick={() => setModal(false)}>
            <AiOutlineClose />
          </div>
        </HeaderSignUp>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DoubleInput>
            <Input
              placeholder={
                errors.username ? errors.username?.message : "Username"
              }
              register={register("username")}
              error={errors.username}
            />
            <span className="error-message">{}</span>

            <Input
              placeholder={errors.name ? errors.name?.message : "Nome"}
              register={register("name")}
              error={errors.name}
            />
          </DoubleInput>
          <Input
            placeholder={errors.email ? errors.email?.message : "E-mail"}
            type="email"
            register={register("email")}
            error={errors.email}
          />
          <DoubleInput>
            <Input
              placeholder={errors.password ? errors.password?.message : "Senha"}
              register={register("password")}
              error={errors.password}
              type="password"
            />
            <Input
              placeholder={
                errors.confirmPassword
                  ? errors.confirmPassword?.message
                  : "Confirmar senha"
              }
              register={register("confirmPassword")}
              error={errors.confirmPassword}
              type="password"
            />
          </DoubleInput>
          <DoubleInput>
            <Input
              placeholder="Data de nascimento"
              type={dateInput}
              onFocus={() => setDateInput("date")}
              register={register("birthDate")}
              error={errors.birthDate}
            />
            <Input
              placeholder={
                errors.phone ? errors.phone?.message : "Telefone (21945375155)"
              }
              register={register("phone")}
              error={errors.phone}
            />
          </DoubleInput>
          <Button type={"action"}>Confirmar</Button>
        </form>
      </SignUpBox>
    </ModalBackground>
  );
};

export default SignUpModal;
