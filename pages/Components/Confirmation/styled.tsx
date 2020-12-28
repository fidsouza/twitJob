import styled from 'styled-components'
import media from "styled-media-query";


export const Section = styled.section`

 display:flex;
 flex-direction:column;
 align-items:center;
 height:100vh;
 background: #F2f2f2;



`
export const Title = styled.h1`
margin-top:4rem;
color:#000;
font-size:2.8rem;
font-weight:700;
text-align:center;
${media.lessThan("large")`
    /* screen width is less than 768px (medium) */
    font-size:1.8rem;
    padding:2rem;
  `}
`
export const Description = styled.p`

margin: 1rem auto;
line-height:1.4rem;
font-size:1.5rem;
color:#000;
font-weight:200;
text-align:center;
padding: 0 0.40rem;

`

