// ========================================
// WELCOME MESSAGE
// ========================================

function showMessage() {
    document.getElementById("message").innerHTML =
        "🌿 Welcome to our beautiful village and school! We are proud of our community, culture and students. 🌿";
}


// ========================================
// IMAGE POPUP / LIGHTBOX
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(
        ".card-images img, " +
        ".library-images img, " +
        ".village-photo-gallery img, " +
        ".achievement-gallery img"
    );

    const imagePopup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.querySelector(".close-popup");


    // Make sure popup elements exist
    if (!imagePopup || !popupImage || !closePopup) {
        return;
    }


    // OPEN IMAGE
    images.forEach(function (image) {

        image.addEventListener("click", function () {

            imagePopup.style.display = "flex";

            popupImage.src = this.src;

            popupImage.alt = this.alt;

        });

    });


    // CLOSE USING X
    closePopup.addEventListener("click", function () {

        imagePopup.style.display = "none";

    });


    // CLOSE BY CLICKING OUTSIDE IMAGE
    imagePopup.addEventListener("click", function (event) {

        if (event.target === imagePopup) {

            imagePopup.style.display = "none";

        }

    });


    // CLOSE USING ESCAPE
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            imagePopup.style.display = "none";

        }

    });

});