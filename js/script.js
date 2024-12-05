let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

console.log("Código carregado!");





const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}


// Função para definir o passo ativo com base na URL
function setActiveStepByPage() {
   const steps = document.querySelectorAll('.step');
   const currentPage = window.location.pathname;

   // Mapeia as páginas para os passos
   const stepMapping = {
      '/playlist.html': 1, // Página "playlist" corresponde à Teoria
      
      '/index.html': 2, // Página de simulação
     
   };

   // Identifica o número do passo ativo com base na URL
   const activeStep = stepMapping[currentPage] || 0;

   steps.forEach((step, index) => {
      if (index < activeStep) {
         step.classList.add('active');
      } else {
         step.classList.remove('active');
      }
   });
}

// Chama a função ao carregar a página
setActiveStepByPage();


// Selecionando os elementos do menu e sidebar
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.side-bar');

// Alternar a visibilidade do sidebar ao clicar no ícone de menu
menuBtn.addEventListener('click', () => {
   sidebar.classList.toggle('active'); // Se 'active' não estiver, ele adiciona, se estiver, ele remove
});



window.onload = function() {
   var profileImage = localStorage.getItem('profileImage');
   
   if (profileImage) {
      // Atualizar a imagem no perfil
      document.getElementById('profile-img-home').src = profileImage;
   }
};






