import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentPage from "./StudentPage";
import {useLocation} from 'react-router-dom';

const StudentHome = () => {
  const [studentId, setStudentId] = useState();
  const [student, setStudent] = useState();
  const param = useParams();
  const location = useLocation();


  useEffect(() => {
    if (param) {
      if (isNaN(Number(param.id))) {
        setStudentId();
        setStudent();
        message.error("O id informado é inválido");
      }else{
      setStudent(location.state);
      setStudentId(Number(param.id));
      }
    }
  }, [param, location]);
  
  return (
    !studentId && !student ? "URL INVÁLIDA" : (
        <StudentPage student={student}/>
    )
    );
};

export default StudentHome;
