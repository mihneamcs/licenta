import React, {useState,useEffect} from 'react'
import axios from 'axios'
function TestProgramare() {

   const [students, setStudents] = useState([])

   useEffect(() => {
     axios.get("http://localhost:8080/api/students/").then((response) =>{

        setStudents(response.data)
        console.log(response.data)
     })
   
   }, [])
   



  return (
    <div className='container'>
        <h2 className='text-center'>List Students</h2>
        <table className='table table-bordered table-striped'>
        <thead>
            <th>Student id</th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Student Email</th>
        </thead>

        <tbody>
            {
                students.map(
                    student =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                    </tr>
                )
            }
        </tbody>
        </table>
        
    </div>
  )
}

export default TestProgramare