async function getWord(){
  let url = 'https://random-word-api.herokuapp.com/word'
  try{
    let res = await fetch(url);
    return await res.json();
  }
  catch(error){
    console.log(error);
  }
}

async function renderWord(){
  let word = await getWord();
  let html = '';
  html = `<div class="user">
          <h2>${word}
  `;
  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderWord();