import React, { ReactNode } from 'react';

type Feature = {
    id: number;
    title: string;
    header: ReactNode;
    footer: string;
    img: string;
};

export const pearAiFeatures: Feature[] = [
    {
        id: 0,
        title: 'No more switching between files.',
        header: (
            <>
                To add missing context: directly reference code by including other files in the chat
                by adding <strong>‘@filename’</strong>.
            </>
        ),
        footer: 'This also works for folders, docs, terminal content, codebase, and more 😈',
        img: '/feature-img-1.png',
    },
    {
        id: 1,
        title: 'No more tedious changes, or forgetting language syntax.',
        header: 'Directly make changes inline by pressing CMD+I (ALT+L on Windows), and choose what you want to keep.',
        footer: 'Here, we ask Pear to help us handle edge cases 😏',
        img: '/feature-img-2.png',
    },
    {
        id: 2,
        title: 'No more tiresome copy pasting.',
        header: 'Directly bring your code to the chat by selecting it and pressing CMD+L (ALT+L on Windows). ',
        footer: 'Prompt it right away 😎',
        img: '/feature-img-3.png',
    },
];

export const pearAiPacks = [
    {
        id: 0,
        title: 'Free',
        description: 'For solo developers working on a passion project.',
        price: 0,
        buttonText: 'Start for Free',
        includes: [
            { id: 0, feature: '15 Android and 15 iOS builds' },
            { id: 1, feature: 'Low-priority queue' },
            { id: 2, feature: '60 min. on CI/CD Workflows' },
            { id: 3, feature: 'Submit to app stores' },
            { id: 4, feature: 'Send updates to 1K MAUs' },
            { id: 5, feature: 'Access to Launch' },
        ],
    },
    {
        id: 1,
        title: 'Starter',
        description: 'For developers ready to launch real-world apps.',
        price: 19,
        buttonText: 'Select Plan',
        includes: [
            { id: 0, feature: '45 builds' },
            { id: 1, feature: 'High-priority queue' },
            { id: 2, feature: 'Access to large workers' },
            { id: 3, feature: 'Send updates to 3K MAUs' },
        ],
    },
    {
        id: 2,
        title: 'Production',
        description: 'For teams building and distributing production apps.',
        price: 199,
        buttonText: 'Select Plan',
        includes: [
            { id: 0, feature: '225 builds' },
            { id: 1, feature: '2 included concurrencies' },
            { id: 2, feature: 'Send updates to 50K MAUs' },
            { id: 3, feature: 'Priority support' },
            { id: 4, feature: 'Single sign-on (SSO)' },
        ],
    },
    {
        id: 3,
        title: 'Enterprise',
        description: 'For apps with scale, security, and compliance needs.',
        price: 1999,
        buttonText: 'Select Plan',
        includes: [
            { id: 0, feature: '1000 builds' },
            { id: 1, feature: '5 included concurrencies' },
            { id: 2, feature: 'Send updates to 1M MAUs' },
            { id: 3, feature: 'Slack and strategic support add-on available' },
        ],
    },
];

// Add simple numeric thresholds to decide when a higher pack is recommended.
// These are minimal viable numbers and can be tuned later.
export const packThresholds = [
    {
        id: 0, // Free
        minMAU: 0,
        minBuilds: 0,
        minMinutes: 0,
    },
    {
        id: 1, // Starter
        minMAU: 3000,
        minBuilds: 45,
        minMinutes: 60,
    },
    {
        id: 2, // Production
        minMAU: 50000,
        minBuilds: 225,
        minMinutes: 600,
    },
    {
        id: 3, // Enterprise
        minMAU: 1000000,
        minBuilds: 1000,
        minMinutes: 5000,
    },
];
