const $box = document.getElementsByClassName('box')[0];

var onChange = function ({
    beta,
    gamma
}) {
    $box.style.top = `${Math.floor(beta)}%`;
    $box.style.left = `${Math.floor(gamma)}%`;

}

window.addEventListener("deviceorientation", onChange, true);