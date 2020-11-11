import React from 'react'
import {useForm} from 'react-hook-form'
import Image from 'next/image'


import api from '../../Services/api'

import * as S from './styled'

const DefaultPage = () => {

    const { register, handleSubmit, errors } = useForm();
    function onSubmit(data) {
        console.log("Data submitted: ", data.email);
      }
    

    return (
    <S.Section>

        <S.Title>TwitJob</S.Title>
        <S.Description>receba vagas de emprego sem complição direto no seu e-mail,sem cadastro em plataformas,
        em apenas 140 carácteres toda a semana.</S.Description>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.InputText placeholder="digite seu e-mail"
                         name="email"
                         ref={register({
                            required: "Enter your e-mail",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Enter a valid e-mail address",
                            },
                           })}/>
            {errors.email && <S.ErrorInput>E-mail inválido da um confere ai.</S.ErrorInput>}

            <S.Submit>Receber Vagas</S.Submit>
        </S.FormWrapper>

    </S.Section>
    )
}

export default DefaultPage