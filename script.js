console.log("Hello World!")

let songIndex = 0;
let audioElement = new Audio("song.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Believer", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Without you", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Mana meri jaan", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Doobe Doobe", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Bijli", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Pasoori do", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Magic In My Bones", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "I'm Albatroz", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Payback", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"}   
]

songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// handle play/pause click
masterPlay.addEventListener('click', () =>{

    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () =>{

    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

});


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add("fa-play-circle");

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        console.log(e)
        songIndex = (e.target.id);
        masterSongName.innerText = songs[songIndex - 1].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex > 9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }

    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex < 0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }

    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})