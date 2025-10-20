'use client';
import React from 'react';
import styles from './packs.module.scss';
import Button from '../button/Button';
import CompareModal from './CompareModal';
import Calculator from '@/icons/calculator';
import { pearAiPacks } from '@/constants/constants';
import PackCard from '../pack-card/PackCard';

const Packs = () => {
    const [openCompare, setOpenCompare] = React.useState(false);

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Grow confidently with
                    <br /> predictable pricing
                </h2>

                <div className={styles.container_compare}>
                    <h3>COMPARE</h3>
                    <Button
                        variant="secondary"
                        size="sm"
                        className={styles.compare_button}
                        onClick={() => setOpenCompare(true)}
                    >
                        <Calculator /> Calculator
                    </Button>
                </div>

                <div className={styles.packsContainer}>
                    {pearAiPacks.map(el => (
                        <PackCard
                            id={el.id}
                            key={el.id}
                            title={el.title}
                            description={el.description}
                            price={el.price}
                            buttonText={el.buttonText}
                            includes={el.includes}
                        />
                    ))}
                </div>
            </div>
            <CompareModal open={openCompare} onClose={() => setOpenCompare(false)} />
        </>
    );
};

export default Packs;
