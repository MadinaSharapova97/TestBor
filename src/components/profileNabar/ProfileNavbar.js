import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/Group36.png'
import user from '../../assets/images/user.png'


export default function ProfileNavbar() {
  return (
    <StyledProfileNavbar>
    
    <section>
     <img src={logo} alt="logo" />
    </section>
    <section>
      <h4>Navruz Nabiyev</h4>
      <img src={user} alt="user" />
    </section>
    </StyledProfileNavbar>
  )
}
const StyledProfileNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  section{
    &:last-of-type{
      display: flex;
      gap: 16px;
      align-items: center;
    }
  }
`
