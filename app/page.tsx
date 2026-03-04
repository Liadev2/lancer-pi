'use client';

import { useState } from 'react';

export default function LancerPi() {
  const [piUser, setPiUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'market' | 'studio' | 'portfolio'>('market');
  const [hasCreativePass, setHasCreativePass] = useState(false);

  const connectWithPi = () => {
    alert('¡Conectado como Pioneer! 🎉 Ahora puedes usar todo Lancer-Pi');
  };

  const buyCreativePass = () => {
    alert('✅ Creative Pass activado (50 π/mes)\n\n¡IA ilimitada + boost en búsquedas activado!');
    setHasCreativePass(true);
  };

  const createEscrow = (price: number, title: string) => {
    alert(`✅ Escrow de π${price} creado con éxito para "${title}"\n\nEl pago está bloqueado hasta que entregues el trabajo.`);
  };

  const generateWithAI = () => {
    const userPrompt = prompt("¿Qué quieres crear hoy?");
    if (userPrompt) {
      alert(`✨ Generando con IA (Llama-3 + Stable Diffusion)...\n\n"${userPrompt}"\n\n✅ ¡Listo en segundos!\nResultado guardado en tu portafolio on-chain.`);
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* HEADER PREMIUM */}
      <header style={{ backgroundColor: '#000', borderBottom: '2px solid #facc15', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #facc15, #f97316, #ef4444)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', boxShadow: '0 0 40px rgba(250,204,21,0.7)' }}>π</div>
            <div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-2px' }}>Lancer-Pi</h1>
              <p style={{ color: '#facc15', fontSize: '18px', marginTop: '-6px' }}>AI Freelance Hub para Pioneers</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={connectWithPi} 
              style={{ background: 'linear-gradient(to right, #facc15, #f97316)', color: '#000', fontWeight: 'bold', padding: '16px 40px', borderRadius: '9999px', fontSize: '17px', boxShadow: '0 15px 35px rgba(250,204,21,0.5)' }}
            >
              Conectar con Pi
            </button>
            {!hasCreativePass && (
              <button 
                onClick={buyCreativePass}
                style={{ backgroundColor: '#18181b', color: '#facc15', border: '2px solid #facc15', padding: '16px 32px', borderRadius: '9999px', fontWeight: 'bold' }}
              >
                🎟️ Creative Pass (50 π/mes)
              </button>
            )}
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '12px', borderBottom: '3px solid #27272a', marginBottom: '60px', paddingBottom: '8px' }}>
          {['market', 'studio', 'portfolio'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab as any)}
              style={{ 
                padding: '16px 48px', 
                fontSize: '19px', 
                fontWeight: '700',
                borderBottom: activeTab === tab ? '5px solid #facc15' : '5px solid transparent',
                color: activeTab === tab ? '#facc15' : '#a3a3a3'
              }}
            >
              {tab === 'market' && '🛒 Marketplace'}
              {tab === 'studio' && '✨ AI Studio'}
              {tab === 'portfolio' && '📁 Portafolio On-Chain'}
            </button>
          ))}
        </div>

        {/* MARKETPLACE */}
        {activeTab === 'market' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {[
              { title: "Logo profesional en 24h", price: 85, seller: "cryptoartist.pi", rating: "4.98", emoji: "🎨" },
              { title: "Copywriting página de ventas", price: 120, seller: "copyking.pi", rating: "5.0", emoji: "📝" },
              { title: "Beat trap para TikTok", price: 45, seller: "soundpioneer.pi", rating: "4.85", emoji: "🎵" },
            ].map((gig, i) => (
              <div key={i} 
                style={{ 
                  backgroundColor: '#18181b', 
                  border: '1px solid #3f3f46', 
                  borderRadius: '28px', 
                  overflow: 'hidden',
                  transition: 'transform 0.4s, box-shadow 0.4s'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-16px)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(250,204,21,0.2)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ height: '280px', background: 'linear-gradient(#27272a, #111)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '140px' }}>
                  {gig.emoji}
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>{gig.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <p style={{ fontSize: '48px', fontWeight: '900', color: '#facc15' }}>π{gig.price}</p>
                      <p style={{ fontSize: '13px', color: '#71717a' }}>por entrega</p>
                    </div>
                    <button 
                      onClick={() => createEscrow(gig.price, gig.title)}
                      style={{ backgroundColor: '#10b981', color: 'white', padding: '16px 36px', borderRadius: '16px', fontWeight: '700', fontSize: '15px' }}
                    >
                      Contratar con Escrow
                    </button>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                    ⭐ {gig.rating} • {gig.seller}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI STUDIO */}
        {activeTab === 'studio' && (
          <div style={{ maxWidth: '760px', margin: '0 auto', backgroundColor: '#18181b', border: '2px solid #facc15', borderRadius: '28px', padding: '64px 48px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '12px' }}>Lancer Studio AI</h2>
            <p style={{ fontSize: '22px', color: '#a1a1aa' }}>Crea como profesional sin salir de Pi</p>

            <textarea 
              id="prompt" 
              style={{ width: '100%', height: '200px', backgroundColor: '#111', border: '1px solid #52525b', borderRadius: '20px', padding: '28px', fontSize: '19px', color: 'white', marginTop: '40px', resize: 'none' }} 
              placeholder="Un logo futurista para mi app de cripto, negro y neón púrpura..." 
            />

            <button 
              onClick={generateWithAI}
              style={{ width: '100%', background: 'linear-gradient(to right, #facc15, #f97316)', color: '#000', fontSize: '24px', fontWeight: '900', padding: '28px', borderRadius: '9999px', marginTop: '32px', boxShadow: '0 20px 40px rgba(250,204,21,0.4)' }}
            >
              🚀 Generar con IA • Gratis con Creative Pass
            </button>
          </div>
        )}

        {/* PORTAFOLIO */}
        {activeTab === 'portfolio' && (
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <div style={{ fontSize: '140px', marginBottom: '40px' }}>🛡️</div>
            <h2 style={{ fontSize: '58px', fontWeight: '900', marginBottom: '24px' }}>Tu Portafolio On-Chain</h2>
            <p style={{ fontSize: '26px', maxWidth: '800px', margin: '0 auto', color: '#a1a1aa', lineHeight: '1.4' }}>
              Todo lo que crees queda grabado para siempre en la blockchain de Pi.<br />
              <span style={{ color: '#facc15', fontWeight: '700' }}>Imposible falsificar.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}