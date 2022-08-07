function clearSpan() {
  const span = document.querySelectorAll('span');
  if (span.length > 0) {
    for (let index = 0; index < span.length; index += 1) {
      span[index].remove();
    }
  }
}

const paragraphCount = document.createElement('p');
paragraphCount.id = 'carta-contador';
document.body.appendChild(paragraphCount);
function count(array) {
  if (array.length === 1) {
    paragraphCount.innerHTML = array.length;
  } else {
    paragraphCount.innerHTML = array.length;
  }
}

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

// Expressão regular foi vista na página: https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
const paragraph = document.querySelector('#carta-gerada');
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
    count(array);
  }
  const spans = document.querySelectorAll('span');
  randomClass(spans);
}

const btnGenerate = document.querySelector('#criar-carta');
btnGenerate.addEventListener('click', () => {
  const input = document.querySelector('#carta-texto').value;
  clearSpan();
  emptyInput(input);
  // console.log(paragraph);
});

const entries = document.querySelector('#carta-texto');
entries.addEventListener('click', () => {
  entries.value = '';
});

paragraph.addEventListener('click', (event) => {
  const evt = event;
  if (!evt.target.className.includes('text-container')) {
    evt.target.className = '';
    const numberStyle = parseInt(Math.random() * 3, 10);
    const numberSize = parseInt(Math.random() * 3, 10);
    const numberRotation = parseInt(Math.random() * 2, 10);
    const numberInclination = parseInt(Math.random() * 2, 10);
    evt.target.classList.add(styles[numberStyle]);
    evt.target.classList.add(size[numberSize]);
    evt.target.classList.add(rotation[numberRotation]);
    evt.target.classList.add(inclination[numberInclination]);
  }
});
