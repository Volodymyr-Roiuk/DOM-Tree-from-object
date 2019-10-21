const data = {
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



function TreeFromObject(obj) {
  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');
    li.textContent = key;

    if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
      li.appendChild(TreeFromObject(obj[key]));
    }

    ul.appendChild(li);
  }

  return ul;  
}

document.querySelector('#treeFromObj').appendChild(TreeFromObject(data));


