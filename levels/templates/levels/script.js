let cellColor = "#FFA500",
    curentItem,
    itemIndex,    
    tHeadCells = [],
    tableRowsCount = document.getElementsByTagName('table')[1].tBodies[0].children.length - 2,
    cells = [],
    lastDateCells = []

    for(let i=0; i < tableRowsCount; i++) {
    	let curentCellsCout = document.getElementsByTagName('table')[1].tBodies[0].children[i].cells.length,
        currentRow = []
    	for (let j = 0; j < curentCellsCout; j++) {
            let cellItem = document.getElementsByTagName('table')[1].tBodies[0].children[i].cells[j] 		
            currentRow.push(cellItem)
            if(j == 4) lastDateCells.push(cellItem)
    	}        
        cells.push(currentRow)     		
    }

Array.from(document.getElementsByTagName('table')[1].tHead.rows[0].cells).forEach(e => tHeadCells.push(e.innerHTML))
document.addEventListener('click', e => {    
    curentItem = e.target.innerHTML
    if(e.ctrlKey == true) {
        for(let i = 0; i < cells.length; i++){
            for(let j = 5; j < cells[i].length; j++) cells[i][j].style.backgroundColor = 'white'
        }
        itemIndex = tHeadCells.findIndex(e =>  e == curentItem)
        if(itemIndex > 4) {
            for(let i = 0; i < tableRowsCount; i++) {
                cells[i][3].innerHTML = ((Number(lastDateCells[i].innerHTML) - Number(cells[i][itemIndex].innerHTML)).toFixed(1))
                if(cells[i][3].innerText == '0.0') cells[i][3].innerText = '-'
                cells[i][itemIndex].style.backgroundColor = cellColor
            }  
        }                 
    }
})