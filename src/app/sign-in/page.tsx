import React from 'react';
import { SignInForm } from '@/components/forms/SignInForm';
import styles from './page.module.scss';
import Header from '@/components/header/Header';

const SignIn = () => {
    return (
        <>
            <Header />

            <div className={styles.container}>
                <SignInForm />
            </div>
        </>
    );
};

export default SignIn;
