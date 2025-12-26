// nexus-sdk/frontend/src/pages/AdminDashboard.tsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', lucro: 400 },
  { name: '04:00', lucro: 700 },
  { name: '08:00', lucro: 1200 },
  { name: '12:00', lucro: 900 },
  { name: '16:00', lucro: 1500 },
  { name: '20:00', lucro: 2100 },
];

export default function AdminDashboard() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Nexus <span style={{color: '#6366F1'}}>Central Command</span></h1>
        <div style={styles.walletBadge}>Vault: 0x71C...4a2b</div>
      </header>

      <div style={styles.grid}>
        {/* Card 1: Lucro Acumulado (Spread + Stakes) */}
        <div style={styles.cardTall}>
          <p style={styles.cardLabel}>Lucro Total Acumulado</p>
          <h2 style={styles.cardValue}>$ 42.890,54</h2>
          <div style={{height: 200}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area type="monotone" dataKey="lucro" stroke="#6366F1" fill="rgba(99, 102, 241, 0.2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Status do Nó / Mineração */}
        <div style={styles.card}>
          <p style={styles.cardLabel}>Status do Validador</p>
          <div style={styles.statusRow}>
            <div style={styles.pulse}></div>
            <span style={styles.statusText}>Ativo & Minerando</span>
          </div>
        </div>

        {/* Card 3: API Keys Ativas */}
        <div style={styles.card}>
          <p style={styles.cardLabel}>API Keys em Uso</p>
          <h2 style={styles.cardValueSmall}>1.284</h2>
        </div>
      </div>

      {/* Tabela de Monitoramento das Orgs */}
      <section style={styles.tableSection}>
        <h3>Monitoramento de API Keys</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Organização</th>
              <th>Saldo Virtual</th>
              <th>Consumo (24h)</th>
              <th>Lucro Gerado</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td>GameStudio X</td>
              <td>$ 12.000,00</td>
              <td>$ 450,00</td>
              <td style={{color: '#00ffa3'}}>+ $ 90,00</td>
            </tr>
            <tr style={styles.tableRow}>
              <td>DeFi Protocol Pro</td>
              <td>$ 85.400,00</td>
              <td>$ 1.200,00</td>
              <td style={{color: '#00ffa3'}}>+ $ 240,00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

const styles = {
  page: { backgroundColor: '#050505', minHeight: '100vh', padding: '40px', color: 'white', fontFamily: 'Inter, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', marginBottom: '40px' },
  walletBadge: { backgroundColor: '#1A1A1A', padding: '10px 20px', borderRadius: '12px', border: '1px solid #333', fontSize: '14px' },
  grid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '40px' },
  cardTall: { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '30px', gridRow: 'span 2' },
  card: { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '30px' },
  cardLabel: { color: '#888', fontSize: '14px', marginBottom: '10px' },
  cardValue: { fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' },
  cardValueSmall: { fontSize: '32px', fontWeight: 'bold' },
  statusRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  pulse: { width: '12px', height: '12px', backgroundColor: '#00ffa3', borderRadius: '50%', boxShadow: '0 0 10px #00ffa3' },
  statusText: { color: '#00ffa3', fontWeight: 'bold' },
  tableSection: { background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '30px' },
  table: { width: '100%', borderCollapse: 'collapse' as const, marginTop: '20px' },
  tableRow: { borderBottom: '1px solid #1A1A1A', height: '60px' },
};