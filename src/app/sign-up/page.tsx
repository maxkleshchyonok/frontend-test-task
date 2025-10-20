import React from 'react';
import { SignUpForm } from '@/components/forms/SignUpForm';
import Header from '@/components/header/Header';
import styles from './page.module.scss';

const SignUp = () => {
    return (
        <>
            <Header />

            <div className={styles.container}>
                <SignUpForm />
            </div>
        </>
    );
};

export default SignUp;
