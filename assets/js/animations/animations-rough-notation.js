// animations-rough-notation.js

window.addEventListener("DOMContentLoaded", () => {

    const isDarkMode = () => document.body.classList.contains('dark-mode');

    // === UTILS : Supprimer tous les SVG RoughNotation ===
    function clearAnnotations() {
        document.querySelectorAll("svg.rough-annotation").forEach(svg => svg.remove());
    }

    // === Création si pas dark ===
    function activateAnnotations() {
        if (isDarkMode()) {
            clearAnnotations(); // supprime tout si jamais il en restait
            return;
        }

        // UNDERLINE
        document.querySelectorAll('.animation-underline').forEach(element => {
            const annotation = RoughNotation.annotate(element, {
            type: 'underline',
                color: '#000000',
            animate: true,
            animationDuration: 1000,
        });
        annotation.show();
        });

        // CIRCLE
        document.querySelectorAll('.animation-circle').forEach(element => {
            const annotation = RoughNotation.annotate(element, {
            type: 'circle',
                color: '#000000',
            animate: true,
            animationDuration: 800,
        });
        annotation.show();

        element.addEventListener('mouseenter', () => {
            annotation.hide();
            setTimeout(() => {
                annotation.show();
            }, 50);
        });
    });

        // HIGHLIGHT (toujours rose, seulement si pas dark)
        document.querySelectorAll('.animation-highlight').forEach(element => {
            const annotation = RoughNotation.annotate(element, {
            type: 'highlight',
                color: '#f1e9e9',
            animate: true,
            animationDuration: 1000,
            padding: 5,
        });
        annotation.show();
        });
    }

    // Initialisation
    activateAnnotations();

    // Thème : si on change, on supprime ou réactive
    const toggleBtn = document.getElementById('button-theme');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            setTimeout(() => {
                clearAnnotations();
                activateAnnotations();
            }, 300);
        });
    }
});
