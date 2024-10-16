// portfolio.js
document.addEventListener("DOMContentLoaded", () => {
    const portfolioContainer = document.getElementsByClassName('portfolio-container')[0]; // Container waar portfolio-items geladen worden
  
    // Functie om portfolio-projecten te laden
    function loadPortfolio() {
      fetch('./json/portfolio.json')
        .then(response => response.json())
        .then(projects => {
          projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('portfolio-item', 'bg-white', 'rounded-md', 'shadow-md', 'p-4', 'w-full');
  
            projectElement.innerHTML = `
              <img src="${project.Afbeelding}" alt="${project.Naam} afbeelding" class="w-full h-40 object-contain rounded-md">
              <h3 class="text-xl font-bold mt-4">${project.Naam}</h3>
              <p class="text-gray-600 mt-2">${project.Beschrijving}</p>
              <a href="${project.link}" target="_blank" class="text-blue-500 underline mt-2 block">Bekijk project &rarr;</a>
            `;
  
            portfolioContainer.appendChild(projectElement);
          });
        })
        .catch(error => console.error('Error loading portfolio projects:', error));
    }
  
    // Portfolio laden bij pagina-initialisatie
    loadPortfolio();
  });
  