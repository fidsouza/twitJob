import React from 'react'
import {useForm} from 'react-hook-form'
import { useRouter } from 'next/router'

import api from '../../Services/api'
import Link from 'next/link'


import * as S from './styled'

interface IData {
    email:string
}


const DefaultPage:React.FC= () => {

    const {NEXT_FORM_ID_CONVERTKIT} = process.env
    const router = useRouter()


    const { register, handleSubmit, errors } = useForm()
    async function onSubmit(data:IData) {
        api.post(`forms/${NEXT_FORM_ID_CONVERTKIT}/subscribe`,
                {api_key:process.env.NEXT_PUBLIC_API_KEY_CONVERTKIT
                ,email:data.email})
        router.push("/confirmation")
      }
    

    return (
    <S.Section>

        <S.Title>MeuPrimeiroJob</S.Title>
        <S.Description>receba vagas de emprego sem complição direto no seu e-mail,sem cadastro em plataformas,
        em até 240 carácteres toda a semana.</S.Description>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.InputText placeholder="Informe seu e-mail"
                         name="email"
                         ref={register({
                            required: "Insira o seu e-mail",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Insira um email válido",
                            },
                           })}/>
            {errors.email && <S.ErrorInput>E-mail inválido da um confere ai.</S.ErrorInput>}
            <Link href="/confirmation">
                <S.Submit>Receber Vagas</S.Submit>
            </Link>
            <S.Description>Respeitamos sua privacidade, você pode cancelar sua assinatura a qualquer momento.</S.Description>

        </S.FormWrapper>

    </S.Section>
    )
}

export default DefaultPage