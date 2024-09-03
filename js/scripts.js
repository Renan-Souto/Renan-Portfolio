document.addEventListener('DOMContentLoaded', function() {
    const description = document.getElementById('description');
    const placeholderText = document.getElementById('placeholder-text');
    const dataText = document.createElement('p'); 
    dataText.id = 'data-text'; 
    description.appendChild(dataText); 

    const images = document.querySelectorAll('.icons-skills img');

    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            description.classList.add('show-description');
            dataText.textContent = this.getAttribute('data-text');
        });

        img.addEventListener('mouseout', function() {
            description.classList.remove('show-description');
            dataText.textContent = '';
        });
    });
});

function openProject(projectId) {
    console.log("Abrindo projeto: " + projectId);
}

document.querySelector('.projeto-card').addEventListener('mouseover', function() {
    this.style.cursor = 'pointer';
});






