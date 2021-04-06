// fetch("./grid.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));

const app = document.getElementById("app");
const row = document.createElement("div");
row.className = "row";

getGrid().then(response => {
    const gridAdd = response.forEach(grid => {
        const div = document.createElement("div");
        grid.width >= 100 ? grid.width = 100: grid.width;
        div.className = `${grid.element}`;
        div.id = `${grid.id}`;
        div.style.cssText = widthCol(grid.width, grid.style)
        div.innerHTML = `
                            id ${grid.id}<br>
                            ${grid.width == undefined ? '': grid.width+'%' }<br>
                            ${grid.style == undefined ? '':grid.style}
                        `;
        row.appendChild(div);
    });
    // console.log(response)
    app.appendChild(row);
})

function getGrid () {
    return fetch("./grid.json")
    .then(response => {
        return response.json();
    })
}

function widthCol(value, additionalStyle) {    
    return `max-width: calc( ${value}%); flex-basis: calc( ${value}%); ${additionalStyle}`;
}
