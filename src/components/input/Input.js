import React, { useState } from 'react'
import styled,{css} from 'styled-components'
import { v4 } from 'uuid'

export default function Input({ 
    label,
    value, 
    onChange, 
    type,
    w100,
    auth,
    placeholder}) {
    let uuid = v4()
    const [isHide, setIsHide] = useState(true)

    function toggleIsHide(){
        setIsHide((p) => !p)
    }

    return (
        <StyledInput w100={w100} auth={auth}>
            {label ? <label htmlFor={uuid}>{label}</label> : null}
            <div className='input_wrapper'>
                <input type={isHide ? type : 'text'}
                 id={uuid} 
                 value={value} 
                 onChange={onChange}
                 placeholder={placeholder} />
                {type === 'password' ? (
                    <i className={'icon icon-eye-' + (isHide ? 'close' : 'open')}
                    onClick={toggleIsHide}
                    ></i>
                ) : null}
            </div>

        </StyledInput>
    )
}
const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    label{
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0em;
    }
    .input_wrapper{
        position: relative;

        i{
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
        }
        input{
        border: 1px solid #aaaaaa;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        padding: 10px 20px;
        min-width: 360px;
        width: 100%;
        &:focus{
            outline: none;
        }
       
    }
    ${({w100}) => {
            if(w100){
                return css`
                    width: 100%;
                `
            }
        }}
           ${({auth}) => {
            if(auth){
                return css`
 
                    i{
                        right: 12px;
                    }

                    input{
                        border-radius: 0;
                        padding: 0 0 14px 0;
                        border-right: none;
                        border-left: none;
                        border-top: none;

                    }
                `
            }
        }}
    }
    
`