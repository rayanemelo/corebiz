import React, { useState, useCallback, useRef } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "A rua deve ter no mínimo 3 caracteres")
      .required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
  })
  .required();

export const NewsLetters = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    setSuccess(true);
  };
  return (
    <div className="news-letter">
      {success ? (
        <>
          <h2>Seu e-mail foi cadastrado com sucesso!</h2>
          <p>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>
          <Button
            text="Cadastrar novo e-mail"
            onClick={() => setSuccess(false)}
          />
        </>
      ) : (
        <>
          <h1>Participe de nossas news com promoções e novidades!</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input {...register("name")} placeholder="Digite seu nome" />
              {/* <p>{errors.name?.message}</p> */}
            </div>
            <div>
              <input {...register("email")} placeholder="Digite seu email" />
              {/* <p>{errors.email?.message}</p> */}
            </div>
            <Button text="Eu quero!" />
          </form>
        </>
      )}
    </div>
  );
};
