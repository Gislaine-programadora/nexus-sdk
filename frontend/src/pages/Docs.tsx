// nexus-sdk/frontend/src/pages/Docs.tsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function NexusDocs() {
  const codeString = `
import Nexus from '@nexus-hq/sdk';

const nexus = new Nexus({
  apiKey: 'nx_live_vossa_chave',
  network: 'multi-chain'
});

// Executar transação sem gás em qualquer rede
await nexus.execute({
  to: '0x...',
  value: '0.1',
  network: 'base'
});
  `;

  return (
    <div style={styles.container}>
      {/* Sidebar de Navegação */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>NEXUS <span style={{fontSize: '10px', verticalAlign: 'top'}}>SDK</span></div>
        <nav style={styles.nav}>
          <a href="#intro" style={styles.navLinkActive}>Introdução</a>
          <a href="#setup" style={styles.navLink}>Configuração Rápida</a>
          <a href="#multichain" style={styles.navLink}>Multi-chain Gateway</a>
          <a href="#bridge" style={styles.navLink}>Bridge Automática</a>
          <a href="#billing" style={styles.navLink}>Gestão de Saldo</a>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main style={styles.content}>
        <section id="intro">
          <h1 style={styles.title}>O SDK Definitivo para Web3</h1>
          <p style={styles.text}>
            O Nexus permite que empresas integrem capacidades de blockchain em segundos, 
            eliminando a necessidade dos usuários lidarem com taxas de gás ou trocas de rede.
          </p>
          
          <div style={styles.codeBlock}>
            <div style={styles.codeHeader}>Exemplo de Implementação</div>
            <SyntaxHighlighter language="typescript" style={dracula}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </section>

        <section id="setup" style={{marginTop: '60px'}}>
          <h2 style={styles.subtitle}>Instalação</h2>
          <p style={styles.text}>Instale o pacote via NPM ou utilize o nosso CLI exclusivo:</p>
          <div style={styles.terminal}>
            <code>npm install @nexus-hq/sdk</code>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: { display: 'flex', minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'Inter, sans-serif' },
  sidebar: { width: '260px', borderRight: '1px solid #222', padding: '40px 20px', position: 'fixed' as const, height: '100vh' },
  logo: { fontSize: '22px', fontWeight: 'bold', letterSpacing: '-1px', marginBottom: '40px' },
  nav: { display: 'flex', flexDirection: 'column' as const, gap: '15px' },
  navLink: { color: '#888', textDecoration: 'none', fontSize: '14px', transition: '0.2s' },
  navLinkActive: { color: '#6366F1', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' },
  content: { marginLeft: '260px', padding: '80px 100px', maxWidth: '900px' },
  title: { fontSize: '48px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' },
  subtitle: { fontSize: '28px', fontWeight: '700', marginBottom: '16px' },
  text: { color: '#a1a1aa', lineHeight: '1.6', fontSize: '18px', marginBottom: '30px' },
  codeBlock: { borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' },
  codeHeader: { backgroundColor: '#1a1a1a', padding: '10px 20px', fontSize: '12px', color: '#666', borderBottom: '1px solid #333' },
  terminal: { backgroundColor: '#111', padding: '20px', borderRadius: '8px', border: '1px solid #333', color: '#00ffa3', fontFamily: 'monospace' }
};