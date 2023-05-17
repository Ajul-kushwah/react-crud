import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://64626dbb7a9eead6facf11a0.mockapi.io/crud', {
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
        // <>
        //     <div className='row'>
        //         <div className='col-md-4'>
        //             <div className='mb-2 mt-2'>
        //                 <Link to='/'>
        //                     <button className='btn btn-primary'>Read Data</button>
        //                 </Link>
        //             </div>
        //             <div className='bg-primary p-4 text-center'>
        //                 <h1>Create Data</h1>
        //             </div>
        //             <form onSubmit={handleSubmit}>
        //                 <div className='form-group'>
        //                     <label>Enter Name: </label>
        //                     <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
        //                 </div>
        //                 <div className='form-group'>
        //                     <label>Enter Age: </label>
        //                     <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' />
        //                 </div>
        //                 <div className='form-group'>
        //                     <label>Enter Email: </label>
        //                     <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
        //                 </div>
        //                 <br />
        //                 <div className='d-grid'>
        //                     <input type='submit' value='Submit' className='btn btn-primary' />
        //                 </div>
        //             </form>

        //             {name}
        //             <br />
        //             {age}
        //             <br />
        //             {email}
        //         </div>
        //     </div>
        // </>

        <>
            <div class="container">
                <br/>
                <br/>
                <br/>
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-4">
                        <h1 class="text-center mt-2">Create</h1>
                        <div class="mt-4">
                            <form class="" onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}  className='form-control'/>
                                </div>
                                <div class="form-group">
                                    <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' />
                                </div>
                                <div class="form-group">
                                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                </div>
                                {/*<div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                    <a href="" class="forget-password">forget password?</a>
                                </div>
                                */}
                                <br/>
                                {/* Neither is this */}
                                <div class="form-group ">
                                    <input type="submit" class="btn btn-secondary btn-block" value="Submit"/>
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

export default Create