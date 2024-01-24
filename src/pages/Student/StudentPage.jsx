import { Col, Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import StudentMenu from "./Components/StudentMenu";
import StudentInfo from "./Components/StudentInfo";
import {GetGrades} from '../../services/servicos'

const StudentPage = ({ student }) => {
  const [studentInfo, setStudentInfo] = useState();

  useEffect(() => {
    GetGrades().then((result) => setStudentInfo(result))
  },[])

  return (
    <Layout>
      <Row style={{justifyContent:'space-around'}}>
          <Col span={6} style={{justifyContent:'center'}}>
            <StudentMenu student={student} studentInfo={studentInfo} />
          </Col>
          <Col span={16}>
            <StudentInfo student={student} studentInfo={studentInfo}  />
          </Col>
      </Row>
    </Layout>
  );
};

export default StudentPage;
