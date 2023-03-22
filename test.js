let spotLight = document.querySelector('.spotLight');
let spotLightSize = `transparent 2em, rgba(0,0,0,0.9) 200px`

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