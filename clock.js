clock();
function clock(){
    let time = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = time.toUpperCase(); 
    setTimeout(clock,1000);
}
