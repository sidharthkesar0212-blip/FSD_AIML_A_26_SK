function register(){
    setTimeout(() => {
        console.log("Register here");
    },6000);
    
}

function login(){
    setTimeout(() => {
        console.log("Login here");
    },8000);
}

function get_data(){
    setTimeout(() => {
        console.log("Fetch data");
    },10000);
}

function display_data(){
    setTimeout(() => {
        console.log("Display data");
    },12000);
}

register();
login();
get_data();
display_data();
console.log("Call another app");