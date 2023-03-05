let songIndex=0;
let audioElement=new Audio("songs/music-1.mp3");
let playBtn = document.getElementById("play-btn");
let progressBar=document.querySelector(".progressBar");
let prevBtn=document.getElementById("prev-btn");
let nextBtn=document.getElementById("next-btn");
let img=document.getElementById("img");
let songsName=document.querySelector(".song-name");
let artistsName=document.querySelector(".artist-name");
let musicListBtn=document.getElementById("music-list-btn");
let musicList=document.querySelector(".music-list");
let close=document.querySelector(".close");
let currentTimes=document.querySelector(".current-time");
let maxDuration=document.querySelector(".max-duration");
let songItem=document.getElementsByClassName("main");
let songName2=document.getElementsByClassName("songName");
let shuffleBtn=document.getElementById("shuffle-btn");




// Play-Pause
playBtn.addEventListener("click", ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playBtn.classList.remove("fa-solid","fa-play");
        playBtn.classList.add("fa-solid","fa-pause");
    }
    else{
        audioElement.pause();
        playBtn.classList.remove("fa-solid","fa-pause");
        playBtn.classList.add("fa-solid","fa-play");
    }
});

// progress bar
let minute=0;
audioElement.addEventListener("timeupdate", ()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;

    // time-updation
    let music=audioElement.currentTime;
    let sec=(parseInt(music)%60);

    minute=parseInt(music/60);
    if(sec<10){
        currentTimes.textContent=`${minute}:0${sec}`
    }
    else{
        currentTimes.textContent=`${minute}:${sec}`
    }

    // changing next song after completing prev song
    if(songIndex>=5){
        songIndex=-1;
    }
    else if(audioElement.currentTime==audioElement.duration){
        songIndex+=1;
        audioElement.src=`songs/music-${songIndex+1}.mp3`
        img.src=`images/music-${songIndex+1}.jpg`
        songsName.textContent=allMusics[songIndex].songName;
        artistsName.textContent=allMusics[songIndex].artistName;
        maxDuration.textContent=allMusics[songIndex].songDuration;
        audioElement.currentTime=0;
        audioElement.play();
        playBtn.classList.remove("fa-solid","fa-play");
        playBtn.classList.add("fa-solid","fa-pause");

    }
});

// change progress bar
progressBar.addEventListener("change", ()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
});

// Previous button
prevBtn.addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/music-${songIndex+1}.mp3`
    img.src=`images/music-${songIndex+1}.jpg`
    songsName.textContent=allMusics[songIndex].songName;
    artistsName.textContent=allMusics[songIndex].artistName;
    maxDuration.textContent=allMusics[songIndex].songDuration;
    audioElement.currentTime=0;
    audioElement.play();
    playBtn.classList.remove("fa-solid","fa-play");
    playBtn.classList.add("fa-solid","fa-pause");
});

// Next button
nextBtn.addEventListener("click", ()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/music-${songIndex+1}.mp3`
    img.src=`images/music-${songIndex+1}.jpg`
    songsName.textContent=allMusics[songIndex].songName;
    artistsName.textContent=allMusics[songIndex].artistName;
    maxDuration.textContent=allMusics[songIndex].songDuration;
    audioElement.currentTime=0;
    audioElement.play();
    playBtn.classList.remove("fa-solid","fa-play");
    playBtn.classList.add("fa-solid","fa-pause");
});


// adding listener on music-list button
musicListBtn.addEventListener("click", ()=>{
    musicList.style.visibility="visible";
});


// adding listener on close button
close.addEventListener("click", ()=>{
    musicList.style.visibility="hidden";
});


// adding listener on songitem to play the clicked song
for(let i=0; i<songItem.length; i++){

    songItem[i].addEventListener("click", ()=>{
        audioElement.src=`songs/music-${i+1}.mp3`
        img.src=`images/music-${i+1}.jpg`
        songsName.textContent=allMusics[i].songName;
        artistsName.textContent=allMusics[i].artistName;
        maxDuration.textContent=allMusics[i].songDuration;
        audioElement.currentTime=0;
        audioElement.play();
        playBtn.classList.remove("fa-solid","fa-play");
        playBtn.classList.add("fa-solid","fa-pause");
        songIndex=i;
    });
}


// changing shuffle to repeat and vice-versa
shuffleBtn.addEventListener("click", ()=>{
    if(shuffleBtn.classList.value=="btn fa-solid fa-shuffle"){
        shuffleBtn.classList.remove("btn","fa-solid","fa-shuffle");
        shuffleBtn.classList.add("btn","fa-solid","fa-repeat");
    }
    else{
        shuffleBtn.classList.remove("btn","fa-solid","fa-repeat");
        shuffleBtn.classList.add("btn","fa-solid","fa-shuffle");
    }
})
