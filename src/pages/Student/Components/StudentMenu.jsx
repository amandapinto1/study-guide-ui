import { Image } from 'antd'
import React from 'react'

const StudentMenu = ({student}) => {
  return (
    <Image style={{borderRadius:'8px'}} src={`data:image/jpeg;base64,${student.avatar}`}/>
  )
}

export default StudentMenu