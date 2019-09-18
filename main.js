// response to button click
document.getElementById("myBtn").addEventListener("click", function() {
    const val1 = document.getElementById('val1').value;
    const val2 = document.getElementById('val2').value;
    const result = calc.sum(val1, val2);
    console.log(result);
});
