import React from 'react'
import styled from 'styled-components'
import ProfileCard from '../../../components/profileCard/ProfileCard'
import Left from './section/Left'
import Right from './section/Right'

export default function Settings() {
  return (
    <ProfileCard>
      <StyledSettings>
        <Left/>
        <Right/>
      </StyledSettings>
    </ProfileCard>

    
  )
}
const StyledSettings = styled.div`
    display: flex;
    justify-content: space-between;
    
`
