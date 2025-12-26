// sdk/src/ui/Modal.ts
export class NexusUI {
  static injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
      .nexus-modal {
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 20px;
        padding: 30px; color: white; font-family: sans-serif; z-index: 9999;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5); text-align: center;
      }
      .nexus-btn {
        background: #6366F1; border: none; padding: 10px 20px;
        border-radius: 10px; color: white; cursor: pointer; font-weight: bold;
      }
    `;
    document.head.appendChild(style);
  }

  static showTransactionModal(amount: string, onConfirm: () => void) {
    this.injectStyles();
    const modal = document.createElement('div');
    modal.className = 'nexus-modal';
    modal.innerHTML = `
      <h3>Confirmar Transação</h3>
      <p>Valor: ${amount} USDC</p>
      <p style="color: #00ffa3;">✨ Gás Grátis (Nexus Sponsored)</p>
      <button id="nexus-confirm" class="nexus-btn">Assinar com Biometria</button>
    `;
    document.body.appendChild(modal);

    document.getElementById('nexus-confirm')?.addEventListener('click', () => {
      onConfirm();
      document.body.removeChild(modal);
    });
  }
}