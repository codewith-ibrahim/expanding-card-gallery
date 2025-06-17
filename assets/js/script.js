document.addEventListener('DOMContentLoaded', function () {

    //Here is fetch the JSON data from the specified path

    fetch('assets/data/data.json')
        .then(response => response.json())
        .then(imageData => {
            renderImages(imageData);
            console.log('JSON loaded successfully:', imageData);
        })
        .catch(error => console.error('Error loading JSON:', error));

    //Here is render images with imageData as parameter
    function renderImages(imageData) {
        const container = document.getElementById('imageContainer');

        imageData.forEach(item => {
            const panel = document.createElement('div');
            panel.className = 'panel';
            panel.dataset.id = item.id;

            panel.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    <p class="description">${item.description}</p>
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;

            panel.addEventListener('click', function () {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                }
            });

            container.appendChild(panel);
        });
    }

});
