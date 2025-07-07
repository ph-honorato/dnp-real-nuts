console.log("hello world");

$(function () {
  console.log("test");
  $("#main-content").load("./src/sections/MainContent.html");
  $("#quem-somos").load("./src/sections/QuemSomos.html");
  $("#produtos").load("./src/sections/Produtos.html");
});
