import React, { useState } from 'react'
import styled,{css} from 'styled-components'

export default function Select({label,optins, auth}) {
const [isOpen,setIsOpen] = useState(false)
const [value, setValue] = useState('')

function clickRegion(region){
    setValue(region);
    setIsOpen(false)
}
  return (
    <StyledSelect auth={auth}>
      <section className='select_head'>
          {label ? <p className='select_label'>{label}</p> : null}
          <div className='select_displey' onClick={() => setIsOpen((p) => !p)}>
           <p>{value || (auth ? 'Viloyat' : 'Tanlang')}</p>
           <i className='icon icon-arrow-up'></i>
          </div>
      </section>
      {isOpen ? <section className='select_list'>
          <ul>
            {optins.map((i) => (
                <li key={i.id} onClick={() => clickRegion(i.name)}>{i.name}</li>
            ))}
          </ul>
      </section> : null}
    </StyledSelect>
  )
}
const StyledSelect = styled.div`
    position: relative;
    .select_head{
        .select_label{
            font-size: 16px;
            font-weight: 500px;
            line-height: 24px;
            letter-spacing: 0em;
            margin-bottom: 12px;

        }
        .select_displey{
            border: 1px solid #aaaaaa;
            border-radius: 20px;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            i{
                transform: rotate(180deg)
                
            }
        }
    }
    .select_list{
        background: #ffffff;
        box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
        border-radius: 20px;
        position: absolute;
        z-index:2; 
        width: 100%;
        left: 0;
        bottom: 0;
        transform: translateY(calc(100% + 12px));
        max-height: 250px;
        overflow-y: auto;
        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
            li{
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                line-height: 21px;
                letter-spacing: 0em;

                &:hover{
                    color: royalblue;
                }
            }
        }
    }
    ${({auth}) => {
        if(auth) {
            return css`
               .select_head{
                 .select_displey{
                     border-radius: 0;
                     border-top: none;
                     border-left: none;
                     border-right: none;
                     padding: 0 0 14px;
                 }  
               }
            `
        }
    }}
`