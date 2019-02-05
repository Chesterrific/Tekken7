function getFrameData(name){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var myData = JSON.parse(xhttp.responseText);
            
            //populateMoves(myData);
            //document.getElementById("test").innerHTML = myData.moves.basic[1].Command;
        }
    };
    xhttp.open("GET", "frames/" + name + ".json", true);
    xhttp.send();
}