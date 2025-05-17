// script.js - Código Completo para o Art Renewal Center Clone

/*********************
 * 1. DADOS DAS OBRAS *
 *********************/
const artworks = [
    {
        id: 1,
        title: "The Birth of Venus",
        artist: "William-Adolphe Bouguereau",
        year: "1879",
        description: "Vênus emerge do mar sobre uma concha, rodeada por anjos. Óleo sobre tela, 300 × 218 cm.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/William-Adolphe_Bouguereau_%281825-1905%29_-_The_Birth_of_Venus_%281879%29.jpg",
        category: "mythology"
    },
    {
        id: 2,
        title: "The Lady of Shalott",
        artist: "John William Waterhouse",
        year: "1888",
        description: "Representação da heroína trágica do poema de Tennyson. Óleo sobre tela, 153 × 200 cm.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg",
        category: "literary"
    }
];

/***********************
 * 2. FUNÇÕES PRINCIPAIS *
 ***********************/

// Carrega obras na galeria
function loadArtworks() {
    const gallery = document.getElementById('artworks-gallery');
    if (!gallery) return;

    gallery.innerHTML = artworks.map(artwork => `
        <div class="artwork-card" data-category="${artwork.category}">
            <img src="${artwork.image}" alt="${artwork.title}">
            <div class="artwork-info">
                <h3>${artwork.title}</h3>
                <p><strong>${artwork.artist}</strong> (${artwork.year})</p>
                <p>${artwork.description}</p>
                <button class="btn-details" data-id="${artwork.id}">Detalhes</button>
            </div>
        </div>
    `).join('');
}

// Filtro por categoria
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;
            const allArtworks = document.querySelectorAll('.artwork-card');
            
            allArtworks.forEach(artwork => {
                artwork.style.display = (category === 'all' || artwork.dataset.category === category) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
}

// Modal de detalhes
function setupModal() {
    const modal = document.getElementById('artwork-modal');
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const artworkId = parseInt(this.dataset.id);
            const artwork = artworks.find(a => a.id === artworkId);
            
            if (artwork && modal) {
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <img src="${artwork.image}" alt="${artwork.title}">
                        <h2>${artwork.title}</h2>
                        <p><strong>Artista:</strong> ${artwork.artist}</p>
                        <p><strong>Ano:</strong> ${artwork.year}</p>
                        <p>${artwork.description}</p>
                    </div>
                `;
                modal.style.display = "block";
                
                // Fechar modal
                document.querySelector('.close-modal').addEventListener('click', () => {
                    modal.style.display = "none";
                });
            }
        });
    });
}

/********************
 * 3. INICIALIZAÇÃO *
 ********************/
document.addEventListener('DOMContentLoaded', () => {
    loadArtworks();
    setupFilters();
    setupModal();
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});
