// exibe o botão quando o usuário rola a página para baixo
window.onscroll = function() {
  var btnTop = document.getElementById("btnTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// permite que o usuário role de forma suave para o topo da página ao clicar no botão
document.getElementById("btnTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
