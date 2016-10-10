
(function() {

    //var numberOfRows = 15; //number of rows in the grid
    //var numberOfCols = 15;//number of columns in the grid
    var canvas = $('#canvas'); //my placement area - think of paper in drawing

    makeGrid(15, 15);
    clearGrid();
    makeGrid(30, 30);
    var cells = $('.cell');
    $('.cell').on('click', changeColor);

    function clearGrid(){
      canvas.empty();
    }
    function changeColor(event){
      //just 'this' cells backgriybd
      $(this).toggleClass('red');
    }
    function makeGrid(numberOfRows, numberOfCols){
      //let's make some rows and put them in the body
      for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1){
        var row = $('<tr></tr>');
        for(var colCount = 0; colCount < numberOfCols; colCount += 1){
          console.log(colCount);
          var column = $('<td><td>');
          column.addClass('cell');
          row.append(column);
        }
        canvas.append(row);
      }

  }


}());
