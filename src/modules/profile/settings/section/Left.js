import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//
import Input from '../../../../components/input/Input'
import Select from '../../../../components/select/Select'
import Button from '../../../../components/button/Button'
import Radio from '../../../../components/radio/Radio'
import ResetPasswordModal from '../../../../components/select/ResetPasswordModal'
//
export const regions = [
    {
        id: 1,
        name: 'Tashkent'
    },
    {
        id: 2,
        name: 'Navoiy'
    },
    {
        id: 3,
        name: 'Samarqand'
    },
    {
        id: 4,
        name: "Farg'ona"
    },
]

export default function Left() {
     
    const [isModalOpen, setIsModaOpen] = useState(false)

    useEffect(() => {
     if(isModalOpen){
         document.body.style.overflow = 'hidden'
     }else{
        document.body.style.overflow = 'auto'
     }
    },[isModalOpen])

    return (
        <StyledLeft>
            <h1>O'quvchi haqida ma'lumot</h1>
            <form>
                <Input type='text' label="To'liq ism" />
                <Input type='text' label="Telefon raqam" />
                <Input type='text' label="Username" />
                <Select label='Viloyat' optins={regions} />
                <Input type='password' label="Parol" />
                <Button type='button'
                 onClick={() => setIsModaOpen(true)}
                >Parolni yangilash</Button>
                <Radio label='Jinsi' />
                <div>
                    <Button type='submit' profileSettings={true}>Saqlash</Button>
                </div>
            </form>
            
            {isModalOpen ? <ResetPasswordModal onClose={() => setIsModaOpen(false)}/> : null}
        </StyledLeft>
    )
}
const StyledLeft = styled.section`
   h1{
       font-size: 25px;
       font-weight: 500;
       line-height: 38px;
       letter-spacing: 0em;
       margin-bottom: 30px;
   }
   form{
       display: flex;
       flex-direction: column;
       gap: 25px;
   }

`
