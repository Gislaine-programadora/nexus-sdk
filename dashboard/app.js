// dashboard/app.js

async function fetchDashboardData() {
    try {
        // Chamada real para o seu backend
        const response = await fetch('http://localhost:3001/v1/admin/organizations');
        const organizations = await response.json();
        
        renderDashboard(organizations);
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        alert("Não foi possível carregar os dados do servidor.");
    }
}

function renderDashboard(organizations) {
    const tableBody = document.querySelector("#clients-table tbody");
    
    // Cálculo real baseado no banco de dados
    const totalBalance = organizations.reduce((acc, curr) => acc + curr.gasBalance, 0);
    const activeCount = organizations.filter(o => o.status === 'ACTIVE').length;

    document.getElementById('total-sponsored').innerText = `$ ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    document.getElementById('active-clients').innerText = activeCount;

    tableBody.innerHTML = organizations.map(org => `
        <tr>
            <td><strong>${org.name}</strong></td>
            <td style="color: ${org.gasBalance < 5000 ? '#ef4444' : '#10b981'}">
                $ ${org.gasBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </td>
            <td style="font-family: monospace; color: #94a3b8;">${org.apiKey}</td>
            <td><span class="${org.status === 'ACTIVE' ? 'status-active' : ''}">${org.status}</span></td>
            <td>
                <button onclick="copyKey('${org.apiKey}')" style="background: #334155; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Copiar Key</button>
            </td>
        </tr>
    `).join('');
}

// Função utilitária para facilitar sua vida
window.copyKey = (key) => {
    navigator.clipboard.writeText(key);
    alert("API Key copiada!");
};

// Inicia a busca de dados assim que a página carrega
fetchDashboardData();

// Atualiza os dados a cada 30 segundos automaticamente
setInterval(fetchDashboardData, 30000);