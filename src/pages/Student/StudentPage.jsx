import { Col, Layout, Row, Space } from "antd";
import React from "react";
import StudentMenu from "./Components/StudentMenu";
import StudentInfo from "./Components/StudentInfo";

const StudentPage = ({ student }) => {
  return (
    <Layout>
      <Row style={{justifyContent:'space-between'}}>
          <Col span={6}>
            <StudentMenu student={student} />
          </Col>
          <Col span={17}>
            <StudentInfo student={student} />
          </Col>
      </Row>
    </Layout>
  );
};

export default StudentPage;
