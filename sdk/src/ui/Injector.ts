// sdk/src/ui/Injector.ts

export class NexusStyles {
  private static isInjected = false;

  static inject() {
    if (this.isInjected) return;

    const style = document.createElement('style');
    style.id = 'nexus-sdk-styles';
    style.innerHTML = `
      /* Inserindo o CSS que criamos anteriormente */
      :root {
        --nexus-primary: #6366F1;
        --nexus-success: #00FFA3;
        --nexus-bg: rgba(15, 15, 20, 0.95);
        --nexus-border: rgba(255, 255, 255, 0.12);
        --nexus-text: #FFFFFF;
      }
      .nexus-overlay {
        position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px); display: flex; align-items: center;
        justify-content: center; z-index: 10000; font-family: sans-serif;
      }
      .nexus-modal-card {
        background: var(--nexus-bg); border: 1px solid var(--nexus-border);
        border-radius: 24px; padding: 32px; width: 90%; max-width: 380px;
        text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        color: white; animation: nexusSlideUp 0.3s ease-out;
      }
      .nexus-badge-gas {
        display: inline-block; background: rgba(0, 255, 163, 0.1);
        color: var(--nexus-success); padding: 5px 15px; border-radius: 20px;
        font-size: 12px; font-weight: bold; margin-bottom: 15px;
      }
      .nexus-main-btn {
        width: 100%; background: var(--nexus-primary); color: white;
        border: none; padding: 15px; border-radius: 12px; font-size: 16px;
        font-weight: bold; cursor: pointer; transition: 0.2s;
      }
      .nexus-main-btn:hover { filter: brightness(1.2); transform: scale(1.02); }
      
      @keyframes nexusSlideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    this.isInjected = true;
  }
}