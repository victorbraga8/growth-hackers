<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Readme</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="sobre-o-projeto">Sobre o Projeto</h1>
<p>Projeto criado para teste técnico da Growth Hackers, atendendo aos requisitos de relacionamento entre produtos e categorias.</p>
<h1 id="feito-com">Feito com</h1>
<p>NodeJS - Express - TypeScript</p>
<h2 id="rotas-e-funcionalidades">Rotas e Funcionalidades</h2>
<p>Rota: /listacategorias<br>
Método: GET<br>
Funcionalidade: Listagem de Todas as Categorias.</p>
<p>Rota: /atualizaproduto/produtoId<br>
Método: PUT<br>
Funcionalidade: Atualização de Produto com base no valor informado no parâmetro de URL produtoId</p>
<p>Rota: /criacategoria<br>
Método: POST<br>
Funcionalidade: Cria um nova categoria</p>
<p>Rota: /buscacategoria/categoriaId<br>
Método: POST<br>
Funcionalidade: Busca uma Categoria e suas informações com base no valor informado no parâmetro de URL categoriaId</p>
<p>Rota: /atualizacategoria/:id<br>
Método: PUT<br>
Funcionalidade: Atualização de Categoria com base no valor informado no parâmetro de URL categoriaId</p>
<p>Rota: /removecategoria/:id<br>
Método: DELETE<br>
Funcionalidade: Remove uma categoria com base no valor informado no parâmetro de URL categoriaId</p>
<p>Rota: /listaprodutos<br>
Método: GET<br>
Funcionalidade: Listagem de Todos os Produtos.</p>
<p>Rota: /criaproduto<br>
Método: POST<br>
Funcionalidade: Cria um novo produto.</p>
<p>Rota: /atribuiprodutocat<br>
Método: POST<br>
Funcionalidade: Atribui um ou mais produtos em um categoria, sendo a atribuição apenas de itens únicos.</p>
<p>Rota: /removeatualizaprodutocat<br>
Método: POST<br>
Funcionalidade: Atualiza a relação de produtos em uma categoria, conservando os valores existentes.</p>
<p>Rota: /atualizaproduto/produtoId<br>
Método: PUT<br>
Funcionalidade: Atualização de Produto com base no valor informado no parâmetro de URL produtoId</p>
<p>Rota: /removeproduto/produtoId<br>
Método: DELETE<br>
Funcionalidade: Remove uma produto com base no valor informado no parâmetro de URL produtoId</p>
<p>Rota: /exportaprodutos<br>
Método: POST<br>
Funcionalidade: Exporta para um arquivo JSON a listagem de produtos existentes e suas respectivas informações.</p>
</div>
</body>

</html>
