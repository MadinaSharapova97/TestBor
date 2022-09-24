import React from 'react'
import styled from 'styled-components'

export default function AuthCardFooter() {
  return (
    <StyledAuthCardFooter>
     <section>
         <div></div>
         <p>or</p>
         <div></div>
     </section>
     <section>
         <i className='icon icon-google'></i>
         <i className='icon icon-facebook'></i>
         <i className='icon icon-apple'></i>
     </section>
    </StyledAuthCardFooter>
  )
}
const StyledAuthCardFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    section{
        &:nth-child(1){
            display: grid;
            grid-template-columns: auto 20px auto;
            gap: 6px;
            align-items: center;

            p{
                font-size: 18px;
                font-weight: 500;
                line-height: 27px;
                letter-spacing: 0em;
                text-align: center;
            }
            div{
                height: 1px;
                background-color: #bbb;
            }
        }
        &:nth-child(2){
            display: flex;
            justify-content: center;
            gap: 30px;

            i{
                background-color: #a0a094;
            }
        }
    }
`