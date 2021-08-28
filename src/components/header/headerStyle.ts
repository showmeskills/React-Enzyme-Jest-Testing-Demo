import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:block;
    width:100%;
    height:50px;
    margin:0 auto;
    padding:0 10px;
    background-color:black;
    .wrap{
        position:relative;
        display:block;
        width:100%;
        height:100%;
        margin:0 auto;
        max-width:980px;
        .logo{
            display:block;
            width:250px;
            position:absolute;
            left:10px;
            top:50%;
            transform:translateY(-50%);
            img{
                width:20%;
                margin:0;
            }
        }
    }
`
