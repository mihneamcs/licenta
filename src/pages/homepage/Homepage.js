import React from 'react'
import Navbar from '../../components/Navbar'
import "./Homepage.css"
import image from '../../img/showcase.svg'
import laptop from '../../img/laptop.jpg'
function Homepage() {
  return (
    <div>
        <Navbar/>
        <section
      class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
    >
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Programeaza-te la <span class="text-warning"> Secretariat </span></h1>
            <p class="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button
              class="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Programare secretariat
            </button>
          </div>
          <img className='img-fluid w-50 d-none d-sm-block' src={image}></img>
        </div>
      </div>
    </section>

    
    <section id='learn' className='p-5'>

        <div className='container'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md'>
                    <img src={laptop} className="img-fluid"/>
                </div>
                <div className='col-md p-5'>
                    <h2>Despre noi</h2>
                    <p className='lead'>
                    Departamentul de Automatică si Ingineria Sistemelor principale preocupări şi obiective: pregătirea resurselor umane în domeniul Automaticii şi Ingineriei Sistemelor; producerea de cunoaştere în domeniul Ştiintei Sistemelor, Automaticii şi Informaticii Industriale; conceperea şi realizarea de produse şi tehnnologii pentru automatizarea proceselor şi asigurarea consultanţei, evaluării şi asistenţei tehnice.
                    </p>
                </div>
            </div>
        </div>
    </section>



    <div class="container mb-5 mt-5">
      <h1 className='text-center mb-4'>DEPARTAMENTE</h1>
  <div class="row">
    <div class="col-lg-4 d-flex align-items-stretch">
    <div class="card bg-dark">
  <div class="card-header text-white">
    <h5>Departamentul de Calculatoare</h5>
  </div>
  <div class="card-body">
   
    <p class="card-text text-white"><strong>Departamentul de Calculatoare</strong> reprezintă un centru de cercetare şi de educare a specialiştilor în domeniul “Calculatoare şi Tehnologia Informaţiei”, oferind cunoştinţe şi competenţe de înalt nivel în domeniul absolvenţiilor programelor de licenţă, masterat şi doctorat oferite de departament. </p>
  
  </div>
</div>
    </div>
    <div class="col-lg-4 d-flex align-items-stretch">
    <div class="card bg-secondary">
  <div class="card-header text-white">
  <h5>Departamentul de Automatică şi Ingineria Sistemelor</h5>
  </div>
  <div class="card-body">
    <p class="card-text text-white"><strong>Departamentul de Automatică si Ingineria Sistemelor</strong> principale preocupări şi obiective: pregătirea resurselor umane în domeniul Automaticii şi Ingineriei Sistemelor; producerea de cunoaştere în domeniul Ştiintei Sistemelor, Automaticii şi Informaticii Industriale; conceperea şi realizarea de produse şi tehnnologii pentru automatizarea proceselor şi asigurarea consultanţei, evaluării şi asistenţei tehnice.</p>
  </div>
</div>
    </div>
    <div class="col-lg-4 d-flex align-items-stretch">
    <div class="card bg-dark">
  <div class="card-header text-white">
    <h5>Departamentul de Automatică si Informatica Industriala</h5>
  </div>
  <div class="card-body">
    <p class="card-text text-white"><strong>Departamentul de Automatică si Ingineria Sistemelor</strong> are ca obiective principale pregătirea resurselor umane în domeniul automaticii şi informaticii industriale asigurând cursuri de specialitate şi realizând cercetare, consultanţă şi evaluare în acest domeniu.</p>
  
  </div>
</div>
    </div>
  </div>
</div>

    <footer className='p-3 bg-dark text-white text-center position-relative'>
        <div className='container'>
            <p className='lead'>Copyright &copy; 2022 mcs</p>
        </div>
    </footer>

    </div>
  )
}

export default Homepage