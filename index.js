function createGrid(row,column){
    const container = document.querySelector(".container")
    for(let i = 0; i < row; i++){
        const rowDiv = document.createElement("div"); 
        for(let j = 0; j < column; j++){
            const columnDiv = document.createElement("div");
            //columnDiv.textContent = "test" ;   
            rowDiv.appendChild(columnDiv);
        }
    container.appendChild(rowDiv);
    }
}

createGrid(32,32)