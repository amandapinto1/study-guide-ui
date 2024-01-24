import React from 'react'
import { MainContainer, TitleContainer } from './Styles/styles'
import dayjs from 'dayjs'

const StudentInfo = ({student}) => {

  const dataFormatada = dayjs().format('D [de] MMMM [de] YYYY');

  return (
    <MainContainer>
      <TitleContainer>
        <h1>{student.name}</h1>
        <p>{dataFormatada}</p>
      </TitleContainer>
    </MainContainer>
  )
}

export default StudentInfo