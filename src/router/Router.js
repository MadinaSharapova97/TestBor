import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProfileLayout from '../layouts/ProfileLayout'

//pages
import Tests from '../modules/profile/tests/Tests'
import Payment from '../modules/profile/payment/Payment'
import Achievments from '../modules/profile/achievments/Achievments'
import Settings from '../modules/profile/settings/Settings'
import Login from '../modules/auth/login/Login'
import Register from '../modules/auth/register/Register'

export default function Router() {
    return (
        <Routes>
            <Route path='profile' element={<ProfileLayout />}>
                <Route path='tests' element={<Tests />} />
                <Route path='achievment' element={<Achievments />} />
                <Route path='payment' element={<Payment />} />
                <Route path='settings' element={<Settings />} />
            </Route>
            <Route path='auth'>
                <Route path='login' element={<Login/>} />
                <Route path='register' element={<Register/>} />
            </Route>
            <Route path='*' element={<Navigate to='/profile/tests' />} />
        </Routes>
    )
}
