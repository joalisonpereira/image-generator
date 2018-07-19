const fadeInElements = document.querySelectorAll(".fadeIn");
const images = document.querySelectorAll(".images img");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
let checks = 0;
window.addEventListener("load", () => {
    for (let element of fadeInElements) {
        setTimeout(() => {
            element.classList.add('activeFadeIn');
        }, element.getAttribute("data-load-time"));
    }
    for (let element of checkboxes) {
        element.addEventListener("change", () => {
            if (isChecked(element)) {
                if (++checks == 1) {
                    addEffectImage(element.id);
                } else {
                    clearEffects();
                    addEffectImage("grayscale-blur");
                }
            } else {
                clearEffects();
                if (--checks == 1) {
                    let stayClass = (element.id === "grayscale") ? "blur" : "grayscale";
                    addEffectImage(stayClass);
                }
            }
        });
    }
});

function addEffectImage(effect) {
    for (let image of images) {
        image.classList.add(effect);
    }
}

function removeEffectImage(effect) {
    for (let image of images) {
        image.classList.remove(effect);
    }
}

function isChecked(element) {
    return element.checked === true;
}

function clearEffects() {
    removeEffectImage("grayscale");
    removeEffectImage("blur");
    removeEffectImage("grayscale-blur");
}