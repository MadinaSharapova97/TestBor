import React from 'react'
import styled from 'styled-components'

import user from '../../../../assets/images/user2.png'

export default function Right() {
  return (
    <StyledRight>
         <div className='img_wrapper'>
             <img src={user} alt="user" />
         </div>
         <div className='title_wrapper'>
             <h1>To’plangan ball: 120.89</h1>
         </div>
    </StyledRight>
  )
}
const StyledRight = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;
    .img_wrapper{
        padding-right: 35px;
    }
    .title_wrapper{
        padding-bottom: 14px;
        border-bottom: 1px solid #000;
        padding-right: 41px;
    h1{
       font-size: 16px;
       font-weight: 500;
       line-height: 24px;
       letter-spacing: 0em;

        }
    }
`
