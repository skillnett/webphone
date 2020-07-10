import React from 'react';
import './Login.scss';
import { LoginForm } from './components/LoginForm';
import { Logotypes } from './components/Logotypes';

export const Login = () => (
    <div className="login d-flex flex-column flex-fill">
        <Logotypes />
        <LoginForm />
    </div>
);