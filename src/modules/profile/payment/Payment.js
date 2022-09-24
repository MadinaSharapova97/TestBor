import React from 'react'
import styled from 'styled-components'
import ProfileCard from '../../../components/profileCard/ProfileCard'

export default function Payment() {
  return (
  <ProfileCard>
    <StyledPayment>
         <h1>To'lov tarixi</h1>
         <footer>
           <section>
             <div>
               <h2>Asosiy balans</h2>
               <p>150 000 so’m</p>
             </div>
             <div>
             <h2>Bonuslarim</h2>
               <p>100 000 so’m</p>
             </div>
             <div>
             <h2>Pul yutuqlarim</h2>
               <p>1000 000 so’m</p>
             </div>
           </section>
         </footer>
    </StyledPayment>
  </ProfileCard>
  )
}
const StyledPayment = styled.div`
  h1{
    
     font-size: 25px;
     font-weight: 500;
     line-height: 38px;
     letter-spacing: 0em;
     text-align: left;

  }
  footer{
    section{
      display: flex;
      gap: 80px;
      div{
        h2,p{
          font-size: 18px;
          font-weight: 500;
          line-height: 27px;
          letter-spacing: 0em;
          border-left: 1px solid #aaaaaa;
          padding: 9px 0 9px 20px;         

        }
        h2{
          margin-bottom: 22px;

        }
        &:nth-child(1){
          h2,p{
            padding-left:0 ;
            border: none;
          }
        }
      }
    }
  }
`
