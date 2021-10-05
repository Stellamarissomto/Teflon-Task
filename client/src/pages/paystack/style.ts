import styled from "styled-components";
import px2vw from "../../utili/px2vw";



export const Head = styled.div`
display: flex;

img{
    flex: 70%;
    width: ${px2vw(130,414)};
    height: ${px2vw(100,414)};

    @media (min-width: 1024px){
        width: ${px2vw(242,1440)};
        height: ${px2vw(119,1440)};
     
    }
}

p{
flex: 30%;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size:  ${px2vw(17,414)};
line-height: 160.2%;
margin-top: ${px2vw(40,414)};

text-transform: capitalize;

color: #000000;

@media (min-width: 1024px){
    font-size:${px2vw(20,1440)};
    margin-top: ${px2vw(40,1440)};

}
}
`


export const Form = styled.div`
text-align: center;
`

export const Input = styled.input`
width: 80%;
height: ${px2vw(45,414)};
margin-bottom: ${px2vw(32,414)};
border: none;
outline: none;

@media (min-width: 1024px){
    margin-bottom: ${px2vw(32,1440)};
    height: ${px2vw(45,1440)};
 
}

`

export const Inner = styled.div`
dispaly: flex;

input {
    width: 30%;
    height: ${px2vw(45,414)};
    margin-right: ${px2vw(32,414)};
    border: none;
    outline: none;
}


@media (min-width: 1024px){
   input {
    height: ${px2vw(45,1440)};
    margin-right: ${px2vw(32,1440)};

   }
  
 
}
`

export const Button = styled.button`

background: #71C587;
border-radius:${px2vw(10,414)};
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: ${px2vw(20,414)};
line-height: 160.2%;
/* identical to box height, or 48px */
border:none;

text-transform: capitalize;
margin-top: ${px2vw(30,414)};
color: #FFFFFF;
width: 80%;
height: ${px2vw(45,414)};
cursor: pointer;

@media (min-width: 1024px){
    font-size:${px2vw(20,1440)};
    height: ${px2vw(45,1440)};
    margin-top: ${px2vw(30,1440)};
    border-radius:${px2vw(10,1440)};
 
}
`