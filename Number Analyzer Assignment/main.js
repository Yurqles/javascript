
// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    //document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    //document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}


// Analyze Functions

function getSign(num){
    if (num > 0 ) {
        document.getElementById('sign').innerHTML = 'Pos';
        return num;
    } else if (num < 0) {
        document.getElementById('sign').innerHTML = 'Neg';
        return num;
    } else if (num = 0) {
        document.getElementById('sign').innerHTML = 'Zero';
        return num;
    }
}

//function evenOrOdd(num) {
//    if (num = 0) {
//        document.getElementById('even-odd').innerHTML = 'even';
  //  } else if (num = 0) {
    //    document.getElementById('even-odd').innerHTML = 'odd';
  // }
//}