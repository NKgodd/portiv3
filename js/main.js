// Exemplo de animação para carregar o conteúdo
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.animate__animated').forEach(function(el) {
        el.classList.add('animate__fadeIn');
    });
});

// Seleciona os elementos da barra lateral e dos botões
const openSidebarButton = document.getElementById('openSidebar');
const closeSidebarButton = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

// Função para abrir a barra lateral
function openSidebar() {
    sidebar.classList.add('active');
}

// Função para fechar a barra lateral
function closeSidebar() {
    sidebar.classList.remove('active');
}

// Adiciona eventos de clique para os botões
openSidebarButton.addEventListener('click', openSidebar);
closeSidebarButton.addEventListener('click', closeSidebar);
