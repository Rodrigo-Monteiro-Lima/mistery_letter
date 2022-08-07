function clearSpan() {
  const span = document.querySelectorAll('span');
  if (span.length > 0) {
    for (let index = 0; index < span.length; index += 1) {
      span[index].remove();
    }
  }
}

// Expressão regular foi vista na página: https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
function emptyInput(input) {
  if (input === '' || input.match(/^(\s)+$/)) {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const array = input.split(' ');
    paragraph.innerHTML = '';
    for (let index = 0; index < array.length; index += 1) {
      const word = document.createElement('span');
      word.innerHTML = array[index];
      word.className = 'spans';
      paragraph.appendChild(word);
    }
  }
  const spans = document.querySelectorAll('span');
  randomClass(spans);
}

const btnGenerate = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
btnGenerate.addEventListener('click', () => {
  const input = document.querySelector('#carta-texto').value;
  clearSpan();
  emptyInput(input);
});

const entries = document.querySelector('#carta-texto');
entries.addEventListener('click', () => {
  entries.value = '';
});

const styles = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];
function randomClass(spans) {
  for (let index = 0; index < spans.length; index += 1) {
    const numberStyle = parseInt(Math.random() * 3, 10);
    const numberSize = parseInt(Math.random() * 3, 10);
    const numberRotation = parseInt(Math.random() * 2, 10);
    const numberInclination = parseInt(Math.random() * 2, 10);
    spans[index].classList.add(styles[numberStyle]);
    spans[index].classList.add(size[numberSize]);
    spans[index].classList.add(rotation[numberRotation]);
    spans[index].classList.add(inclination[numberInclination]);
  }
}
