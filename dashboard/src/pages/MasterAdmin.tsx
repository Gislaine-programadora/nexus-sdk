// dashboard/src/pages/MasterAdmin.tsx
import React, { useEffect, useState } from 'react';

export default function MasterAdmin() {
  const [clients, setClients] = useState([]);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '40px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>Nexus Master Control</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#111' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
            <th style={s.th}>Empresa</th>
            <th style={s.th}>Status</th>
            <th style={s.th}>Saldo de Gás</th>
            <th style={s.th}>Domínios</th>
            <th style={s.th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Aqui você mapeia seus clientes vindos do banco */}
          <tr>
            <td style={s.td}>Game Studio Alpha</td>
            <td style={{ ...s.td, color: '#00ffa3' }}>ATIVO</td>
            <td style={s.td}>$ 128.450,22</td>
            <td style={s.td}>alpha-game.io</td>
            <td style={s.td}>
                <button style={s.btn}>Pausar Key</button>
                <button style={s.btnSec}>+ Saldo</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const s = {
  th: { padding: '20px', color: '#666' },
  td: { padding: '20px', borderBottom: '1px solid #222' },
  btn: { backgroundColor: '#ff4d4d', border: 'none', color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' },
  btnSec: { backgroundColor: '#6366F1', border: 'none', color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }
};