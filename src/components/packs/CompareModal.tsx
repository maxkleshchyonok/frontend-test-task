'use client';
import React, { useMemo, useState } from 'react';
import styles from './compareModal.module.scss';
import { pearAiPacks, packThresholds } from '@/constants/constants';
import TickMarker from '@/icons/tick-marker';
import Button from '../button/Button';
import ArrowDown from '@/icons/arrow-down';

type Props = {
    open: boolean;
    onClose: () => void;
};

const clamp = (v: number, min = 0, max = 1000000) => Math.max(min, Math.min(max, v));

const expScale = (val: number, min: number, max: number, exponent = 5) => {
    const normalized = val / 100; // 0–1
    const curved = Math.pow(normalized, exponent); // exponential curve
    return Math.round(min + curved * (max - min));
};

const CompareModal: React.FC<Props> = ({ open, onClose }) => {
    const [mausRaw, setMausRaw] = useState(50);
    const [builds, setBuilds] = useState(1000);
    const [minutesRaw, setMinutesRaw] = useState(50);

    // Convert exponential sliders to actual values
    const maus = useMemo(() => expScale(mausRaw, 0, 1000000, 3), [mausRaw]);
    const minutes = useMemo(() => expScale(minutesRaw, 0, 10000, 3), [minutesRaw]);

    const suggestedPack = useMemo(() => {
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
                        <h3 className={styles.containerTitle}>USAGE PLAN CALCULATOR</h3>

                        {/* MAUs (Exponential) */}
                        <label className={styles.row}>
                            <div className={styles.row_header}>
                                <h4>Monthly active users</h4>
                                <div className={styles.value}>{maus.toLocaleString()} MAUs</div>
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={mausRaw}
                                onChange={e => setMausRaw(Number(e.target.value))}
                                style={
                                    {
                                        ['--percent' as any]: `${mausRaw}%`,
                                    } as React.CSSProperties
                                }
                            />
                        </label>

                        {/* Builds (Linear) */}
                        <label className={styles.row}>
                            <div className={styles.row_header}>
                                <h4>Builds</h4>
                                <div className={styles.value}>{builds} builds</div>
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={2000}
                                value={builds}
                                onChange={e => setBuilds(clamp(Number(e.target.value), 0, 2000))}
                                style={
                                    {
                                        ['--percent' as any]: `${Math.round((builds / 2000) * 100)}%`,
                                    } as React.CSSProperties
                                }
                            />
                        </label>

                        {/* CI/CD Minutes (Exponential) */}
                        <label className={styles.row}>
                            <div className={styles.row_header}>
                                <h4>CI/CD minutes</h4>
                                <div className={styles.value}>{minutes} mins</div>
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={minutesRaw}
                                onChange={e => setMinutesRaw(Number(e.target.value))}
                                style={
                                    {
                                        ['--percent' as any]: `${minutesRaw}%`,
                                    } as React.CSSProperties
                                }
                            />
                        </label>

                        <div className={styles.info}>
                            <p>
                                Expecting over 1,000,000 MAU? Contact us for a more accurate
                                estimate.
                            </p>
                            <p>
                                * Your bill may vary from the estimated extra usage based on your
                                specific usage. Estimates are based on average MAU, build, and CI/CD
                                minute costs. Extra usage is charged when exceeding the resource
                                allotment included in the subscription plan.
                            </p>
                        </div>
                    </div>

                    <div className={styles.suggestion}>
                        {suggestedPack ? (
                            <div className={styles.packCard}>
                                <h4 className={styles.title}>{suggestedPack.title}</h4>

                                <div className={styles.price}>
                                    <span>${suggestedPack.price}</span> /MONTH
                                </div>

                                <h5 className={styles.includes}>INCLUDES:</h5>
                                <ul className={styles.markerList}>
                                    {suggestedPack.includes.map(inc => (
                                        <li key={inc.id}>
                                            <TickMarker />
                                            <span>{inc.feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className={styles.selectButton} variant="primary" size="md">
                                    {suggestedPack.id === 0 ? 'Start for free' : 'Select Plan'}
                                </Button>

                                <div className={styles.viewAllFeatures}>
                                    <p>View all features</p>
                                    <ArrowDown className={styles.arrow} />
                                </div>
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
