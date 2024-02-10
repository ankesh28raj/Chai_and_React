import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
     authService.logout().then(() => {
        dispatch(logout())
     })
    }

  return (
    <button 
    className='inline-block px-2 py-2 duration-200 hover:bg-blue-400
    rounded-full'
    onClick={logoutHandler}>
        LogoutBtn
    </button>
  )
}

export default LogoutBtn