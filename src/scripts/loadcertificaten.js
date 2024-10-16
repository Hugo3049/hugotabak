// certificates.js
document.addEventListener("DOMContentLoaded", () => {
    const certificatenContainer = document.getElementsByClassName('certificaten-container')[0];
    const loadMoreBtn = document.getElementById('load-more-btn');
    let loadedCertificates = 0; // Bijhouden hoeveel certificaten geladen zijn
    let allCertificates = []; // Opslaan van alle certificaten
  
    // Functie om certificaten weer te geven
    function displayCertificates(certificates, start, limit) {
        certificates.slice(start, start + limit).forEach(cert => {
            const certElement = document.createElement('div');
            certElement.classList.add('certificate', 'bg-white', 'rounded-md', 'shadow-md', 'p-4', 'm-2');
  
            certElement.innerHTML = `
                <div class="flex items-center">
                    <img src="${cert.logo}" alt="${cert.titel} logo" class="w-16 h-16 object-cover mr-4">
                    <div>
                        <h2 class="text-xl font-bold">${cert.titel}</h2>
                        <p class="text-gray-600">Behaald op: ${cert.behaalDatum}</p>
                        <p class="text-gray-500">Referentienummer: ${cert.referentieNummer}</p>
                        <a href="${cert.link}" target="_blank" class="text-blue-500 underline">Verifieer certificaat</a>
                    </div>
                </div>
            `;
  
            certificatenContainer.appendChild(certElement);
        });
    }
  
    // Functie om certificaten te laden
    function loadCertificates() {
        fetch('./json/certificaten.json')
            .then(response => response.json())
            .then(certificates => {
                allCertificates = certificates.reverse(); // Keer de volgorde om
                displayCertificates(allCertificates, 0, 6); // Laad de eerste 6 certificaten
                loadedCertificates += 6;
  
                // Als er meer dan 6 certificaten zijn, toon de knop om de rest te laden
                if (allCertificates.length > 6) {
                    loadMoreBtn.classList.remove('hidden');
                }
            })
            .catch(error => console.error('Error loading certificates:', error));
    }
  
    // Event listener voor de "Meer certificaten laden" knop
    loadMoreBtn.addEventListener('click', function () {
        displayCertificates(allCertificates, loadedCertificates, 6); // Laad de volgende 6 certificaten
        loadedCertificates += 6;
  
        // Als alle certificaten zijn geladen, verberg de knop
        if (loadedCertificates >= allCertificates.length) {
            loadMoreBtn.classList.add('hidden');
        }
    });
  
    // Certificaten laden bij pagina-initialisatie
    loadCertificates();
  });
  