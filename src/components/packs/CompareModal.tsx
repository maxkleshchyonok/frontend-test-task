'use client';
import React, { useMemo, useState } from 'react';
import styles from './compareModal.module.scss';
import { pearAiPacks, packThresholds } from '@/constants/constants';

type Props = {
    open: boolean;
    onClose: () => void;
};

const clamp = (v: number, min = 0, max = 1000000) => Math.max(min, Math.min(max, v));

const CompareModal: React.FC<Props> = ({ open, onClose }) => {
    const [maus, setMaus] = useState(1000);
    const [builds, setBuilds] = useState(20);
    const [minutes, setMinutes] = useState(30);

    const suggestedPack = useMemo(() => {
        // Find highest pack where any of the provided values meets that pack's threshold
        // We'll iterate from highest to lowest so we recommend the most appropriate
        for (let i = packThresholds.length - 1; i >= 0; i--) {
            const t = packThresholds[i];
            if (maus >= t.minMAU || builds >= t.minBuilds || minutes >= t.minMinutes) {
                return pearAiPacks.find(p => p.id === t.id) || null;
            }
        }
        return null;
    }, [maus, builds, minutes]);

    if (!open) {
        return null;
    }

    return (
        <div className={styles.overlay} role="dialog" aria-modal="true">
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose} aria-label="Close">
                    ×
                </button>

                <div className={styles.content}>
                    <div className={styles.sliders}>
                        <h3>Estimate your needs</h3>

                        <label className={styles.row}>
                            <div>Monthly active users</div>
                            <input
                                type="range"
                                min={0}
                                max={1000000}
                                value={maus}
                                onChange={e => setMaus(clamp(Number(e.target.value)))}
                                style={{ ['--percent' as unknown as keyof React.CSSProperties]: `${Math.round((maus / 1000000) * 100)}%` } as React.CSSProperties}
                            />
                            <div className={styles.value}>{maus.toLocaleString()}</div>
                        </label>

                        <label className={styles.row}>
                            <div>Builds</div>
                            <input
                                type="range"
                                min={0}
                                max={2000}
                                value={builds}
                                onChange={e => setBuilds(clamp(Number(e.target.value), 0, 2000))}
                                style={{ ['--percent' as unknown as keyof React.CSSProperties]: `${Math.round((builds / 2000) * 100)}%` } as React.CSSProperties}
                            />
                            <div className={styles.value}>{builds}</div>
                        </label>

                        <label className={styles.row}>
                            <div>CI/CD minutes</div>
                            <input
                                type="range"
                                min={0}
                                max={10000}
                                value={minutes}
                                onChange={e => setMinutes(clamp(Number(e.target.value), 0, 10000))}
                                style={{ ['--percent' as unknown as keyof React.CSSProperties]: `${Math.round((minutes / 10000) * 100)}%` } as React.CSSProperties}
                            />
                            <div className={styles.value}>{minutes}</div>
                        </label>
                    </div>

                    <div className={styles.suggestion}>
                        <h3>Suggested pack</h3>
                        {suggestedPack ? (
                            <div className={styles.packCard}>
                                <h4>{suggestedPack.title}</h4>
                                <p>{suggestedPack.description}</p>
                                <div className={styles.price}>${suggestedPack.price}</div>
                                <ul>
                                    {suggestedPack.includes.map(
                                        (inc: { id: number; feature: string }) => (
                                            <li key={inc.id}>{inc.feature}</li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        ) : (
                            <div>
                                No pack matches your current values — you are on Free plan ranges.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareModal;
