import React from 'react'
import styled from 'styled-components'

//
import Input from '../input/Input'
import Button from '../button/Button'

export default function ResetPasswordModal({onClose}) {
  return (
    <StyledResetPasswordModal>
    <form>
    <h1>Parolni yangilash</h1>
      <Input type='password' label='Parol' w100={true}/>   
      <Input type='password' label='Parolni yangilash' w100={true}/>   
      <div className='btn_group'>
         <Button
          type="submit" 
          profileSettings={true}
          resetModalBtn={true}>
         Saqlash</Button>
         <Button
          type="button"
           profileSettings={true} 
           red={true}
           resetModalBtn={true}
           onClick={onClose}>
         Bekor qilish</Button>
      </div>
    </form>
    
    </StyledResetPasswordModal>
  )
}
const StyledResetPasswordModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
       box-shadow: 0px 2px 25px rgba(187,187,187,0.35);
       border-radius: 25px;
       padding: 30px;
       max-width: 460px;
       display: flex;
       flex-direction: column;
       gap: 24px;
       h1{
           font-size: 20px;
           font-weight: 500;
           line-height: 30px;
           letter-spacing: 0em;
           margin-bottom: 0;
       }
       .btn_group{
           display: grid;
           align-items: center;
           grid-template-columns: 1fr 1fr;
           gap: 24px;
       }
    }
`
