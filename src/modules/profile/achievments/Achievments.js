import React, { useState } from 'react'
import ProfileCard from '../../../components/profileCard/ProfileCard'
import styled from 'styled-components'

let arr = [
  {
    id: 1,
    title: 'test #1',
    date: '23/04/2022',
    ball: '30.0 / 270.0',
    result: [
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
    ],
  },
  {
    id: 2,
    title: 'test #2',
    date: '23/04/2022',
    ball: '30.0 / 270.0',
    result: [
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
    ],
  },
  {
    id: 3,
    title: 'test #3',
    date: '23/04/2022',
    ball: '30.0 / 270.0',
    result: [
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
    ],
  },
  {
    id: 4,
    title: 'test #4',
    date: '23/04/2022',
    ball: '30.0 / 270.0',
    result: [
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
      'Blok #1 <br/> 29 / 30',
    ],
  },
]

export default function Achievments() {
  const [currentId, setCurrentId] = useState(null)
  function openBlock(id){
    if(currentId === id){
      setCurrentId(null)
      return;
    }
       setCurrentId(id)
  }
  return (
    <ProfileCard>
      <StyledAchievments>
        <h1>Testlar</h1>
        <footer>
          {arr.map((i) => (
            <section key={i.id}>
              <div className='first_div'>
                <div>{i.title}</div>
                <div>{i.date}</div>
                <div className='open_blok'>
                  <p>{i.ball}</p>
                  <i className='icon icon-arrow-up'
                   style={{ transform: i.id === currentId ? 'rotate(0deg)' : 'rotate(180deg)' }}
                   onClick={() => openBlock(i.id)}
                   ></i>
                </div>
              </div>
              {i.id === currentId ? (
                   <div className='second_div'>
             {i.result.map((j, jdx) =>(
              <p dangerouslySetInnerHTML={{ __html : j}} key={jdx}></p>
              ))}
             </div> 
           ) : null}            
            </section>
          ))}

        </footer>
      </StyledAchievments>
    </ProfileCard>

  )
}
const StyledAchievments = styled.div`
  h1{
      font-size: 25px;
      font-weight: 500;
      line-height: 38px;
      letter-spacing: 0em;
      margin-bottom: 22px;

  }
  footer{
    display: flex;
    flex-direction: column;
    gap: 25px;

    section{
      .first_div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        .open_blok{
          display: flex;
          /* align-items: center; */
          gap: 20px;
        }
      }
      .second_div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #dcdcdc;
        border-left: 0;
        border-radius: 0;
        margin-top: 20px;
        padding: 20px 26px;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
      }
    }
  }
`