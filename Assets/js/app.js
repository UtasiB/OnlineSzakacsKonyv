async function render(view){
    let main = document.querySelector('main');
    main.innerHTML = await (await fetch(`Views/${view}.html`)).text();
}

function logOut()
{
    
};

function register() {
    
};

function login() {
    
};