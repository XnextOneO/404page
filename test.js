let spotLight = document.querySelector('.spotLight');

window.addEventListener(`DOMContentLoaded`, () => {
        window.addEventListener(`mousemove`, e => updateSpotLight(e));

        function updateSpotLight(e) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const distanceX = Math.abs(e.pageX - centerX);
            const distanceY = Math.abs(e.pageY - centerY);
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            const maxSize = 450;
            const minSize = 180;
            const size = maxSize - (distance / Math.max(centerX, centerY)) * (maxSize - minSize);
            const spotLightSize = `transparent 0.1em, rgba(0,0,0,0.99) ${size}px`;
            spotLight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotLightSize})`;
        }

    }
);

function getRandomBackgrounds() {
    // Создаем массив ссылок на изображения
    const backgrounds = ["https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrdmnNXjVtKa7z-yKFuxLx4bX4M9GfvSktQRIp4uqwQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJPmlP7H_zGNDA7--C3f065drXkFOx1Quasb-kSWLmQ&s"];

    // Выбираем случайные ссылки на изображения из массива
    const randomBackgrounds = [];
    for (let i = 0; i < 3; i++) { // выбираем 3 случайных фона
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        const randomBackground = backgrounds[randomIndex];
        randomBackgrounds.push(`url(${randomBackground})`);
        // удаляем выбранный элемент из массива backgrounds
        backgrounds.splice(randomIndex, 1);
    }

    // Возвращаем строку, содержащую ссылки на случайные изображения в формате background-image CSS
    return randomBackgrounds.join(", ");
}

// Получаем строку со ссылками на случайные изображения в формате background-image CSS
const backgroundImageString = getRandomBackgrounds();

// Устанавливаем случайные изображения как фон
document.body.style.backgroundImage = backgroundImageString;
