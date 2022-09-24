import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//
import AuthBack from '../../../components/authBack/AuthBack'
import AuthCard from '../../../components/authCard/AuthCard'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import AuthCardFooter from '../../../components/authCardFooter/AuthCardFooter'

export default function Login() {
    return (
        <StyledLogin>
            <div className="container">
                <main className='login_main'>
                    <section>
                        <AuthBack />
                    </section>
                    <section>
                        <form>
                            <AuthCard>
                                <h1>Kirish</h1>
                                <div className='input_group'>
                                    <Input type='text' auth={true}
                                        placeholder='email or phone number' />
                                    <Input type='password' auth={true}
                                        placeholder='Password' />
                                </div>
                                <Button type='submit' auth={true}>Kirish</Button>
                                <div className='card_link'>
                                    <Link to='/auth/register'>Ro'yxatdan o'tish</Link>
                                </div>
                                <AuthCardFooter />
                            </AuthCard>
                        </form>
                    </section>
                </main>
            </div>
        </StyledLogin>
    )
}
const StyledLogin = styled.div`
    padding:70px 0;
    .login_main{
        display: flex;
        flex-direction: column;
        gap: 120px;
       section{
           form{
               max-width: 450px;
               margin: 0 auto;

               h1{
                   font-size: 35px;
                   font-weight: 500;
                   line-height: 53px;
                   letter-spacing: 0em;
                   margin-bottom: 50px;
               }
               .input_group{
                   display: flex;
                   flex-direction: column;
                   gap: 40px;
                   margin-bottom: 40px;
               }
               .card_link{
                   margin: 14px 0 18px;
                   a{
                       text-decoration: none;
                       color: #000;
                       font-size: 16px;
                       font-weight: 500;
                       line-height: 24px;
                       letter-spacing: 0em;
                   }

               }
           }
       }
    }
`
