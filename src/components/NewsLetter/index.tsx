import React, { useState, useCallback, useRef } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";
import axios from "axios";
import Loader from "../Loader";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "O nome deve ter no mínimo 3 caracteres")
      .required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
  })
  .required();

type IFormProps = { name: string; email: string };

export const NewsLetters = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    axios
      .post("https://corebiz-test.herokuapp.com/api/v1/newsletter", data)
      .then((res) => {
        setSuccess(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
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
                <span>{errors.name?.message}</span>
              </div>
              <div>
                <input {...register("email")} placeholder="Digite seu email" />
                <span>{errors.email?.message}</span>
              </div>
              <Button text="Eu quero!" disabled={loading} />
            </form>
          </>
        )}
      </div>
    </>
  );
};
