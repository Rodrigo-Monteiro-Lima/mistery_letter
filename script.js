function clearSpan() {
  const span = document.querySelectorAll('span');
  if (span.length > 0) {
    for (let index = 0; index < span.length; index += 1) {
      span[index].remove();
    }
  }
}

// Expressão regular foi pega na página: https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
function emptyInput(input) {
  if (input === '' || input.match(/^(\s)+$/)) {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const array = input.split(' ');
    paragraph.innerHTML = '';
    for (let index = 0; index < array.length; index += 1) {
      const word = document.createElement('span');
      word.innerHTML = array[index];
      paragraph.appendChild(word);
    }
  }
}

const btnGenerate = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
btnGenerate.addEventListener('click', () => {
  const input = document.querySelector('#carta-texto').value;
  console.log(input);
  clearSpan();
  emptyInput(input);  
});

const entries = document.querySelector('#carta-texto');
entries.addEventListener('click', () => {
  entries.value = '';
})

