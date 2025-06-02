const typewriterElement = document.getElementById('typewriter');
const fullText = typewriterElement.innerHTML; // Récupère le texte existant
const speed = 50; // Vitesse d'écriture
let i = 0;

// Vide le texte au départ
typewriterElement.innerHTML = '';

function typeWriter() {
    if (i < fullText.length) {
        typewriterElement.innerHTML += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);