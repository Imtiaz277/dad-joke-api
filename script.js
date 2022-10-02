// Lottie animation
let animation = bodymovin.loadAnimation({
    container: document.getElementById("animContainer"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://assets4.lottiefiles.com/packages/lf20_RfD6Lb.json"
});

const jokeTxt = document.querySelector("#jokeTxt");
const jokeBtn = document.querySelector("#jokeBtn");
let joke = "";

async function getJoke(){
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    let res = await fetch(`https://icanhazdadjoke.com/`, config);
    res = await res.json();
    joke = res.joke;
    jokeTxt.textContent = joke;
}

jokeBtn.addEventListener("click", function(){
    getJoke();
});