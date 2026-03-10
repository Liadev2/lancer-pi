import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lancer-Pi - AI Freelance Hub',
  description: 'Marketplace Web3 + IA para Pioneers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Pi SDK oficial - obligatorio para pagos reales */}
        <script src="https://sdk.minepi.com/pi-sdk.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}