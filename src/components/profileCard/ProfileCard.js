import React from 'react'
import styled from 'styled-components'


export default function ProfileCard({children}) {
  return (
    <StyledProfileCard>
   {children}
    
    </StyledProfileCard>
  )
}
const StyledProfileCard = styled.div`
    background: #fcfcfc;
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    height: max-content;
`
