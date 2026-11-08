
// ============== CAFE SLIDERS ==============

let cafeSliderResizeHandlers = [];

function initializeCafeSliders() {

    // Remove old resize listeners
    cafeSliderResizeHandlers.forEach(function(handler) {
        window.removeEventListener("resize", handler);
    });

    cafeSliderResizeHandlers = [];

    const cafeRows = document.querySelectorAll(".cafe-row");

    cafeRows.forEach(function(row) {

        const viewport = row.querySelector(".cafes-viewport");
        const container = row.querySelector(".cafes-container");
        const leftButton = row.querySelector(".left-btn");
        const rightButton = row.querySelector(".right-btn");

        if (!viewport || !container || !leftButton || !rightButton) return;

        const cafeCards = Array.from(
            container.querySelectorAll(".cafe-item")
        );

        // Get the exact left edge where cards should align
        function getAlignmentPosition() {
            const styles = getComputedStyle(viewport);

            return viewport.getBoundingClientRect().left
                + viewport.clientLeft
                + parseFloat(styles.paddingLeft);
        }

        // Find the card currently aligned with the viewport
        function getCurrentCafeIndex() {

            const alignmentPosition = getAlignmentPosition();

            let closestIndex = 0;
            let closestDistance = Infinity;

            cafeCards.forEach(function(cafe, index) {

                const distance = Math.abs(
                    cafe.getBoundingClientRect().left - alignmentPosition
                );

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            return closestIndex;
        }

        // Align the selected card exactly with the viewport
        function scrollToCafe(index) {

            const cafe = cafeCards[index];

            if (!cafe) return;

            const alignmentPosition = getAlignmentPosition();

            const difference =
                cafe.getBoundingClientRect().left - alignmentPosition;

            viewport.scrollTo({
                left: viewport.scrollLeft + difference,
                behavior: "smooth"
            });
        }

        // Show or hide arrows depending on scroll position
        function updateButtons() {

            const maxScroll =
                viewport.scrollWidth - viewport.clientWidth;

            const atStart = viewport.scrollLeft <= 1;
            const atEnd = viewport.scrollLeft >= maxScroll - 2;

            leftButton.style.display = atStart ? "none" : "";
            rightButton.style.display = atEnd ? "none" : "";
        }

        rightButton.addEventListener("click", function() {

            const currentIndex = getCurrentCafeIndex();

            if (currentIndex < cafeCards.length - 1) {
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

        cafeSliderResizeHandlers.push(updateButtons);

        updateButtons();
    });

    cafeSliderResizeHandlers.forEach(function(handler) {
        window.addEventListener("resize", handler);
    });
}
