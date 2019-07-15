const form = document.querySelector('form');
let array = [];

form.addEventListener('change', (event) => {
  /* 'change' event - when value is changed */
  const targetChecked = event.target.checked;

  if (targetChecked) {
    /* if checkbox changes to true, push target into array */
    array.push(event.target);
  } else {
    /* if checkbox changes to false, filter not-the-target-element and return in the array */
    array = array.filter(item => item !== event.target);
  }
  if (array.length > 2) {
    /* if there are more than 2 elements in the array, remove the first at index 0 with shift() */
    let removed = array.shift();
    removed.checked = false;
  }
  console.log(array);
});