let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const fishs = Object.keys(data['Рыбы']);
const objTrees = data['Деревья'];


let body = document.body;

body.innerHTML = `
  <ul>
    <li>Рыбы
      <ul>
        ${fishs.map(fish => `<li>${fish}</li>`).join('')}
      </ul>
    </li>Деревья
      <ul>
        <li>Огромные
          <ul>
          ${Object.keys(objTrees['Огромные']).map(tree => `<li>${tree}</li>`).join('')}
          </ul>
        </li>
        <li>Цветковые
          <ul>
            ${Object.keys(objTrees['Цветковые']).map(tree => `<li>${tree}</li>`).join('')}
          </ul>
        </li>
      </ul>
    </li>
  </ul>
`;


