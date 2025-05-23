document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skills-container');
    
    if (skillsContainer) {
        
        skillsData.forEach(skill => {
            const skillElement = `
                <div class="skill">
                    <i class="${skill.icon}"></i>
                    <p>${skill.name}</p>
                </div>
            `;
            skillsContainer.innerHTML += skillElement;
        });
    }
}); 