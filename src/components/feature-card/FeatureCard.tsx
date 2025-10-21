import React, { ReactNode } from 'react';
import styles from './featureCard.module.scss';
import Image from 'next/image';

type Props = {
    title: string;
    header: ReactNode;
    footer: string;
    img: string;
};

const FeatureCard = ({ title, header, footer, img }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_description}>
                <h2>{title}</h2>
                <p>{header}</p>
                <p>{footer}</p>
            </div>

            <Image
                src={img}
                className={styles.container_image}
                alt="pear-ai features"
                width={800}
                height={500}
                priority
            />
        </div>
    );
};

export default FeatureCard;
