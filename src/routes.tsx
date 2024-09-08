import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { List } from './pages/List'



export const AppRoutes  = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/profile'element={<Profile/>}/>
            <Route path='/list'element={<List/>}/>
            <Route path='*'element={<Navigate to='/home'/>}/>
        </Routes>
    </BrowserRouter>
)

}