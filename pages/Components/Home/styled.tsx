import styled from 'styled-components'

export const Section = styled.section`

 display:flex;
 flex-direction:column;
 align-items:center;
 height:100vh;
 background: linear-gradient(137deg, rgba(9,30,58,1) 0%, rgba(47,128,237,1) 49%, rgba(45,158,224,1) 100%);

`

export const Title = styled.h1`
margin-top:5rem;
color:#FFF;
font-size:2.8rem;
font-weight:700;
`

export const Description = styled.p`

margin: 1rem auto;
line-height:1.4rem;
font-size:1.1rem;
color:#FFF;
font-weight:100;
text-align:center;
padding: 0 0.40rem;

`


export const FormWrapper = styled.form`

width:350px;
max-width:350px;

`

export const InputText = styled.input`

width:100%;
height:26px;
border-radius:10px;
display:block;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border:0;
padding:2px;

::placeholder{
    font-size:0.95rem;
}

`

export const ErrorInput = styled.p`

 color:#FFF;
 font-size:1.2rem;
 padding:0.85rem 0 0 0;

`

export const Submit = styled.button`


width:100%;
height:36px;
margin-top:20px;
border:0;
color:#FFF;
text-align:center;
font-size:1.2rem;
background-color:#5B22B8;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor:pointer;
padding: 10px 20px;
border-radius:10px;

`
