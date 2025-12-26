import React, { useState } from 'react';
import { Wallet, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

/**
 * 🛡️ NEXUS SDK - SIMULAÇÃO (MOCK)
 * Isso permite que o código funcione antes de você publicar o SDK no NPM.
 */
const NexusContext = React.createContext<any>(null);

const NexusProvider = ({ children, apiKey }: { children: React.ReactNode, apiKey: string }) => {
  const [wallet, setWallet] = useState<{ address: string } | null>(null);

  const connect = (provider: string) => {
    console.log(`Conectando via ${provider}...`);
    // Simulando uma conexão rápida (High-End UX)
    setTimeout(() => {
      setWallet({ address: '0x71C8405050505050505050505050505050505050' });
    }, 1000);
  };

  const sendTransaction = (tx: any) => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <NexusContext.Provider value={{ wallet, connect, sendTransaction, apiKey }}>
      {children}
    </NexusContext.Provider>
  );
};

const useNexus = () => React.useContext(NexusContext);

/**
 * 🚀 APLICAÇÃO DE DEMONSTRAÇÃO (BUSINESS APP)
 */
export default function BusinessApp() {
  return (
    <NexusProvider apiKey="NX_PRO_8829_LIVE">
      <div style={styles.container}>
        {/* Background Blur Decorativo */}
        <div style={styles.blob1}></div>
        <div style={styles.blob2}></div>
        
        <MainDashboard />
      </div>
    </NexusProvider>
  );
}

function MainDashboard() {
  const { wallet, connect, sendTransaction } = useNexus();
  const [isBuying, setIsBuying] = useState(false);

  const handlePurchase = async () => {
    setIsBuying(true);
    await sendTransaction({ to: "0xStore", value: "0.05", paymaster: true });
    setIsBuying(false);
    alert("Transação Nexus concluída com sucesso!");
  };

  return (
    <main style={styles.card}>
      <div style={styles.header}>
        <div style={styles.logoGroup}>
          <div style={styles.logoIcon}><Cpu size={16} color="white" /></div>
          <span style={styles.logoText}>NEXUS <span style={{fontWeight: 300}}>SDK</span></span>
        </div>
        <div style={styles.badgeLive}>EXPERIMENTAL v0.1</div>
      </div>

      <h1 style={styles.title}>Web3 Checkout</h1>
      <p style={styles.subtitle}>Integração nativa de alto padrão para sua dApp.</p>

      {!wallet ? (
        <div style={styles.actionArea}>
          <button onClick={() => connect('google')} style={styles.buttonPrimary}>
            <Globe size={18} style={{marginRight: 10}} />
            Entrar com Google
          </button>
          <p style={styles.footerText}>Conexão segura via Passkeys</p>
        </div>
      ) : (
        <div style={styles.walletArea}>
          <div style={styles.statusBox}>
            <ShieldCheck size={16} color="#00ffa3" />
            <span style={styles.statusText}>Smart Wallet Ativa</span>
          </div>
          
          <div style={styles.addressBox}>
            {wallet.address.substring(0, 6)}...{wallet.address.substring(36)}
          </div>

          <button 
            disabled={isBuying}
            onClick={handlePurchase} 
            style={{
              ...styles.buttonAction,
              opacity: isBuying ? 0.6 : 1,
              transform: isBuying ? 'scale(0.98)' : 'scale(1)'
            }}
          >
            <Zap size={18} fill="white" style={{marginRight: 10}} />
            {isBuying ? "Processando..." : "Confirmar Compra"}
          </button>
        </div>
      )}
    </main>
  );
}

/**
 * 🎨 DESIGN SYSTEM (MODERN & FUNCTIONAL)
 */
const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    backgroundColor: '#020203', 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    fontFamily: 'Inter, sans-serif', 
    color: 'white',
    overflow: 'hidden',
    position: 'relative'
  },
  blob1: { position: 'absolute', width: '300px', height: '300px', background: '#6366F1', filter: 'blur(100px)', opacity: 0.15, top: '10%', left: '20%' },
  blob2: { position: 'absolute', width: '300px', height: '300px', background: '#A855F7', filter: 'blur(100px)', opacity: 0.15, bottom: '10%', right: '20%' },
  card: { 
    background: 'rgba(15, 15, 20, 0.7)', 
    padding: '40px', 
    borderRadius: '32px', 
    border: '1px solid rgba(255, 255, 255, 0.08)', 
    backdropFilter: 'blur(20px)', 
    textAlign: 'center', 
    width: '360px',
    zIndex: 10,
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
  logoGroup: { display: 'flex', alignItems: 'center', gap: '8px' },
  logoIcon: { background: '#6366F1', padding: '6px', borderRadius: '8px', display: 'flex' },
  logoText: { fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' },
  badgeLive: { fontSize: '10px', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '20px', color: '#888', border: '1px solid rgba(255,255,255,0.1)' },
  title: { fontSize: '24px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' },
  subtitle: { fontSize: '14px', color: '#888', marginBottom: '32px', lineHeight: '1.5' },
  buttonPrimary: { 
    width: '100%', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', 
    backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', fontWeight: '600', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
  },
  buttonAction: { 
    width: '100%', padding: '16px', borderRadius: '16px', border: 'none', 
    backgroundColor: '#6366F1', color: 'white', fontWeight: '700', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
    boxShadow: '0 10px 20px -5px rgba(99, 102, 241, 0.4)'
  },
  footerText: { fontSize: '11px', color: '#555', marginTop: '16px' },
  walletArea: { animation: 'fadeIn 0.4s ease-out' },
  statusBox: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' },
  statusText: { fontSize: '12px', color: '#00ffa3', fontWeight: '600' },
  addressBox: { 
    fontSize: '12px', color: '#888', backgroundColor: 'rgba(0,0,0,0.2)', 
    padding: '12px', borderRadius: '12px', marginBottom: '24px', border: '1px dashed rgba(255,255,255,0.1)' 
  }
};