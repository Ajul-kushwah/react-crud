import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [apiData, setApiData] = useState([])
    const [inputText, setInputText] = useState("");

    function getData() {
        axios.get('https://64626dbb7a9eead6facf11a0.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            }).catch((err) => {
                console.log(err)
            });
    }

    function handleDelete(id) {
        axios.delete(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            }).catch((err) => {
                console.log(err)
            });
    }

    function setDataToStorage(id, name, age, email){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
    }

    useEffect(() => {
        getData();
    }, [])

    const inputHandler = (e) => {
        setInputText(e.target.value.toLowerCase());
    };

    return (
        <>
            <div className="container">
                <br className=""/>
                <br className=""/>
                <br/>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow border border-1"> 
                            <a href="/" className="btn btn-floating btn-lg" style={{color: 'black', textDecoration: 'none', fontFamily: 'Itim, cursive', fontWeight: 'bold'}}>
                                <i className="fas fa-laugh-wink rotate-n-15" style={{color: 'black', fontSize: '25px'}} aria-hidden="true"/>
                                ReactCrud
                            </a>
                        
                            {/* Topbar Search */}
                            <form action="" className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                <input type="text" name="q" onChange={inputHandler} className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" required/>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="submit">
                                    <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                                </div>
                            </form>

                            <Link to="/create">
                                <a href="" className="btn btn-floating btn-lg" style={{color: 'black', textDecoration: 'none', fontWeight: 'bold'}}>
                                    <i className="fas fa-plus" style={{color: 'black', fontSize: '25px'}}  aria-hidden="true"></i>
                                </a>
                            </Link>
                            
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                {/*<li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link " href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                        <form action="" className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" name="q" onChange={()=>{}} className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" required/>
                                            <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </li>*/}
                                
                                <div className="topbar-divider d-none d-sm-block"></div>
                                
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small font-weight-bolder">ajul</span>
                                        <img className="img-profile rounded-circle" width="40" src="data:image/png;base64,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"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                    </div>
                </div>

                <div class="row align-items-center justify-content-center mb-2 d-sm-none">
                    <div class="col-md-8">
                        <div className="input-group">
                            <input type="text" name="q" onChange={()=>{}} className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" required/>
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="submit">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* users */}
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 overflow-auto" style={{maxHeight: '410px'}}>
                        {/* card */}
                        {
                            apiData.filter((el) => {
                                if (el === "") {
                                  return el;
                                } else {
                                  return (
                                    el.e_name.toLowerCase().includes(inputText) ||
                                    el.e_email.toLowerCase().includes(inputText)
                                  );
                                }
                              }).slice(0).reverse().map((item) => {
                                return (
                                    <>
                                        <div className="card gedf-cardd mb-2">
                                            <div className="card-header">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="mr-2">
                                                            <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="h5 m-0">
                                                                <a href="" style={{color: 'black'}}>{item.e_name}</a>
                                                            </div>
                                                            <div className="h7 text-muted">ID : {item.id} | Age : {item.e_age} | {item.e_email}</div>
                                                        </div>
                                                        
                                                    </div>
                                                    {/*<div>
                                                        <Link to='/edit'>
                                                            <button className='btn btn-secondary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>
                                                        </Link>
                                                        <button className='btn btn-outline-danger ml-2' onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(item.id) } }}>Delete</button>
                                                    </div>
                                                    */}
                                                    
                                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                                        <Link to='/edit'>
                                                            <button type="button" 
                                                            class="btn btn-secondary"
                                                            onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>
                                                                <i className="fas fa-edit fa-sm"></i>
                                                            </button>
                                                        </Link>    
                                                        <button type="button" 
                                                        class="btn btn-secondary"
                                                        onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(item.id) } }}>
                                                            <i className="fas fa-trash fa-sm"></i>
                                                        </button>
                                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read