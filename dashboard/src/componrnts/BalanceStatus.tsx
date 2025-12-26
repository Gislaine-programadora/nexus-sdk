// dashboard/src/components/BalanceStatus.tsx
export function BalanceStatus({ current, initial }) {
  const percentage = (current / initial) * 100;
  const isLow = percentage < 15;

  return (
    <div style={{ width: '200px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <span>{percentage.toFixed(1)}% restante</span>
        {isLow && <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>BAIXO!</span>}
      </div>
      <div style={{ 
        width: '100%', 
        height: '8px', 
        backgroundColor: '#333', 
        borderRadius: '4px',
        marginTop: '5px' 
      }}>
        <div style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          backgroundColor: isLow ? '#ff4d4d' : '#6366F1',
          borderRadius: '4px',
          transition: 'width 0.5s ease'
        }} />
      </div>
    </div>
  );
}