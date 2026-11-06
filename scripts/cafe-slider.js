// ============== CAFE SLIDERS ==============

const cafeRows = document.querySelectorAll(".cafe-row");

cafeRows.forEach(function(row) {

    const viewport = row.querySelector(".cafes-viewport");
    const container = row.querySelector(".cafes-container");
    const leftButton = row.querySelector(".left-btn");
    const rightButton = row.querySelector(".right-btn");

    if (!viewport || !container || !leftButton || !rightButton) return;

    const cafes = Array.from(container.querySelectorAll(".cafe-item"));

    function getSnapPosition() {
        const styles = getComputedStyle(viewport);
        const padding = parseFloat(styles.scrollPaddingLeft) || 0;

        return viewport.getBoundingClientRect().left
            + viewport.clientLeft
            + padding;
    }

    function getCurrentCafeIndex() {
        const snapPosition = getSnapPosition();

        let closestIndex = 0;
        let closestDistance = Infinity;

        cafes.forEach(function(cafe, index) {
            const distance = Math.abs(
                cafe.getBoundingClientRect().left - snapPosition
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    }

    function scrollToCafe(index) {
        const cafe = cafes[index];

        if (!cafe) return;

        const targetPosition =
            viewport.scrollLeft +
            cafe.getBoundingClientRect().left -
            getSnapPosition();

        const maxScroll = viewport.scrollWidth - viewport.clientWidth;

        viewport.scrollTo({
            left: Math.max(0, Math.min(targetPosition, maxScroll)),
            behavior: "smooth"
        });
    }

    function updateButtons() {
        const atStart = viewport.scrollLeft <= 1;

        const atEnd =
            viewport.scrollLeft + viewport.clientWidth >=
            viewport.scrollWidth - 1;

        leftButton.style.display = atStart ? "none" : "";
        rightButton.style.display = atEnd ? "none" : "";
    }

    rightButton.addEventListener("click", function() {
        const currentIndex = getCurrentCafeIndex();

        if (currentIndex < cafes.length - 1) {
            scrollToCafe(currentIndex + 1);
        }
    });

    leftButton.addEventListener("click", function() {
        const currentIndex = getCurrentCafeIndex();

        if (currentIndex > 0) {
            scrollToCafe(currentIndex - 1);
        }
    });

    viewport.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();

});
