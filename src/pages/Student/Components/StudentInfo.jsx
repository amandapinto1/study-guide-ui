import React, { useEffect, useState } from 'react'
import { MainContainer, TitleContainer } from './Styles/styles'
import dayjs from 'dayjs'
import {getWeekDaysFromSchedule, totalHoursPerWeek} from '../Functions/index'

const StudentInfo = ({student, studentInfo, disciplina}) => {
  const [mainSubjects, setMainSubjects] = useState();
  const [mainSchedule, setMainSchedule] = useState();
  const [qtdDays, setQtdDays] = useState();
  const [totalHours, setTotalHours] = useState();

  const dataFormatada = dayjs().format('D [de] MMMM [de] YYYY');

  useEffect(() => {
    if(disciplina){
    const subjects = studentInfo?.subjects?.filter(x => x.subject == disciplina);
    const schedule = filterSubject(studentInfo?.studyGuide, disciplina);
    const days = getWeekDaysFromSchedule(studentInfo?.studyGuide, disciplina);

    setMainSchedule(schedule);
    setMainSubjects(subjects);
    setQtdDays(days);
    }

    if(studentInfo){
      setTotalHours(totalHoursPerWeek(studentInfo?.studyGuide));
    }

  },[disciplina, studentInfo]);

  const filterSubject = (schedule, disciplina) => {
    const filteredSchedule = {};

    for (const day in schedule) {
      if (Array.isArray(schedule[day])) {
        filteredSchedule[day] = schedule[day].filter(lesson => lesson.subject === disciplina);
      }
    }
  
    return filteredSchedule;
  }


  return (
    <MainContainer>
      <TitleContainer>
        <h1>{student.name}</h1>
        <p>{dataFormatada}</p>
        <h3>{disciplina}</h3>
        <h3>{qtdDays.totalHours}</h3>
      </TitleContainer>
    </MainContainer>
  )
}

export default StudentInfo