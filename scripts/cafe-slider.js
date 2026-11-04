// ============== CAFE SLIDERS ==============

const cafeRows = document.querySelectorAll(".cafe-row");

cafeRows.forEach(function(row) {

    const viewport = row.querySelector(".cafes-viewport");
    const container = row.querySelector(".cafes-container");
    const leftButton = row.querySelector(".left-btn");
    const rightButton = row.querySelector(".right-btn");

    function getScrollAmount() {

        const cafe = container.querySelector(".cafe-item");

        if (!cafe) return 0;

        const styles = getComputedStyle(container);
        const gap = parseFloat(styles.columnGap) || 0;

        return cafe.getBoundingClientRect().width + gap;
    }

    // CHECK WHETHER EACH ARROW SHOULD BE VISIBLE
    function updateButtons() {

        const atStart = viewport.scrollLeft <= 1;

        const atEnd =
            viewport.scrollLeft + viewport.clientWidth >=
            viewport.scrollWidth - 1;

        leftButton.style.display = atStart ? "none" : "";
        rightButton.style.display = atEnd ? "none" : "";
    }

    // NEXT CAFE
    rightButton.addEventListener("click", function() {

        viewport.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });

    });

    // PREVIOUS CAFE
    leftButton.addEventListener("click", function() {

        viewport.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });

    });

    // UPDATE ARROWS
    viewport.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();

});
