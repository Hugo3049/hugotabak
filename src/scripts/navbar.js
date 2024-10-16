// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("section");
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    // Functie om de highlight op de navigatielinks te beheren
    function highlightSection() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
                const id = section.getAttribute("id");

                // Verwijder highlight van alle desktop en mobiele links
                navLinks.forEach(link => link.classList.remove("highlight", "font-bold"));
                mobileLinks.forEach(link => link.classList.remove("highlight", "font-bold"));

                // Voeg highlight toe aan de huidige link op desktop en mobiel
                const navLink = document.querySelector(`header ul li a[href="#${id}"]`);
                const mobileLink = document.querySelector(`#mobile-menu a[href="#${id}"]`);

                if (navLink) navLink.classList.add("highlight", "font-bold");
                if (mobileLink) mobileLink.classList.add("highlight", "font-bold");
            }
        });
    }

    // Event listener voor scroll
    window.addEventListener("scroll", highlightSection);

    // Event listener voor mobiele menuknop
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Event listener om het mobiele menu te sluiten na een klik op een item
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden'); // Verberg het menu
        });
    });
});
