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



function TreeFromObject(obj) {
  const ul = document.createElement('ul');
  for (const key in obj) {
    let li = document.createElement('li');
    li.textContent = key;
    if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
      li.appendChild(TreeFromObject(obj[key]));
      console.log(li);
    }
    ul.appendChild(li);
  }
  return ul;  
}

document.body.appendChild(TreeFromObject(data));


