import styled,{ keyframes } from 'styled-components'
import media from "styled-media-query";


export const Section = styled.section`

 display:flex;
 flex-direction:column;
 align-items:center;
 height:100vh;
 background: url('/backgroundImg.jpg');
 background-repeat:no-repeat;
 background-size:250vh;
 background-position:center;

 ${media.lessThan("large")`
    /* screen width is less than 768px (medium) */
    background-position:center;
    background-size:180vh;

  `}

`

export const Title = styled.h1`
margin-top:7rem;
color:#FFF;
font-size:2.8rem;
font-weight:700;
`

export const Description = styled.p`

margin: 1rem auto;
line-height:1.4rem;
font-size:1.1rem;
color:#FFF;
font-weight:200;
text-align:center;
padding: 0 0.40rem;

`


export const FormWrapper = styled.form`

width:350px;

${media.lessThan("large")`
    /* screen width is less than 768px (medium) */
    width:250px;
  `}

`

export const InputText = styled.input`

width:100%;
height:4rem;
border-radius:4px;
display:block;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size:1.2rem;
text-align:center;
outline: none;


&:focus{
   border: 3px solid rgb(130, 87, 230);

}

::placeholder{
    font-size:1rem;
    padding:10px;

}


`

export const ErrorInput = styled.p`

 color:#FFF;
 font-size:1.2rem;
 padding:0.85rem 0 0 0;

`

export const Submit = styled.button`

width:100%;
height:4rem;
margin-top:20px;
border:0;
color:#000;
text-align:center;
font-size:1.2rem;
background-color:#7FFFD4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor:pointer;
padding: 10px 20px; 
border-radius:4px;

&:hover{
    background:#5B22B8;
    transition-duration:.3s;
    color:#FFF;
}

`
