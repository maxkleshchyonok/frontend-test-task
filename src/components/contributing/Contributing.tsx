import React from 'react';
import styles from './contributing.module.scss';
import Button from '../button/Button';

const Contributing = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Interested in contributing to PearAI?</h2>

            <p>
                Pear is built by a large community of developers. If you have questions, or would
                like to discuss, you can join our Discord and talk to us directly! 🗣️{' '}
            </p>
            <p>Help the community out by giving the repo a star! 🤩</p>

            <div className={styles.buttons}>
                <Button className={styles.innerButton} size="md" variant="primary">
                    Contributing 101
                </Button>
                <Button className={styles.innerButton} variant="secondary" size="md">
                    PearAI Master Doc
                </Button>
            </div>
        </div>
    );
};

export default Contributing;
