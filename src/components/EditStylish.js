import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      setId(localStorage.getItem('id'));
      setName(localStorage.getItem('name'));
      setAge(localStorage.getItem('age'));
      setEmail(localStorage.getItem('email'));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64626dbb7a9eead6facf11a0.mockapi.io/crud/${id}`,{
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <>
        <div class="container">
            <br/>
            <br/>
            <br/>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-4">
                    <h1 class="text-center mt-2">Update</h1>
                    <div class="mt-4">
                        <form class="" onSubmit={handleUpdate}>
                            <div class="form-group">
                                <input type='text' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)}  className='form-control'/>
                            </div>
                            <div class="form-group">
                                <input type='number' value={age} placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' />
                            </div>
                            <div class="form-group">
                                <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                            </div>
                            
                            <br/>
                            {/* Neither is this */}
                            <div class="form-group ">
                                <input type="submit" value='Update' class="btn btn-secondary btn-block"/>
                            </div>
                            
                            <div class="form-group">
                                <Link to='/'>
                                    <a href="" class="text-center text-secondary">want to read data?</a>
                                </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Edit