import { Badge, Collapse, Image, List, Skeleton } from "antd";
import React from "react";

const StudentMenu = ({ student, studentInfo, setDisciplina }) => {
  const DisciplineList = ({ item, onClick }) => {
    return <List.Item onClick={onClick}>{item}</List.Item>;
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "250px" }}>
          <Badge.Ribbon
            text={student.type}
            color="orange"
            style={{
              top: "80%",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            {!student.avatar ? <Skeleton.Image active={student.avatar === null ? false : true} style={{minWidth:'250px', minHeight:'250px'}}/> :
            <Image
              style={{ borderRadius: "8px", maxWidth: "250px" }}
              src={`data:image/jpeg;base64,${student.avatar}`}
            />}
          </Badge.Ribbon>
          {/* <Collapse
            style={{ marginTop: "25px" }}
            items={[
              {
                key: "1",
                label: "Disciplinas",
                children: (
                  <List>
                    {student.subjects.map((disc) => (
                      <DisciplineList item={disc} />
                    ))}
                  </List>
                ),
              },
            ]}
          /> */}
          <Collapse
            style={{ marginTop: "25px" }}
            items={[
              {
                key: "1",
                label: "Disciplinas",
                children: (
                  <List>
                    {Array.from(
                      new Set(studentInfo?.subjects.map((disc) => disc.subject))
                    ).map((uniqueDiscipline) => (
                      <DisciplineList
                        key={uniqueDiscipline}
                        item={uniqueDiscipline}
                        onClick={() => setDisciplina(uniqueDiscipline)}
                      />
                    ))}
                  </List>
                ),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default StudentMenu;
