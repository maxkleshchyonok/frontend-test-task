import type { Metadata } from 'next';
import { Inter, Figtree, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

const figtree = Figtree({
    variable: '--font-figtree',
    subsets: ['latin'],
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    variable: '--font-jetbrains',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Pear Ai',
    description: 'The Open Source AI-Powered Code Editor',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${figtree.variable} ${jetbrains.variable}`}>{children}</body>
        </html>
    );
}
