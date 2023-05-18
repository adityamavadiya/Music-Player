console.log("Hello World!")

let songIndex = 0;
let audioElement = new Audio("song.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Believer", filePath: "songs/song.mp3", coverPath: "covers/cover.jpg"}   
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
    Array.from(document.getElementsByClassName("song"))
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        console.log(e)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})