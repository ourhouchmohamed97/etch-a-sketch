const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

createGrid(16);

resizeBtn.addEventListener("click", () => {

    let size = prompt("Enter the number of squares per side (max 100):");

    if (size === null) return;

    size = Number(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createGrid(size);

});

function createGrid(size) {
    container.innerHTML = "";

    const containerWidth = container.clientWidth;
    const gapSize = 1;
    const totalGaps = (size - 1) * gapSize;
    const squareSize = (containerWidth - totalGaps) / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

