import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.links}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <p>© Pear AI - All rights reserved.</p>
            </div>

            <div className={styles.rightSide}>
                <a href="#">Github</a>
                <a href="#">Discord</a>
                <Link href={'/about'}>About</Link>
            </div>
        </div>
    );
};

export default Footer;
