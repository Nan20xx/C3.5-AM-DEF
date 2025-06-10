var enlistado= [

{
"nombre":"Brooklin",
"autor":"mrsoshadow",
"path":"http://127.0.0.1:5500/Cubeta/bruqulin.mp4"
},
{
"nombre":"Amenaza",
"autor":"jordiWild",
"path":"http://127.0.0.1:5500/Cubeta/Amenaza.mp4"
},
{
"nombre":"The Ballad of Mona Lisa",
"autor":"Panic! At The Disco",
"path":"http://127.0.0.1:5500/Cubeta/Mona_Lisa.mp3"
},
{
"nombre":"ERIKA",
"autor":"XD",
"path":"http://127.0.0.1:5500/Cubeta/ERIKA.mp3"



}


]


function getList() {
    var output = "";
    var cont = 1;
    var data = enlistado;

    for (var i = 0; i < 3; i++) {
        console.log(data[i])

        output += "<tr>"+
                "<td>"+ cont++  +"</td>"+
                "<td>"+ data[i].nombre +"</td>"+
                "<td>"+
                    "<button class='btnMusic' onclick='playMusic("+ JSON.stringify(data[i]) +")'> Tocar </button>"+
                "</td>"+
            "</tr>";
    }

    document.getElementById("tbody").innerHTML = output;

}

function playMusic(video) {
    var player = document.getElementById("player");

    document.querySelector("#ti").innerHTML = video.nombre;
    document.querySelector("#ar").innerHTML = video.autor;

    player.src = video.path;
    player.play();
}


















