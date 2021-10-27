const button = document.querySelector('button');
const input1 = document.getElementById('first')! as HTMLInputElement;
const input2 = document.getElementById('second')! as HTMLInputElement;

function add(addendum1: number, addendum2: number): number {
  return addendum1 + addendum2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
