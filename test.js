let spotLight = document.querySelector('.spotLight');
let spotLightSize = `transparent 0.1em, rgba(0,0,0,0.95) 200px`

window.addEventListener(`DOMContentLoaded`, () => {
        window.addEventListener(`mousemove`, e => updateSpotLight(e));

        function updateSpotLight(e) {
            spotLight.style.backgroundImage = `radial-gradient(circle at
            ${e.pageX / window.innerWidth * 100}% 
            ${e.pageY / window.innerHeight * 100}% ,${spotLightSize}
            )`;
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
