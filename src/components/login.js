import React from 'react'

import Uno from '../images/logo.png'
import Dos from '../images/Pie.png'
import Tres from '../images/logo.png'

const Login = () => {
    return (
        <div className='row container p-4'>
            <div className="col-md-8">

                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Uno} alt='' className='tamaño-imagen'/>
                        </div>
                        <div className="carousel-item">
                            <img src={Dos} alt='' className='tamaño-imagen'/>
                        </div>
                        <div className="carousel-item">
                            <img src={Tres} alt=''className='tamaño-imagen' />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            {/* en esta seccion va el formulario */}
            <div className="col-md-4">
                <div className='mt-5 ms-5'>
                   <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default Login