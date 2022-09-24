import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

export default function AuthBack() {

    const navigate = useNavigate();

 function goBack(){
   navigate(-1)
}

  return (
    <StyleduthBack onClick={goBack}>
     <i className='icon icon-arrow-base-left'></i>
     <p>Orqaga</p>
    </StyleduthBack>
  )
}
const StyleduthBack = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    i{
        width: 35px;
        height: 35px;
    }
    p{
        font-size: 25px;
        font-weight: 500;
        line-height: 38px;
        letter-spacing: 0em;

    }
`