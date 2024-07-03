function love(){
    let name1 = document.getElementById("NameOne").value;
    let name2 = document.getElementById("NameTwo").value;
    if(name1.length<=2){
        alert("Masukan nama minimal 2 huruf !");
    }
    if(name2.length<=2){
        alert("Masukan nama minimal 2 huruf !");
    }
    else{
        let random = Math.floor(Math.random()*100);
        document.getElementById("print").innerHTML = " Cinta " + " " + name1 + " dan " + name2 + "" + " sebesar " + random + " % ";
        move(random); // Move the call to move here
        if (random >= 1 && random <= 30) {
            document.getElementById("statement").innerHTML = "Hubungan kalian jelekkk bangett, mending jauh jauh deh";
          } else if (random > 30 && random <= 50) {
            document.getElementById("statement").innerHTML = "Hubungan kalian suram, gaada masa depan nya. Kamu jangan banyak berharap ya";
          } else if (random > 50 && random <= 85) {
            document.getElementById("statement").innerHTML = "Hubungan kalian bagus, tapi cuma cocok jadi temen deket aja";
          } else if (random > 85 && random <= 100) {
            document.getElementById("statement").innerHTML = "Hubungan kalian sangatt baguss, fiks jodoh !";
          }
    }
   
}
if (random) {
    move(random);
}


function move(random) {
  
    const elem = document.querySelector(".progress-done");
    let width = 0;
    const main = setInterval(frame, 50);

   
    function frame() {
        if (width >= random) {
            clearInterval(main);
        } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
        }
    }
}