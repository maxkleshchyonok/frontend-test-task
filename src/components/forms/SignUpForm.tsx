'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './forms.module.scss';
import Button from '../button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GreenPear from '@/icons/green-pear';

const signUpSchema = z.object({
    email: z.email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUpForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: { email: '', password: '' },
    });

    // no real submit logic
    const onSubmit = (data: SignUpFormData) => {
        // intentionally left blank
        console.log('sign up submit', data);
    };

    const handleRouteChange = () => {
        router.push('/sign-in');
    };

    return (
        <>
            <div className={styles.top_logo_container}>
                <div className={styles.top_logo}>
                    <GreenPear />
                </div>
                <h2 className={styles.top_logo_title}>Sign up</h2>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="signin-email">
                        Email
                    </label>
                    <input
                        id="signin-email"
                        className={styles.input}
                        type="email"
                        placeholder="Enter your email address"
                        {...register('email')}
                    />
                    {errors.email && <div className={styles.error}>{errors.email.message}</div>}
                </div>

                <div className={styles.field}>
                    <label className={styles.label} htmlFor="signin-password">
                        Password
                    </label>
                    <input
                        id="signin-password"
                        className={styles.input}
                        type="password"
                        placeholder="Enter your password"
                        {...register('password')}
                    />
                    {errors.password && (
                        <div className={styles.error}>{errors.password.message}</div>
                    )}
                </div>

                <div className={styles.forgotWrapper}>
                    <p>Forgot password?</p>
                    <button type="button" className={styles.button}>
                        Send reset code
                    </button>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Sign up
                </button>

                <div className={styles.separator}>
                    <div />
                    <p>or</p>
                    <div />
                </div>

                <div className={styles.buttonsContainer}>
                    <Button className={styles.secondaryButton} variant="secondary" size="md">
                        <Image alt="google" src={'/google.png'} width={24} height={24} /> Sign up
                        with Google
                    </Button>
                    <Button className={styles.secondaryButton} variant="secondary" size="md">
                        <Image alt="google" src={'/github.png'} width={24} height={24} /> Sign up
                        with GitHub
                    </Button>
                    <Button className={styles.secondaryButton} variant="secondary" size="md">
                        Sign up with SSO for Enterprise
                    </Button>
                </div>

                <div className={styles.routeChange}>
                    <p>Already have an account?</p>
                    <button onClick={handleRouteChange} className={styles.button}>
                        Log in
                    </button>
                </div>
            </form>
        </>
    );
}
