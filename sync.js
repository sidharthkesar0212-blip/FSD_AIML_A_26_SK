function register(){
    wait(5000);
    console.log("register here");
}

function login(){
    wait(5000);
    console.log("login here");
}

function get_data(){
    wait(5000);
    console.log("fetch data");
}

function display_data(){
    wait(5000);
    console.log("Display data");
}

function wait(delay){
    const ct = Date.now();
    const m = ct + delay;
    while (Date.now() < m) {
}
}

register();
login();
get_data();
display_data();
console.log("Call another app");