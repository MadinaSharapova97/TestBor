import React, { useState } from 'react'
import styled from 'styled-components'

export default function Radio({label}) {
    const [value, setValue] = useState('male')
  return (
    <StyledRadio>
        {label ? <p className='radio_label'>{label}</p> : null}
        <section className='radio_bottom'>
            <div className='radio_item' onClick={() => setValue('male')}
            >
            <div className='radio_item_circle'>
                {value === 'male' ? <div></div> : null}
            </div>
            <p>Erkak</p>
            </div>
            <div className='radio_item' onClick={() => setValue('female')}>
            <div className='radio_item_circle'>
            {value === 'female' ? <div></div> : null}
                
            </div>
            <p>Ayol</p>
            </div>
        </section>
    </StyledRadio>
  )
}
const StyledRadio = styled.div`
    .radio_label{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        margin-bottom: 12px;
    }
    .radio_bottom{
        display: flex;
        gap: 40px;
      .radio_item{
          display: flex;
          /* align-items: center; */
          gap:14px ;
          width: max-content;
          cursor: pointer;

          &_circle{
              display: inline-block;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: 2px solid #000;
              display: grid;
              place-items: center;
              & > div{
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: #000;

              }
          }
          p{
              font-size: 16px;
              font-weight: 500;
              line-height: 24px;
              letter-spacing: 0em;
          }
      }
    }
`
