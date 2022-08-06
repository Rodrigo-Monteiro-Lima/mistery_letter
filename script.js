function clearSpan() {
  const span = document.querySelectorAll('span');
  if (span.length > 0) {
    for (let index = 0; index < span.length; index += 1) {
      span[index].remove();
    }
  }
}

function emptyInput() {
  if (input === '' || input === ' ') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

const btnGenerate = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto').value;
const paragraph = document.querySelector('#carta-gerada');
btnGenerate.addEventListener('click', () => {
  const array = input.split(' ');
  console.log(array);
  clearSpan();
  emptyInput();
  for (let index = 0; index < array.length; index += 1) {
    const word = document.createElement('span');
    word.innerHTML = array[index];
    paragraph.appendChild(word);
  }
});

const entries = document.querySelector('#carta-texto');
entries.addEventListener('click', () => {
  entries.value = '';
})

