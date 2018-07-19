"use strict";

var fadeInElements = document.querySelectorAll(".fadeIn");
var images = document.querySelectorAll(".images img");
var checkboxes = document.querySelectorAll("input[type=checkbox]");
var checks = 0;
window.addEventListener("load", function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var element = _step.value;

            setTimeout(function () {
                element.classList.add('activeFadeIn');
            }, element.getAttribute("data-load-time"));
        };

        for (var _iterator = fadeInElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        var _loop2 = function _loop2() {
            var element = _step2.value;

            element.addEventListener("change", function () {
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
                        var stayClass = element.id === "grayscale" ? "blur" : "grayscale";
                        addEffectImage(stayClass);
                    }
                }
            });
        };

        for (var _iterator2 = checkboxes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop2();
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
});

function addEffectImage(effect) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = images[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var image = _step3.value;

            image.classList.add(effect);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}

function removeEffectImage(effect) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = images[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var image = _step4.value;

            image.classList.remove(effect);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
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