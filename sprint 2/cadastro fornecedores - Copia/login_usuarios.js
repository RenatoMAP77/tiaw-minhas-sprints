// Função para verificar o login do usuário
function login() {
    const email = document.querySelector('#LoginEmail').value;
    const senha = document.querySelector('#LoginSenha').value;
    
    // Verificar se o email e a senha correspondem a um perfil existente
    const dbProvedores = JSON.parse(localStorage.getItem('formData'));
    const perfil = dbProvedores.provedores.find(perfil => perfil.email === email && perfil.senha === senha);
    
    if (perfil) {
      // Login bem-sucedido
      localStorage.setItem('loggedInUser', JSON.stringify(perfil));
      alert('Login bem-sucedido!');
      
      
    } else {
      // Login inválido
      alert('Email ou senha inválidos.');
    }
  }
  
  // Associar a função de login ao botão de login
  document.getElementById('botaoLogin').addEventListener('click', login);

