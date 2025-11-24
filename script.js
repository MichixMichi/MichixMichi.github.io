let ourPlaylist = [];

if (localStorage.getItem("ourPlaylist")) {
  ourPlaylist = JSON.parse(localStorage.getItem("ourPlaylist"));
}

const songName = document.getElementById("songName");
const artist = document.getElementById("artist");
const listaCanciones = document.getElementById("ourPlaylist");

function guardarCancion() {
    let txtSongName = songName.value;
    let txtArtist = artist.value;

    if (txtArtist === "" || txtSongName === "") {
        alert("Este campo no puede estar vacío");
        return;
    }

    let songObject = { "cancion": txtSongName, "artista": txtArtist };
    ourPlaylist.push(songObject);

    localStorage.setItem("ourPlaylist", JSON.stringify(ourPlaylist));

    const li = document.createElement("li");
    li.textContent = txtSongName + " - " + txtArtist;
    listaCanciones.appendChild(li);

    songName.value = "";
    artist.value = "";
}

function cargarPlaylist() {
    for (let song of ourPlaylist) {
        const li = document.createElement("li");
        li.textContent = song.cancion + " - " + song.artista;
        listaCanciones.appendChild(li);
    }
    
}

cargarPlaylist();

// Function to clear all songs
function clearAll() {
    if(confirm("Are you sure you want to clear the entire playlist?")) {
        ourPlaylist = [];  // empty the array
        localStorage.removeItem("ourPlaylist"); // remove from localStorage
        listaCanciones.innerHTML = ""; // clear the list in DOM
    }
}

