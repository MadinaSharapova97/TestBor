import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//
import AuthBack from '../../../components/authBack/AuthBack'
import AuthCard from '../../../components/authCard/AuthCard'
import Button from '../../../components/button/Button'
import AuthCardFooter from '../../../components/authCardFooter/AuthCardFooter'
import Input from '../../../components/input/Input'
import Radio from '../../../components/radio/Radio'
import Select from '../../../components/select/Select'
import { regions } from '../../profile/settings/section/Left'

export default function Register() {
  return (
    <StyledRegister>
      <div className="container">

        <main className='register_main'>
          <section>
            <AuthBack />
          </section>
          <section>
            <form>
              <AuthCard>
                <h1>Ro'yhatdan o'tish</h1>
                <div className='input_group'>
                  <Input type='text' placeholder='Full name' auth={1} />
                  <Input type='email' placeholder='Email or phone' auth={1} />
                  <Input type='text' placeholder='Username' auth={1} />
                  <Select optins={regions} auth={1} />
                  <Input type='password' placeholder='Password' auth={1} />
                  <Radio />
                  <Button type='submit' auth={1}>Ro'yhatdan o'tish</Button>
                </div>
                <div className='login_link'>
                  <Link to='/auth/login'>Hisobingiz bormi? Kirish</Link>
                </div>
                <AuthCardFooter />
              </AuthCard>
            </form>
          </section>
        </main>
      </div>

    </StyledRegister>
  )
}
const StyledRegister = styled.div`
    .register_main{
        padding: 70px 0;

        section{
          form{
            max-width: 450px;
            margin: 0 auto;
            margin-top: 80px;

            h1{
              margin-bottom: 50px;
              font-size: 35px;
              font-weight: 500;
              line-height: 53px;
              letter-spacing: 0em;
            }

            .input_group{
              display: flex;
              flex-direction: column;
              gap: 40px;
            }
            .login_link{
              margin: 14px 0 18px;
              a{
                text-decoration: none;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0em;
                color: #000;
              }
            }
          }
        }
    }
`
