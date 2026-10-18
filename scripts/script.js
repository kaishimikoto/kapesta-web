let isHeaderMenuToggle = false;

function toggleHeaderMenu() {
    if (isHeaderMenuToggle === false) {
        document.querySelector(".header-navigation").style.display = "block";
        isHeaderMenuToggle = true;
    }
        else {
            document.querySelector(".header-navigation").style.display = "none";
            isHeaderMenuToggle = false;
        }
}

function contactSubmitDialog(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        document.getElementById("dialog-overlay").style.display = "flex";
    }
}

function reportSubmitDialog(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let attachment = document.getElementById("attachment").value;
    let confirm1 = document.getElementById("confirm1").checked;
    let confirm2 = document.getElementById("confirm2").checked;

    if (email && category && description && confirm1 && confirm2) {
        document.getElementById("dialog-overlay").style.display = "flex";
    }
}

function closeDialog() {
    const overlay = document.getElementById("dialog-overlay");
    const dialog = overlay.querySelector(".success-dialog");

    dialog.classList.add("is-closing");

    dialog.addEventListener("animationend", function handleAnimationEnd() {
        overlay.style.display = "none";
        dialog.classList.remove("is-closing");

        document.querySelector("form").reset();

        dialog.removeEventListener("animationend", handleAnimationEnd);
    });
}