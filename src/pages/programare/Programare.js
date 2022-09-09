import { Modal } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import Footer from '../../components/Footer'

function Programare() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/students/").then((response) =>{

       setStudents(response.data)
       console.log(response.data)
    })
  
  }, [])
  



  return (
    <div>
        <Navbar/>
        <div className='container'>
       
<button type="button" class="btn btn-dark float-end mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Adauga programare
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Save changes</button>
      </div>
    </div>
  </div>
</div>

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
    </div>
    
  )
}

export default Programare