console.log('Starter'); 

const jokeEl= document.getElementById('joke');
const jokeBtn= document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);


generateJoke();

async function generateJoke(){

    const config= {
        headers:{
            'Aceept': 'application/json'
        }
    };
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com',config);

    const resp= await res.json();

    jokeEl.innerHTML = resp.joke;

}

// function generateJoke(){

//     const config= {
//         headers:{
//             'Aceept': 'application/json'
//         }
//     };
//     fetch('https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com',config).then(res=>res.json()).then((resp)=>{
//         jokeEl.innerHTML = resp.joke;
//     });
// }