var button = document.querySelector('button');
var input1 = document.getElementById('first');
var input2 = document.getElementById('second');
function add(addendum1, addendum2) {
    return addendum1 + addendum2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
