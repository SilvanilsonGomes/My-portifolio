function openCard(idx) {
  document.getElementById('card' + idx).classList.add('active');
}
function closeCard(idx) {
  document.getElementById('card' + idx).classList.remove('active');
}
// Função para abrir o card
function openCard(idx) {
  document.getElementById('card' + idx).classList.add('active');
  document.body.style.overflow = "hidden"; // opcional, trava o scroll do fundo
}

// Função para fechar o card
function closeCard(idx) {
  document.getElementById('card' + idx).classList.remove('active');
  document.body.style.overflow = ""; // libera o scroll do fundo
}

// Fecha o card ao clicar fora dele
document.addEventListener('mousedown', function(e) {
  const openedCards = document.querySelectorAll('.timeline-card.active');
  openedCards.forEach(card => {
    // Se clicar fora do card e fora de qualquer botão thumbnail
    if (!card.contains(e.target) && !e.target.classList.contains('timeline-thumb')) {
      card.classList.remove('active');
      document.body.style.overflow = "";
    }
  });
});
function toggleTextoExtra() {
  const extra = document.getElementById('texto-extra');
  const btn = document.getElementById('leia-mais-btn');
  if (extra.style.display === "none") {
      extra.style.display = "block";
      btn.textContent = "Leia menos";
  } else {
      extra.style.display = "none";
      btn.textContent = "Leia mais";
      // Opcional: rolar para o topo da apresentação ao recolher
      document.querySelector('.apresentacao').scrollIntoView({behavior: "smooth", block: "start"});
  }
}