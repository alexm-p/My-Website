function viewAlbum(albumName) {
    console.log("test");
    window.location.href = `stuffivesnapped/${albumName}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const pathArray = window.location.pathname.split('/');
    if (pathArray[1] === 'stuffivesnapped' && pathArray[2]) {
        loadAlbum(pathArray[2]);
    }
});

function loadAlbum(albumName) {
    document.getElementById('album-title').innerText = albumName.replace('album', 'Album ');
    
    const albumData = {
        album1: [
            { src: '/images/photography/album1/image1.jpg', description: 'Image 1 description' },
            { src: '/images/photography/album1/image2.jpg', description: 'Image 2 description' },
            // Add more images as needed
        ],
        album2: [
            { src: '/images/photography/album2/image1.jpg', description: 'Image 1 description' },
            { src: '/images/photography/album2/image2.jpg', description: 'Image 2 description' },
            // Add more images as needed
        ]
    };

    const images = albumData[albumName];
    const albumContainer = document.getElementById('album-container');
    if (images) {
        const carousel = document.createElement('div');
        carousel.className = 'carousel';
        
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = `Image ${index + 1}`;
            if (index === 0) imgElement.className = 'active';
            carousel.appendChild(imgElement);

            const descElement = document.createElement('div');
            descElement.className = 'description';
            descElement.innerText = image.description;
            carousel.appendChild(descElement);
        });

        const prev = document.createElement('a');
        prev.className = 'prev';
        prev.innerText = '❮';
        prev.onclick = () => changeSlide(-1);
        carousel.appendChild(prev);

        const next = document.createElement('a');
        next.className = 'next';
        next.innerText = '❯';
        next.onclick = () => changeSlide(1);
        carousel.appendChild(next);

        albumContainer.appendChild(carousel);

        let slideIndex = 0;

        function changeSlide(n) {
            const slides = document.querySelectorAll('.carousel img');
            const descriptions = document.querySelectorAll('.carousel .description');
            slides[slideIndex].classList.remove('active');
            slideIndex = (slideIndex + n + slides.length) % slides.length;
            slides[slideIndex].classList.add('active');
            descriptions[slideIndex].classList.add('active');
        }
    }
}
