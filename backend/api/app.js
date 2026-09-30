import express from 'express'
import cors from 'cors'

import mock from '../server.js';
const {usuarios, livros, listarLivrosComusuario} = mock

const app = express ();

app.use  (cors());
app.use (express.json());

const getNextId = (arr) => (arr.length ? Math.max(...arr.map(i => i.id)) + 1 : 1);
'USUARIO ROTAS'
app.get("/usuarios", (req, res)=>{
    res.json(usuarios);
});

app.get ("/usuarios/:id", (req, res) => {
    const user = usuarios.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json ({erro: "Usuário não encontrado"});
    res.json(user);
});

app.post("/usuarios", (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: "Dados incompletos" });
    }
  
    const novo = { id: getNextId(usuarios), nome, email, senha };
    usuarios.push(novo);
    res.status(201).json(novo);
  });

  app.put("/usuarios/:id", (req, res) => {
    const user = usuarios.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ erro: "Usuário não encontrado" });
  
    const { nome, email, senha } = req.body;
    user.nome = nome ?? user.nome;
    user.email = email ?? user.email;
    user.senha = senha ?? user.senha;
  
    res.json(user);
  });
  app.delete("/usuarios/:id", (req, res) => {
    const index = usuarios.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).json({ erro: "Usuário não encontrado" });
    
    usuarios.splice(index, 1);
    res.json({ mensagem: "Usuário removido" });
  });
 'LIVROS ROTAS'
  app.get("/livros", (req, res) => {
    res.json(listarLivrosComUsuario());
  });
  
  app.get("/livros/:id", (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    res.json(livro);
  });
  app.post("/livros", (req, res) => {
    const { usuarioId, titulo, autor, categoria, disponivel } = req.body;
    if (!usuarioId || !titulo || !autor || !categoria) {
      return res.status(400).json({ erro: "Dados incompletos" });
    }
  
    const userExists = usuarios.some(u => u.id === usuarioId);
    if (!userExists) return res.status(400).json({ erro: "Usuário não existe" });
  
    const novo = {
      id: getNextId(livros),
      usuarioId,
      titulo,
      autor,
      categoria,
      disponivel: disponivel ?? true
    };
  
    livros.push(novo);
    res.status(201).json(novo);
  });
  
  app.put("/livros/:id", (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
  
    const { usuarioId, titulo, autor, categoria, disponivel } = req.body;
  
    if (usuarioId) {
      const userExists = usuarios.some(u => u.id === usuarioId);
      if (!userExists) return res.status(400).json({ erro: "Usuário não existe" });
      livro.usuarioId = usuarioId;
    }
  
    livro.titulo = titulo ?? livro.titulo;
    livro.autor = autor ?? livro.autor;
    livro.categoria = categoria ?? livro.categoria;
    livro.disponivel = disponivel ?? livro.disponivel;
  
    res.json(livro);
  });
  
  app.delete("/livros/:id", (req, res) => {
    const index = livros.findIndex(l => l.id == req.params.id);
    if (index === -1) return res.status(404).json({ erro: "Livro não encontrado" });
  
    livros.splice(index, 1);
    res.json({ mensagem: "Livro removido" });
  });
  
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`API da Biblioteca rodando em http://localhost:${PORT}`);
  });

