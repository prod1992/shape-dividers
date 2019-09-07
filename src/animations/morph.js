import anime from "animejs";

(function (anime) {
    let dividerSVG = document.querySelector("svg"),
        animatingShape = document.querySelector("[data-animation]"),
        animatingShapeInverted = document.querySelectorAll("[data-animation].divider-shape--inverted"),
        animatingPath = document.querySelectorAll('.divider-shape--fill'),
        animationOptions;


    if (!!animatingShape) {
        animationOptions = {
            targets: animatingPath,
            ease: "easeInOutSine",
            duration: animatingShape.dataset.animationDuration,
            autoplay: false,
            direction: "alternate",
            ease: animatingShape.dataset.animationEasing || "easeInOutSine",
        }
        if (animatingShape.dataset.animation === "morph") {
            animationOptions.d = {
                value: animatingShape.dataset.targetD
            }
        }
        const animation = anime(animationOptions);
        dividerSVG.addEventListener(animatingShape.dataset.animationPlayOn, function () {
            animation.play();
        });
        dividerSVG.addEventListener(animatingShape.dataset.animationPauseOn, function () {
            animation.pause();
            if (animation.progress > 99.9) {
                animation.reverse();
                animation.play();
            } else {
                setTimeout(animation.play, 100)
            }
        });
    }

})(anime);