document.addEventListener('DOMContentLoaded', () => {
    const educationContent = document.querySelector('.education-content');
    
    if (educationContent) {
        
        educationData.forEach(education => {
            const educationElement = `
                <h4 class="education-date">${education.date}</h4>
                <p class="education-location">${education.location}</p>
                <p class="education-type">${education.type}</p>
                <p class="education-description">${education.description}</p>
            `;
            educationContent.innerHTML += educationElement;
        });
    }
}); 