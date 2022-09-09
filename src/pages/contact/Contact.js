import React from 'react'
import Navbar from '../../components/Navbar'
import "./Contact.css"
function Contact() {
  return (
    <div>
        <Navbar/>
    
        <section id='instructors' className='p5 bg-dark'>
            <div className='container'>
                <h2 className='text-center text-warning mb-5'>Secretariat Licenta</h2>
                <div className='row g-4'>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card bg-dark mb-5 border border-warning'>
                            <div className='card-body text-center'>
                                <img src="https://randomuser.me/api/portraits/women/64.jpg" className='rounded-circle mb-3'/>
                                <h3 className='card-title mb-3 text-white'>Steluta Radulescu</h3>
                                <h6 className='text-white'>Anul I, Birou Secretariat</h6>
                                <p className='card-text text-white'>E-mail: steluta.radulescu@upb.ro
                                <br/>Telefon: 021 402 94 66</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card bg-dark border border-warning'>
                            <div className='card-body text-center'>
                                <img src="https://randomuser.me/api/portraits/women/51.jpg" className='rounded-circle mb-3'/>
                                <h3 className='card-title mb-3 text-white'>Raluca Vascuta</h3>
                                <h6 className='text-white'>Anul II, Birou Decanat</h6>
                                <p className='card-text text-white'>E-mail: raluca.vascuta@upb.ro <br/>Telefon: 021 402 91 79</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card bg-dark border border-warning'>
                            <div className='card-body text-center'>
                                <img src="https://randomuser.me/api/portraits/women/31.jpg" className='rounded-circle mb-3'/>
                                <h3 className='card-title mb-3 text-white'>Cristina Gribnic</h3>
                                <h6 className='text-white'>Anul III, Birou Secretariat</h6>
                                <p className='card-text text-white'>E-mail: cristina.gribinic@upb.ro<br/>Telefon: 021 402 94 66</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='card bg-dark border border-warning'>
                            <div className='card-body text-center'>
                                <img src="https://randomuser.me/api/portraits/women/23.jpg" className='rounded-circle mb-3'/>
                                <h3 className='card-title mb-3 text-white'>Iolanda Stefan</h3>
                                <h6 className='text-white'>Anul IV, Birou Secretariat</h6>
                                <p className='card-text text-white'>E-mail: iolanda.stefan@upb.ro<br/>Telefon: 021 402 94 66</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>


        <section className='mb-5 mt-5'>
            <div className='container'>
                <div className='row g-4'>
                    <div className='col-md'>
                        <h2 className='text-center mb-4'>Contact Info</h2>
                        <ul className='list-group list-group-flush lead'>
                            <li className='list-group-item'>
                                <span className='fw-bold'>Adresa:</span> Splaiul Independentei nr. 313
Sector 6, Bucureşti, 060042,
Acces prin Bulevardul Iuliu Maniu
                            </li>
                            <li className='list-group-item'>
                                <span className='fw-bold'>Decanat:</span> Telefon: 021 402 91 79
                            </li>
                            <li className='list-group-item'>
                                <span className='fw-bold'>Administratie:</span> Telefon: 021 402 91 79
                            </li>
                        </ul>
                    </div>
                    <div className='col-md'>
                    <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14460.992694779456!2d26.046799052804705!3d44.43765202290675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201ea132d5141%3A0xf5d5aecb94fa6dc7!2sUniversitatea%20POLITEHNICA%20din%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1657619152112!5m2!1sro!2sro"></iframe>

                    </div>
                </div>
            </div>
        </section>

            <div className='mt-3 '>
         <footer className='p-1 bg-dark text-white text-center position-relative'>
        <div className='container'>
            <p className='lead'>Copyright &copy; 2022 mcs</p>
        </div>
    </footer>
    </div>
    </div>
  )
}

export default Contact