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