// Dados dos artistas
const artists = [
    {
        name: "William Bouguereau",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/William-Adolphe_Bouguereau_%281825-1905%29_-_The_Birth_of_Venus_%281879%29.jpg",
        bio: "French academic painter"
    },
    {
        name: "John William Waterhouse",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg",
        bio: "English Pre-Raphaelite painter"
    }
];

// Carrega artistas na página
function loadArtists() {
    const grid = document.getElementById('featuredArtists');
    
    artists.forEach(artist => {
        grid.innerHTML += `
            <div class="artist-card">
                <img src="${artist.image}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <p>${artist.bio}</p>
            </div>
        `;
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', loadArtists);
