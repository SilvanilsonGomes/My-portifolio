// --------- CARROSSEL ---------
const carouselTrack = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.project-card');
const cardsVisible = 3;
let currentIndex = 0;

function showCard(index) {
  const offset = -index * 320;
  carouselTrack.style.transform = `translateX(${offset}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < cards.length - cardsVisible) {
    currentIndex++;
    showCard(currentIndex);
  }
});
document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
});
showCard(currentIndex);

const projectInfo = {
  portfolioCard: {
    title: "Meu Portfólio",
    desc: `
      <strong>Mais detalhes sobre a criação do meu portfólio:</strong><br>


A ideia de criar meu portfólio surgiu da vontade de reunir, em um só lugar, meus projetos, informações profissionais e conquistas na área de tecnologia. Quando comecei a programação de estudo , percebi a importância de documentar minha evolução e ter uma plataforma própria para apresentar meu trabalho — algo que fosse além de um currículo simples em PDF. <br>
<br>
No início, eu tinha pouco conhecimento em desenvolvimento web. Por isso, comecei o básico, aprendendo HTML e CSS por meio de cursos gratuitos e vídeos no YouTube. Meu objetivo era criar um site simples, funcional e que refletisse minha personalidade e meus aprendizados. No processo, enfrentei vários desafios, como alinhar elementos, deixar o site responsivo e organizar o conteúdo de forma clara. Mas cada dificuldade foi uma oportunidade de aprendizado, e fui aprimorando o projeto aos poucos, experimentando núcleos, fontes e diferentes formas de apresentação. <br>
<br>
Além do desenvolvimento técnico, criar o portfólio me ajudou a estruturar melhor minha trajetória profissional, revisando projetos antigos, destacando minhas principais habilidades e definindo novas metas de estudo. Decidi também incluir um espaço para compartilhar experiências e reflexões sobre minha jornada, tornando o site mais pessoal e autêntico. <br>
<br>
Hoje, meu portfólio representa não só minhas habilidades técnicas, mas também minha dedicação, resiliência e vontade de crescer na área de tecnologia. Ele é meu cartão de visitas digital, onde posso mostrar quem sou, o que já conquistei e onde quero chegar. Espero que, ao navegar por aqui, você consiga perceber um pouco dessa trajetória e se inspire a também investir nos seus próprios projetos e sonhos.<br>
      <strong>Tecnologias usadas: HTML, CSS, JavaScript, GitHub Copilot.</strong><br>
      <a href="/" target="_blank">Acesse o site</a>
    `
  },
  project2Card: {
    title: "Projeto 2",
    desc: `
      <strong>Mais detalhes:</strong><br>
      Informações do Projeto 2.<br>
      Tecnologias usadas: ...<br>
      <a href="#" target="_blank">Acesse o projeto</a>
    `
  },
  project3Card: {
    title: "Projeto 3",
    desc: `
      <strong>Mais detalhes:</strong><br>
      Informações do Projeto 3.<br>
      Tecnologias usadas: ...<br>
      <a href="#" target="_blank">Acesse o projeto</a>
    `
  },
  project4Card: {
    title: "Projeto 4",
    desc: `
      <strong>Mais detalhes:</strong><br>
      Informações do Projeto 4.<br>
      Tecnologias usadas: ...<br>
      <a href="#" target="_blank">Acesse o projeto</a>
    `
  }
};

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const id = card.id;
    const float = document.getElementById('floatInfo');
    document.getElementById('floatTitle').innerHTML = projectInfo[id]?.title || "Projeto";
    document.getElementById('floatDescription').innerHTML = projectInfo[id]?.desc || "Informações em breve!";
    float.style.display = 'flex';
    e.stopPropagation();
  });
});

document.getElementById('closeFloatInfo').onclick = function(e) {
  document.getElementById('floatInfo').style.display = 'none';
  e.stopPropagation();
};
document.getElementById('floatInfo').addEventListener('click', function(e) {
  if (e.target === this) this.style.display = 'none';
});