import React, { useState } from 'react'
import appfirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore'

const auth = getAuth(appfirebase)

const db = getFirestore(appfirebase)

const Home = ({ correoUsuario }) => {

    const valorInicial = {
        nombre:'',
        edad:'',
        profesion:''
    }

    const [user,setUser]=useState(valorInicial)

    const capturarInputs =(e) =>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }

    const guardardatos =async (e)=>{
        e.preventDefault();
        //console.log(user);
        try {
            await addDoc(collection(db,'usuarios'),{
                ...user
            })
        } catch (error) {
            console.log(error);
        }
        setUser({...valorInicial})
    }

    return (
        <div className='container'>
            <p>Bienvenido,<strong>{correoUsuario}</strong> Haz iniciado sesión</p>

            <button className='btn btn-primary' onClick={() => signOut(auth)}>
                Cerrar Sesión
            </button>

            <hr />
            <div className='row'>
                {/* esta seccion sera el formulario */}
                <div className="col-md-4">
                    <h3 className='text-center mb-3'>Ingresa Usuarios</h3>
                    <form onSubmit={guardardatos}>
                        <div className='card card-body'>
                            <div className='form-group'>
                                <input type='text' name='nombre' className='form-control mb-3' placeholder='ingresar el nombre del usuario' 
                                onChange={capturarInputs} value={user.nombre} required/>

                                <input type='text' name='edad' className='form-control mb-3' placeholder='Ingresa la edad '
                                onChange={capturarInputs} value={user.edad} required/>

                                <input type='text' name='profesion' className='form-control mb-3' placeholder='Ingresa la porfesion'
                                onChange={capturarInputs} value={user.profesion} required/>

                            </div>
                            <button className='btn btn-primary'>
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
                {/* esta seccion sera la lista de nuestros usuarios */}
                <div className="col-md-8">
                    <h2 className='text-center mb-5'>Lista de Usuarios</h2>
                </div>
            </div>
        </div>
    )
}

export default Home