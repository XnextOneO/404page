let spotLight = document.querySelector('.spotLight');


window.addEventListener(`DOMContentLoaded`, () => {
        window.addEventListener(`mousemove`, e => updateSpotLight(e));

        function updateSpotLight(e) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const distanceX = Math.abs(e.pageX - centerX);
            const distanceY = Math.abs(e.pageY - centerY);
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            const maxSize = 250;
            const minSize = 100;
            const size = maxSize - (distance / Math.max(centerX, centerY)) * (maxSize - minSize);
            const spotLightSize = `transparent 0.1em, rgba(0,0,0,0.99) ${size}px`;
            spotLight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotLightSize})`;
        }

    }
);


// Создаем массив изображений
let backgrounds = [
    "astronaut_ring_neon_156673_1920x1080.jpg",
    "space.jpg",
    "cat.jpg",
    "fatCat.jpg"

];

// Выбираем случайное изображение из массива
let randomIndex = Math.floor(Math.random() * backgrounds.length);
let randomBackground = backgrounds[randomIndex];

// Устанавливаем случайное изображение как фон
document.body.style.backgroundImage = "url(" + randomBackground + ")";
