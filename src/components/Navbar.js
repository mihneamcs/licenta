import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Navbar() {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout= () =>{
        localStorage.clear();
        navigate('/login')
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href='#' className="navbar-brand">
                <img className="logo" src='https://upb.ro/wp-content/uploads/2017/11/LOGO-SITE_400x100_2018_v2.png'/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse container-fluid" id="navmenu">
                    <ul className="navbar-nav ms-auto text-warning">
                        <li className="nav-item fs-5">
                            <Link className='nav-link' to ="/">Home</Link>
                        </li>
                        <li className="nav-item fs-5">
                            <Link to="/programare" className="nav-link">Secretariat</Link>
                        </li>
                        <li className="nav-item fs-5">
                        <Link className='nav-link' to ="/contact">Contact</Link>
                        </li>
                        {
                            auth ? <div class="dropdown bg-dark" >
                            <a class="nav-link fs-5 dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {JSON.parse(auth).firstName}
                            </a>
                          
                            <ul class="dropdown-menu dropdown-menu-dark bg-dark">
                            <li className='nav-item fs-5 text-white'><Link className='nav-link' onClick={logout} to ="/login">Logout</Link></li>
                            </ul>
                          </div>
                            
                            
                            :<>
                            <li className='nav-item fs-5'><Link className='nav-link' to='/login'></Link>Login</li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar