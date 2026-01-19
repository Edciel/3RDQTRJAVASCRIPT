const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');
const clearBtn = document.getElementById('clearcount');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1) {
        console.error('Please enter a valid positive number.');
         resultDiv.textContent = 'Please enter a valid number for number.';
         resultDiv.style.color = 'crimson';
        return;
    }


    if (n > 10000) {
        resultDiv.textContent = 'please enter similar number less than 10000.';
        resultDiv.style.color = 'crimson';
        return;
    }


// build the output string with newline characters - CSS white-space pre-line
   let output = '';
    for (let i = 1; i <= n; i++) {
        output += `Counting: ${i}\n`;
        console.log(i);
    }
    resultDiv.style.color = 'green';
    resultDiv.textContent = output;
});

// Clear button to removwe output and reset input
clearBtn.addEventListener('click', () => {
    resultDiv.textContent = '';
    num.value = '';
    resultDiv.style.color = '';
});