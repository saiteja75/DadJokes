let btn = document.querySelector('.btn');
let ques = document.querySelector('.joke');

btn.addEventListener('click', generateJoke);

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    ques.innerHTML = data.joke
}