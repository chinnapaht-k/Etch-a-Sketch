function createGrid(row,column){
    const container = document.querySelector(".container")
    for(let i = 0; i < row; i++){
        const rowDiv = document.createElement("div"); 
        for(let j = 0; j < column; j++){
            const columnDiv = document.createElement("div");
            //columnDiv.textContent = "a" ;   
            rowDiv.appendChild(columnDiv);
        }
    container.appendChild(rowDiv);
    }
}

function addEventGrid(grids){
    grids.forEach((grid) => {
        grid.addEventListener("mouseover",()=>{
            const r = Math.floor(Math.random() * 257) 
            const g = Math.floor(Math.random() * 257) 
            const b = Math.floor(Math.random() * 257) 
            grid.style.cssText = `background-color: rgb(${r},${g},${b});`  
            console.log("hover");
        });
    });
    }
    
createGrid(10,10)
const containers = document.querySelector(".container")
const btn = document.querySelector("button")  
let grids = document.querySelectorAll(".container div div")
addEventGrid(grids)


btn.addEventListener("click", ()=>{
    let gridNumber;
    while (true) {
    gridNumber = parseInt(prompt("Enter your prefered grid number (Min:1, Max:100):"));
    if (gridNumber < 1 || gridNumber > 100) alert("You enter the nubmer that exceed minimum or maximum. Pls try again");
    else break;
    }
    containers.textContent = '';
    createGrid(gridNumber,gridNumber);
    grids = document.querySelectorAll(".container div div")
    addEventGrid(grids)
})


