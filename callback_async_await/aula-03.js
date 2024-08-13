fetch('arquivo.txt')
  .then(response => response.text())
  .then(text => {
    const array = text.split("\n");
    console.log(array);
})