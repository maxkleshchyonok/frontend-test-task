import React from 'react';
import styles from './packCard.module.scss';
import Button from '../button/Button';
import TickMarker from '@/icons/tick-marker';
import ArrowDown from '@/icons/arrow-down';

type Props = {
    id: number;
    title: string;
    description: string;
    price: number;
    buttonText: string;
    includes: {
        id: number;
        feature: string;
    }[];
};

const PackCard = ({ id, title, description, price, buttonText, includes }: Props) => {
    return (
        <div className={`${styles.container} ${styles.card}`}>
            <h2 className={styles.container_title}>{title}</h2>
            <h3 className={styles.container_description}>{description}</h3>

            <div className={styles.priceContainer}>
                <div className={styles.price}>
                    <h3 className={styles.priceAmount}>${price}</h3>
                    <div className={styles.price_description}>
                        <h5>/MONTH</h5>
                        {price > 0 && <h5>+ EXTRA USAGE</h5>}
                    </div>
                </div>
                <Button className={styles.price_button} variant="primary" size="lg">
                    {buttonText}
                </Button>
                {id === 3 && (
                    <Button className={styles.talkToTeamButton} variant="secondary" size="lg">
                        Talk to OurTeam
                    </Button>
                )}
            </div>

            <div className={styles.includes}>
                <h4 className={styles.includes_title}>INCLUDES:</h4>

                <ul className={styles.includes_list}>
                    {includes.map(el => (
                        <li key={el.id}>
                            <TickMarker />

                            <span className={styles.includes_text}>{el.feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className={styles.viewAllButton}>
                <ArrowDown className="" />
                <h5>View all features</h5>
            </button>
        </div>
    );
};

export default PackCard;
