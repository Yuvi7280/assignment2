console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('https://open.spotify.com/track/0qQ4IdhjzNr0gJhdMTf2n3?si=ae65afef7f824e4b');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "https://open.spotify.com/track/0qQ4IdhjzNr0gJhdMTf2n3?si=ae65afef7f824e4b", coverPath: "AppData/Local/Temp/ee52d8ea-f84b-4b64-8a90-67bf17a7668b_Spotify Clone.zip.68b/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "https://open.spotify.com/track/26mWCq6g2c44Y8FYv5B6WJ?si=bbf2f7fd68564d69", coverPath: "AppData/Local/Temp/8828ade2-1219-4bd7-a368-ba8e3ed0b233_Spotify Clone.zip.233/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "https://open.spotify.com/track/2oSnGQbI4tZxImmCs2c4PP?si=3ba8678cbee14134", coverPath: "AppData/Local/Temp/5df07da6-8b03-4fc4-b5ac-7b4d472c9bfa_Spotify Clone.zip.bfa/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/eba1bba3-ec29-4394-a8e1-6f31f9a60b6d_Spotify Clone.zip.b6d/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/2022436e-d07d-4f6e-b255-1cb1202389ae_Spotify Clone.zip.9ae/covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/464ffb33-6daf-49df-aa5b-2df182a0bf48_Spotify Clone.zip.f48/covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/01774ff3-be01-405e-b99d-7f346d79a25d_Spotify Clone.zip.25d/covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/6d05ab98-130e-4649-98e8-8e6d11e63241_Spotify Clone.zip.241/covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/7bc6bbc1-d779-45a9-af35-86e2ef1701f3_Spotify Clone.zip.1f3/covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "https://open.spotify.com/track/5YyXq5rzZyyEbNptsLFz3W?si=34773a9217db4d3e", coverPath: "AppData/Local/Temp/0bf3155f-4f4e-433c-871b-c7cd0611fb85_Spotify Clone.zip.b85/covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})