import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import style from './Task.module.css'
import { Button } from 'react-bootstrap'
// import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Task() {
  return (
    <>
      <div className='container-fluid' id={style.task}>
        <div className='container bg-light p-5' id={style.div}>
          <div className='row'>
            <div className='col-lg-6'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJIjhQD0T2DX92JOkwqCnwgobUDuFftwqJw&usqp=CAU" alt='Loading' className='col-lg-12 rounded-circle'/>
            </div>
            <div className='col-lg-6 text-center'>
                
                  <h1>Member Login</h1>
                  
                  {/* < input className='rounded m-4 w-5'  type='Email' placeholder='Email' /> */}
                  <label  class="form-label"></label>
                  <input type="email" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' ></input>
                  <label  class="form-label"></label>
                  <input type="password" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Password' ></input>
                  <Button className={style.btn}> LOGIN </Button>
                  <p>Forgot <span class='text-success'>Username/Password</span></p>
                  <p class='text-success'>Create your account ➞ </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Task