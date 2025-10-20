import React from 'react';
import styles from './header.module.scss';
import PearLogo from '@/icons/pear';
import Link from 'next/link';
import Profile from '@/icons/profile';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <Link href={'/'}>
                    <PearLogo />
                </Link>
                <Link href="/about" className={styles.link}>
                    About
                </Link>
                <a href="#" className={styles.link}>
                    Discord
                </a>
                <a href="#" className={styles.link}>
                    Github
                </a>
            </div>

            <div className={styles.auth}>
                <Profile />
                <div className={styles.auth_el}>
                    <Link href="/sign-in">Sign In</Link>
                    <p>&nbsp; / &nbsp;</p>
                    <Link href="/sign-up">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
