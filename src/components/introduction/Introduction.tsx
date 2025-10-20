import React from 'react';
import styles from './introduction.module.scss';
import CircleBackground from '@/icons/circle-background';
import GreenPear from '@/icons/green-pear';
import Button from '../button/Button';

const Introduction = () => {
    return (
        <div className={styles.container}>
            <CircleBackground className={styles.circle_background} />

            <div className={styles.top_logo_container}>
                <div className={styles.top_logo}>
                    <GreenPear />
                </div>
                <h2 className={styles.top_logo_title}>Pear AI</h2>
            </div>

            <h1 className={styles.container_title}>
                The Open Source <span>AI-Powered</span>
                <br /> Code Editor
            </h1>

            <p className={styles.container_description}>
                Speed up your development process by seamlessly integrating AI into your workflow.
                <br />
                Afraid of switching editors? No need, Pear is a fork of VSCode and retains all its
                <br />
                features, you’ll feel right at home
            </p>

            <div className={styles.buttonsContainer}>
                <Button variant="primary" size="lg">
                    Join Waitlist
                </Button>

                <Button variant="secondary" size="lg">
                    More Details
                </Button>
            </div>
        </div>
    );
};

export default Introduction;
