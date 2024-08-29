const createTombolaGrid = (cells) => {
    const tombolaGrid = document.getElementById("tombola-grid");
    for (let i = 0; i < cells; i++) {
        const cellDiv = document.createElement("div");
        cellDiv.className = "tombola-cell";
        const cellH3 = document.createElement("h3");
        cellH3.innerText = i + 1;



        cellDiv.appendChild(cellH3);
        tombolaGrid.appendChild(cellDiv);


    }
};


window.onload = () => {
    createTombolaGrid(76);
};

