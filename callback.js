function register(cb){
    setTimeout(() => {
        console.log("Register here");
        cb();
    },6000);
    
}

function login(cb){
    setTimeout(() => {
        console.log("Login here");
        cb();
    },8000);
}

function get_data(cb){
    setTimeout(() => {
        console.log("Fetch data");
        cb();
    },10000);
}

function display_data(cb){
    setTimeout(() => {
        console.log("Display data");
        cb();
    },12000);
}
//calback hell
register(() => {
    login(()=>{
        get_data(()=>{
            display_data()
        })
    })
});
