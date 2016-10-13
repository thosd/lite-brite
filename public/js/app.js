
(function() {

    var canvas = $('#canvas'); //my placement area - think of paper in drawing
    var updateGridButton = $('#update-grid-button');
    var numberOfColsInput = $('#number-of-cols');
    var numberOfRowsInput = $('#number-of-rows');
    var colorPalette = $('#color-palette');

    makeGrid(15, 15);
    $('.cell').on('click', changeColor);
    updateGridButton.on('click', updateGridSize);
    //clearGrid();
    //makeGrid(15, 15);

    makePalette(6);


    function valBetween(v, min, max) {
        return (Math.min(max, Math.max(min, v)));
    }

    function updateGridSize(){
      clearGrid();//remove the current grid
      //grab the number of columns from the input for the new grid
      var newColNumber = parseInt(numberOfColsInput.val());
      if (!numberOfColsInput.val()) {
        alert("Please enter values!");
        return;
      }
      if (newColNumber > 100) {
        alert("Max grid size exceeded.  Please choose a value between 1 & 100");
        clearGrid();
        return;
      }
      newColNumber = valBetween(newColNumber, 1, 100);
      //grab the number of rows from the input for the new grid
      var newRowNumber = parseInt(numberOfRowsInput.val());
      if (!numberOfRowsInput.val()) {
        alert("Please enter values!");
        return;
      }
      if (newRowNumber > 100) {
        alert("Max grid size exceeded.  Please choose a value between 1 & 100");
        clearGrid();
        return;
      }
      newRowNumber = valBetween(newRowNumber, 1, 100);
      //make the new grid based on the new rows and columns

      makeGrid(newRowNumber, newColNumber);
      $('.cell').on('click', changeColor);
    }

    function clearGrid(){
      canvas.empty();
    }

    function changeColor(event){
      //just 'this' cells background
      $(this).toggleClass('red');
    }

    function makeGrid(numberOfRows, numberOfCols){
      //let's make some rows and put them in the body
      for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1) {
        var row = $('<tr></tr>');
        for(var colCount = 0; colCount < numberOfCols; colCount += 1) {
          var column = $('<td></td>');
          column.addClass('cell');
          row.append(column);
        }
        canvas.append(row);
      }
    }

    function makePalette(numberOfCols) {
      var row = $('<tr></tr>');
      for(var colCount  = 0; colCount < numberOfCols; colCount +=1) {
        var column = $('<td></td>');
        column.addClass('cell');
        row.append(column);
      }
      colorPalette.append(row);
    }




}());
