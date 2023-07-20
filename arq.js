function calcularIdade() {
    const nome = document.querySelector("input[name=nome]").value;
    const ano = document.querySelector("input[name=ano]").value;
    
    if (!ano.match(/^\d{4}$/)) {
    alert("Ano inválido.");
    return;
    }
    
    const idade = new Date().getFullYear() - ano;
    
    document.querySelector(".container").innerHTML = `
    <h1>Olá, ${nome}!</h1>
    <p>Você tem ${idade} anos.</p>
    `;
    }
    
    document.querySelector("input[type=submit]").addEventListener("click", calcularIdade);
    