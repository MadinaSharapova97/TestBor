import React from 'react'
import styled,{css} from 'styled-components'

export default function Button({
  children,
  type,
  profileSettings,
  red,
  resetModalBtn,
  onClick,
  auth}) {
  return (
    <StyledButton 
     type={type} 
     profileSettings={profileSettings}
     red={red} 
     resetModalBtn={resetModalBtn}
     onClick={onClick}
     auth={auth}>
     {children}
    </StyledButton>
  )
}
const StyledButton = styled.button`
   border :1px solid #2b2b2b ;
   border-radius: 20px;
   background-color: transparent;
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0em;
   padding: 10px 0;
   cursor: pointer;

   ${({profileSettings}) => {
     if(profileSettings){
        return css`
       background: #18A0FB;
       border: 2px solid #FFFFFF;
       box-shadow: 0px 0px 10px rgba(24, 160, 251, 0.4);
       border-radius: 20px;
       color: #fff;
       padding: 8px 72px;
     `}
   }}
   ${({red}) => {
     if(red){
       return css`
       color: #d14e4e;
       background: #fcdfde;
       box-shadow: 0px 0px 10px #fcdfde;
       `
     }
   }}
   ${({resetModalBtn}) => {
     if(resetModalBtn)
     return css`
       padding: 8px 0px;
     `
   }}

   ${({auth}) => {
     if(auth) return css`
       width: 100%;
       border: 1px solid #18a0fb;
       padding: 16px ;
       font-size: 18px;
       line-height: 27px;
     `
   }}
`
