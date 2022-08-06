const btnGenerate = document.querySelector('#criar-carta');
btnGenerate.addEventListener('click', () => {
  const input = document.querySelector('#carta-texto').value;
  const array = input.split(' ');
  const paragraph = document.querySelector('#carta-gerada');
  console.log(array);
  clearSpan();
  for (let index = 0; index < array.length; index += 1) {
    const word = document.createElement('span');
    word.innerHTML = array[index];
    paragraph.appendChild(word)   
  }
})

function clearSpan() {
  let span = document.querySelectorAll('span');
  if (span.length > 0) {
    for (let index = 0; index < span.length; index += 1) {
      span[index].remove();      
    }
  }
}