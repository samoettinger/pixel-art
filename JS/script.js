// i. Criando variáveis
let currentColor = '#000000';

const input =       document.getElementById('colorPicker');
const container =   document.getElementsByClassName('container')[0];

// ii. Função para criar Tabela
const createTable = () => {
     for (let i = 0; i < 20; i++) {
         const line = document.createElement('div');
         line.classList.add('line');
         for (let j = 0; j < 20; j++) {
             const pixel = document.createElement('span');
             // insira um codigo que adicione uma classe com os estilos padrões
             pixel.classList.add('pixel');
             pixel.addEventListener('click', () => updateColor(currentColor, pixel));
             line.appendChild(pixel);
         }
         container.appendChild(line);
     }
}

createTable();

// iii. Função para alterar a cor atual
const changeCurrentColor = (e) => {
     currentColor = e.target.value;
}

// iv. Função para alterar a cor atual do pixel
const updateColor = (currentColor, element) => {
     element.style.backgroundColor = currentColor;
}

// v. Criar o evento da mudança para alterar a cor da palheta
input.addEventListener('change', (e) => changeCurrentColor(e))