/**
 *   @Author Daniel (yu hong) Kim
 **/
import styled from "styled-components";

export default styled.button`
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background: 0 0;
    border: 0;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 8px;
    outline: none;
    
    &:first-child{
      margin-left: -8px;
    }
`;