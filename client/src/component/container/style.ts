import styled from "styled-components";
import px2vw from "../../utili/px2vw";



export const Card = styled.div`
background: #FAFAFA;
width: 90%;
height: ${px2vw(406,414)};
margin: 0 auto;
margin-top: 10%;

@media (min-width: 1024px){
    width: ${px2vw(486,1440)};
    height: ${px2vw(472,1440)};
    margin-top: 3%;
 
}

`