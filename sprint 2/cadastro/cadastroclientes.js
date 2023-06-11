function cadastrarcliente() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var endereco = document.getElementById("endereço").value;


    if (nome == "" || email == "") {
        alert("Os campos nome e email são obrigatorios");
        return;
    }

    var cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cpf: cpf
    };

    var clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));


    alert("Cliente cadastrado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("endereco").value = "";
}