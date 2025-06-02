const toggleBtn = document.getElementById("button-theme");


const experienceImageMap = {
    "experience-nelmuse.png": "experience-nelmuse-dark.jpg",
    "experience-shopping.jpg": "experience-shopping-dark.jpg",
    "experience-londres.jpg": "experience-londres-dark.jpg",
    "experience-architect.jpg": "experience-architect-dark.jpg"
};


function updateIcon(isDark) {
    const icon = toggleBtn.querySelector("i");

    if (isDark) {
        icon.className = "bi bi-sun";
        toggleBtn.onmouseover = () => icon.className = "bi bi-sun-fill";
        toggleBtn.onmouseout = () => icon.className = "bi bi-sun";
    } else {
        icon.className = "bi bi-moon";
        toggleBtn.onmouseover = () => icon.className = "bi bi-moon-fill";
        toggleBtn.onmouseout = () => icon.className = "bi bi-moon";
    }
}


function updateExperienceImages(isDark) {
    const imgs = document.querySelectorAll(".experience-image img");

    imgs.forEach(img => {
        const filename = img.src.split('/').pop();

        if (isDark && experienceImageMap[filename]) {
        img.src = `assets/img/${experienceImageMap[filename]}`;
        } else if (!isDark) {
        const originalName = Object.entries(experienceImageMap).find(
            ([light, dark]) => dark === filename
        )?.[0];

        if (originalName) {
            img.src = `assets/img/${originalName}`;
        }
        }
    });
}


function updateMedia(isDark) {
    const heroGif = document.querySelector(".hero-frame .background-hero");

    if (heroGif) {
        heroGif.src = isDark
        ? "assets/img/hero-video-dark.gif"
        : "assets/img/hero-video.gif";
    }

    const aboutImg = document.getElementById("about-img");
    const contactImg = document.getElementById("contact-img");

        if (educationImg) {
            educationImg.src = isDark
                ? "assets/img/education-img-dark.jpg"
                : "assets/img/education-img.png";
    }

    if (contactImg) {
        contactImg.src = isDark
            ? "assets/img/contact-img-dark.gif"
            : "assets/img/contact-img.png";
    }

    updateExperienceImages(isDark);
}


function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }

    updateIcon(isDark);
    updateMedia(isDark);
}


toggleBtn.addEventListener("click", () => {
    const isCurrentlyDark = document.body.classList.contains("dark-mode");
    setTheme(!isCurrentlyDark);
});


window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setTheme(isDark);
});
