const usuarios = [
    {
      id: 1,
      nome: "Vitória Lima",
      email: "vitoria@email.com",
      senha: "123456"
    },
    {
      id: 2,
      nome: "Luana Borges",
      email: "luana@email.com",
      senha: "abcdef"
    },
    {
      id: 3,
      nome: "Carlos Lima",
      email: "carlos@email.com",
      senha: "senha123"
    }
  ];
  
  const livros = [
    {
      id: 1,
      usuarioId: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      categoria: "Fantasia",
      disponivel: true
    },
    {
      id: 2,
      usuarioId: 2,
      titulo: "1984",
      autor: "George Orwell",
      categoria: "Ficção Científica",
      disponivel: false
    },
    {
      id: 3,
      usuarioId: 3,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      categoria: "Literatura Brasileira",
      disponivel: true
    }
  ];
  
  // Função utilitária para "popular" o usuário no livro (simulando JOIN)
  function listarLivrosComUsuario() {
    return livros.map((livro) => {
      const usuario = usuarios.find((u) => u.id === livro.usuarioId);
      return {
        ...livro,
        nomeUsuario: usuario ? usuario.nome : null,
        emailUsuario: usuario ? usuario.email : null
      };
    });
  }
  
  // Exemplo de uso:
  console.log(listarLivrosComUsuario());
  
  module.exports = { usuarios, livros, listarLivrosComUsuario };