"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import './AuthForms.scss';

const signInSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
});

type SignInFormData = z.infer<typeof signInSchema>;

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = (data: SignInFormData) => {
        console.warn(data);
        // Handle form submission
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form-header">
                <div className="logo-circle">
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                        <path
                            d="M12 0C8.5 0 6 2.5 6 6C6 8 7 9.5 8.5 10.5C4.5 12 2 16 2 20.5V28H22V20.5C22 16 19.5 12 15.5 10.5C17 9.5 18 8 18 6C18 2.5 15.5 0 12 0Z"
                            fill="#00D4AA"
                        />
                    </svg>
                </div>
                <h1 className="auth-title">Sign in</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        {...register('email')}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className={`form-input ${errors.password ? 'error' : ''}`}
                        {...register('password')}
                    />
                    {errors.password && (
                        <span className="error-message">{errors.password.message}</span>
                    )}
                </div>

                <div className="forgot-password">
                    Forgot password? <a href="#">Send reset code</a>
                </div>

                <button type="submit" className="submit-btn">
                    Sign in
                </button>

                <div className="divider">or</div>

                <button type="button" className="oauth-btn">
                    <Image
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className="oauth-icon"
                        width={16}
                        height={16}
                    />
                    Sign in with Google
                </button>

                <button type="button" className="oauth-btn">
                    <svg className="oauth-icon" width="20" height="20" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                            fill="currentColor"
                        />
                    </svg>
                    Sign in with GitHub
                </button>

                <button type="button" className="oauth-btn">
                    Sign in with SSO for Enterprise
                </button>

                <div className="auth-switch">
                    Dont have an account? <a href="#">Sign up</a>
                </div>
            </form>
        </div>
    );
};
