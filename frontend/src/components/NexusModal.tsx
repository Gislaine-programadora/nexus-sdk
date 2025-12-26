// nexus-sdk/frontend/src/components/NexusModal.tsx
import React from 'react';

export const NexusModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.glassCard}>
        <div style={styles.header}>
          <div style={styles.logoBadge}>N</div>
          <h3>Nexus Smart Wallet</h3>
        </div>
        
        <p style={styles.text}>Aprovar transação na rede <b>Polygon</b>?</p>
        
        <div style={styles.gasBadge}>
          <span>⛽ Gas Patrocinado por Nexus</span>
        </div>

        <button onClick={onClose} style={styles.confirmBtn}>
          Confirmar com FaceID
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: { position: 'fixed' as const, inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  glassCard: { background: 'rgba(20, 20, 22, 0.9)', backdropFilter: 'blur(15px)', padding: '24px', borderRadius: '28px', border: '1px solid rgba(255,255,255,0.1)', width: '320px', textAlign: 'center' as const },
  header: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'white' },
  logoBadge: { background: 'linear-gradient(135deg, #6366F1, #A855F7)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' },
  text: { color: '#94A3B8', fontSize: '14px', marginBottom: '16px' },
  gasBadge: { backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', display: 'inline-block', marginBottom: '20px' },
  confirmBtn: { width: '100%', padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#FFF', color: '#000', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }
};