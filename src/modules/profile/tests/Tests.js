import React from 'react'
import styled from 'styled-components'
import ProfileCard from '../../../components/profileCard/ProfileCard'

export default function Tests() {
  return (
    <ProfileCard>
      <StyledTests>
        <h1>Virtual imtihon natijalari</h1>
        <footer>
          <section>
            <h2>Assosiy fanlar</h2>
            <div className='table_div'>
              <div>
                <h3>Birinchi fan</h3>
                <p>21.7 <br /> 7 / 23%</p>
              </div>
              <div>
                <h3>Ikkinchi fan</h3>
                <p>18.9 <br />9 / 30%</p>
              </div>
              <div>
                <h3>Ball</h3>
                <p>50.5 <br />25/ 28%</p>
              </div>
              <div>
                <h3>Vaqt</h3>
                <p>149 <br />Minut</p>
              </div>
            </div>
          </section>
          <section>
            <h2>Majburiy fanlar</h2>
            <div className='table_div'>
              <div>
                <h3>Birinchi fan</h3>
                <p>21.7 <br /> 7 / 23%</p>
              </div>
              <div>
                <h3>Ikkinchi fan</h3>
                <p>18.9 <br />9 / 30%</p>
              </div>
              <div>
                <h3>Ball</h3>
                <p>50.5 <br />25/ 28%</p>
              </div>
              <div>
                <h3>Vaqt</h3>
                <p>149 <br />Minut</p>
              </div>
            </div>
          </section>
        </footer>
      </StyledTests>
    </ProfileCard>
  )
}
const StyledTests = styled.div`
  h1{
    font-size: 25px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    margin-bottom: 26px;

  }
  footer{
    display: flex;
    flex-direction: column;
    gap: 30px;
    section{
      h2{
         font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        color: #18A0FB;
        margin-bottom: 10px;
      }
      .table_div{
        display: flex;
        gap: 55px;
        div{
          h3{
            font-size: 18px;
            font-weight: 500;
            line-height: 27px;
            letter-spacing: 0em;
            border-left: 1px solid #aaaaaa;
            padding-left: 20px;
            padding: 9px 0 9px 20px;
            margin-bottom: 21px;

          }
          p{
            font-size: 18px;
            font-weight: 500;
            line-height: 27px;
            letter-spacing: 0em;
            padding: 0 0 0 20px;
            border-left: 1px solid #aaaaaa;

          }
          &:nth-child(1){
            h3,p{
              border: none;
            padding-left: 0; 
            }
           
          }
        }
      }
    }
  }
` 
