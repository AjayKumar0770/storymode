'use client';

import dynamic from 'next/dynamic';

const PortfolioApp = dynamic(() => import('../App'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      fontSize: '24px',
      color: '#fff',
      background: 'linear-gradient(45deg, #eff4f9, #48b1bf)',
    }}>
      Loading Ajay Kumar's Portfolio...
    </div>
  )
});

export default function Home() {
  return <PortfolioApp />;
}
