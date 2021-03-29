// Funcion al clicar sobre el boton


// Método .then
// function showJoke(){

// fetch('https://icanhazdadjoke.com/slack')
//   .then(res => res.json())
//   .then(res => console.log(res.attachments[0].text));

// }

  
// Método async/await
async function showJoke() {
    const result = await fetch('https://icanhazdadjoke.com/slack');
    const res = await result.json();
    // console.log(res.attachments[0].text);
    document.getElementById('broma').innerHTML = res.attachments[0].text;
};



