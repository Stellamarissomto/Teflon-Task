import styled from "styled-components";
import px2vw from "../../utili/px2vw";

export const Hero = styled.div`

h1{
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: ${px2vw(34,414)};
line-height: 132.7%;
/* or 45px */

text-transform: capitalize;

color: #000000;

width: ${px2vw(361,414)};
height: ${px2vw(120,414)};

@media (min-width: 1024px){
    font-size:${px2vw(60,1440)};
    width: ${px2vw(450,1440)};
    height: ${px2vw(148,1440)};
 
}
}

p{
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size:  ${px2vw(17,414)};
line-height: 160.2%;

width: ${px2vw(362,414)};
height:${px2vw(160,414)};

text-transform: capitalize;

color: #000000;

@media (min-width: 1024px){
    font-size:${px2vw(20,1440)};
    width: ${px2vw(400,1440)};
    height: ${px2vw(166,1440)};
 
}
}

button {
background: rgba(0, 0, 0, 0.93);
border-radius:${px2vw(30,414)};
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
width: ${px2vw(364,414)};
height: ${px2vw(72,414)};
cursor: pointer;

@media (min-width: 1024px){
    font-size:${px2vw(20,1440)};
    width: ${px2vw(364,1440)};
    height: ${px2vw(62,1440)};
    margin-top: ${px2vw(30,1440)};
    border-radius:${px2vw(30,1440)};
 
}
}
`
export const Himage = styled.div`
img {
width: ${px2vw(364,414)};
height: ${px2vw(404,414)};
margin-top: ${px2vw(80,414)};

@media (min-width: 1024px){
    width: ${px2vw(580,1440)};
    height: ${px2vw(520,1440)};
    margin-top: ${px2vw(45,1440)};
    margin-left: ${px2vw(150,1440)};

}


}
`

export const Whole = styled.div`
margin-left: ${px2vw(16,414)};

@media (min-width: 1024px){
 display: flex;
 margin-left: ${px2vw(150,1440)};
 margin-top: ${px2vw(32,1440)};

 
}
`

export const Box = styled.div`
background: white;
position: absolute;
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
margin: auto;
`