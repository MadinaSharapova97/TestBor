import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
//
import ProfileNavbar from '../components/profileNabar/ProfileNavbar'
import ProfileSidebar from '../components/profileSidebar/ProfileSidebar'

export default function ProfileLayout() {
  return (
    <div className='container'>
      <StyledProfileLayout>
        <ProfileNavbar />
        <div className='profile_layout_main'>
          <ProfileSidebar />
          <Outlet />
        </div>

      </StyledProfileLayout>
    </div>

  )
}
const StyledProfileLayout = styled.div`
  .profile_layout_main{
    display: flex;
    gap: 40px;
    margin-top: 50px;
    padding-bottom: 2rem;
  }
`
