// import React from 'react';
// import styles from './header.module.scss';
// import PearLogo from '@/icons/pear';
// import Link from 'next/link';
// import Profile from '@/icons/profile';

// const Header: React.FC = () => {
//     return (
//         <div className={styles.container}>
//             <div className={styles.links}>
//                 <Link href={'/'}>
//                     <PearLogo />
//                 </Link>
//                 <Link href="/about" className={styles.link}>
//                     About
//                 </Link>
//                 <a href="#" className={styles.link}>
//                     Discord
//                 </a>
//                 <a href="#" className={styles.link}>
//                     Github
//                 </a>
//             </div>

//             <div className={styles.auth}>
//                 <Profile />
//                 <div className={styles.auth_el}>
//                     <Link href="/sign-in">Sign In</Link>
//                     <p>&nbsp; / &nbsp;</p>
//                     <Link href="/sign-up">Sign Up</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;

'use client';
import React, { useState } from 'react';
import styles from './header.module.scss';
import PearLogo from '@/icons/pear';
import Link from 'next/link';
import Profile from '@/icons/profile';
import BurgerMenu from '@/icons/burger-menu';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    <PearLogo />
                </Link>
            </div>

            <div className={styles.auth}>
                <Profile />
                <div className={styles.auth_el}>
                    <Link href="/sign-in">Sign In</Link>
                    <p>&nbsp; / &nbsp;</p>
                    <Link href="/sign-up">Sign Up</Link>
                </div>
            </div>

            <div className={`${styles.burger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <BurgerMenu />
            </div>

            {menuOpen && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <Link href="/about" className={styles.popupLink}>
                            About
                        </Link>
                        <a href="#" className={styles.popupLink}>
                            Discord
                        </a>
                        <a href="#" className={styles.popupLink}>
                            Github
                        </a>
                        <Link className={styles.popupLink} href={'/sign-in'}>
                            Log in
                        </Link>
                        <Link className={styles.popupLink} href={'/sign-up'}>
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
