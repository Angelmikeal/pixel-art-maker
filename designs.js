$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid();
    colorChange();
    colorReset();
    clearGrid();

}
);


function makeGrid() {
    let gridHeight = $('#inputHeight').val();
    let gridWidth = $('#inputWidth').val();
    let table = $('#pixelCanvas');
    // remove existing table
    table.children().remove();
    //make new table row
    for (let i = 0; i < gridHeight; i++) {
        table.append('<tr></tr>')
    }
    // add cells to rows
    for (let t = 0; t < gridWidth; t++) {
        $('tr').append('<td></td>')
    }

}


// fuction to change color 
function colorChange() {
    // this acceses the cells in the table 
    let pixel = $('tr td');

    pixel.click(function (event) {
        var pixelColor;
        // this declares the color
        pixelColor = $('#colorPicker').val();
        // this assigns the color.
        $(this).css('background-color', pixelColor);
    });

}

function colorReset() {
    $('tr td').dblclick(function () {
        $(this).css('background-color', '#fff');
    })
}


//grid removal system 

$('.clearGrid').click(function(event){
    //access grid
        let table = $('#pixelCanvas');
        event.preventDefault();
    //remove grid
        table.children().remove();
   })