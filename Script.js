document.addEventListener("DOMContentLoaded", () => {

    // 1. Highlight Active Nav Link
    const currentPath = window.location.pathname.split("/").pop() || "Main.html";
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "Main.html")) {
            link.classList.add("active-nav");
        }
    });

    // 2. Click-to-Copy Email Feature on Contact Page
    const emailElements = document.querySelectorAll(".contacts-card p");
    
    emailElements.forEach((el) => {
        if (el.textContent.includes("@")) {
            el.style.cursor = "pointer";
            el.title = "Click to copy email address";

            el.addEventListener("click", () => {
                const emailText = el.textContent.trim();
                navigator.clipboard.writeText(emailText).then(() => {
                    const originalText = el.textContent;
                    el.textContent = "Copied to clipboard!";
                    el.style.color = "#28a745";

                    setTimeout(() => {
                        el.textContent = originalText;
                        el.style.color = "";
                    }, 2000);
                });
            });
        }
    });

    // 3. Reveal Elements on Scroll 
    const cards = document.querySelectorAll(".college-card, .about-card, .Languages-card, .contacts-card");

    cards.forEach((card) => card.classList.add("fade-in-section"));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));


    // 4. Interactive Skill Badges Highlight (Languages section)
    const skillItems = document.querySelectorAll(".languages-List li");

    skillItems.forEach((skill) => {
        skill.addEventListener("mouseenter", () => {
            skill.style.backgroundColor = "#ffb703";
            skill.style.color = "#0a436f";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.backgroundColor = "";
            skill.style.color = "#333";
        });
    });
});