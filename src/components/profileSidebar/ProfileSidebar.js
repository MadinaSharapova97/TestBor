import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'


export default function ProfileSidebar() {
  const location = useLocation()
  return (
    <StyledProfileSidebar>
      <ul>
        <li>
          <Link to='/profile/tests'
            className={location.pathname === '/profile/tests' ? 'active' : ''}>
            <i className='icon icon-tests'></i>
            <p>Testlar</p>
          </Link>
        </li>
        <li>
          <Link to='/profile/achievment'
            className={location.pathname === '/profile/achievment' ? 'active' : ''}>
            <i className='icon icon-achievments'></i>
            <p>Yutuqlar</p>
          </Link>
        </li>
        <li>
          <Link to='/profile/payment'
            className={location.pathname === '/profile/payment' ? 'active' : ''}>
            <i className='icon icon-payment'></i>
            <p>To'lov tarixi</p>
          </Link>
        </li>
        <li>
          <Link to='/profile/settings'
            className={location.pathname === '/profile/settings' ? 'active' : ''}>
            <i className='icon icon-settings'></i>
            <p>Sozlamalar</p>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='icon icon-logout'></i>
            <p>Chiqish</p>
          </Link>
        </li>
      </ul>
    </StyledProfileSidebar>
  )
}
const StyledProfileSidebar = styled.div`
  background: #fcfcfc;
  padding: 40px 30px;
  min-height: calc(100vh - 160px);
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    li{
      a{
        display: flex;
        /* align-items: center; */
        gap: 18px;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0em;
        color: #000;
        text-decoration: none;
       
        &.active{
          color: #18a0fb;
         i{
            background-color: #18a0fb;
          }
        }
      }
    }
  }
`
