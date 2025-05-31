       
       
       document.addEventListener('DOMContentLoaded', async () => {
            const listaAmbientes = document.getElementById('lista-ambientes');
            listaAmbientes.innerHTML = ''; 
        
            try {
                const resposta = await fetch('https://stockit-app.onrender.com/ambientes');
                if (!resposta.ok) throw new Error('Erro ao buscar os ambientes');
                
                const ambientes = await resposta.json();
        
                ambientes.forEach(ambiente => {
                    const item = document.createElement('div');
                    item.classList.add('ambiente');
        
                    item.innerHTML = `<a href="../ambientes-page/ambiente.html?id=${ambiente.id}" style="text-decoration:none; color:inherit;">${ambiente.nome}</a>`;
        
                    listaAmbientes.appendChild(item);
                });
                
                if (ambientes.length === 0) {
                    listaAmbientes.innerHTML = '<p>Nenhum ambiente cadastrado.</p>';
                }
        
            } catch (erro) {
                console.error(erro);
                listaAmbientes.innerHTML += '<h1>JSON Server ERROR!!!<br><br>Se estiver fazendo a avaliação por pares e o server cair,<br>   utilize o db.json na pasta db e hospede em seu replit. Troque o link no fetch! <br><br>Caso necessário: Contato: (31)999623317</h1>';
            }
        });
        