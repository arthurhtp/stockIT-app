

document.addEventListener('DOMContentLoaded', async () => {
    const listaAmbientes = document.getElementById('lista-ambientes');
    listaAmbientes.innerHTML = '';

    try {
        const resposta = await fetch('https://stockit-app.onrender.com/ambientes');
        if (!resposta.ok) throw new Error('Erro ao buscar os ambientes');

        const ambientes = await resposta.json();

        ambientes.forEach(ambiente => {
            const link = document.createElement('a');
            link.href = `../ambientes-page/ambiente.html?id=${ambiente.id}`;
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';

            const item = document.createElement('div');
            item.classList.add('ambiente');
            item.textContent = ambiente.nome;

            link.appendChild(item);
            listaAmbientes.appendChild(link);

        });

        if (ambientes.length === 0) {
            listaAmbientes.innerHTML = '<p>Nenhum ambiente cadastrado.</p>';
        }

    } catch (erro) {
        console.error(erro);
        listaAmbientes.innerHTML += '<h1>JSON Server ERROR!!!<br><br>Se estiver fazendo a avaliação por pares e o server cair,<br>   utilize o db.json na pasta db e hospede em seu replit. Troque o link no fetch! <br><br>Caso necessário: Contato: (31)999623317</h1>';
    }
});
