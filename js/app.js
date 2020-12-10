let video;
let durationControl; 
let soundControl;
let intervalId;


$().ready(function(){
  video = document.getElementById("player"); 

  video.addEventListener('click', playStop);

  let playButtons = document.querySelectorAll(".play");
  for (let i = 0; i < playButtons.length;i++){
    playButtons[i].addEventListener('click',playStop);
  }

  let micControl = document.getElementById("mic");
  micControl.addEventListener('click',soundOf)
    
  durationControl = document.getElementById("durationLevel");    
  durationControl.addEventListener('click',setVideoDuration);
  durationControl.addEventListener('onmousemove',setVideoDuration);
  durationControl.addEventListener('mousedown', stopInterval); 
  durationControl.min = 0;
  durationControl.value = 0;    

  soundControl = document.getElementById("micLevel");    
  soundControl.addEventListener('click', changeSoundVolume);
  soundControl.addEventListener('onmousemove', changeSoundVolume);

  soundControl.min = 0;
  soundControl.max = 10;
  soundControl.value = soundControl.max;
    
});

function playStop(){
  $(".player-pic").toggleClass("player-pic_active");
    
  durationControl.max = video.duration;

  if (video.paused){
    video.play();
    intervalId = setInterval(updateDuration,1)
  }else{
    video.pause();  
    clearInterval(intervalId);
  }
}

function soundOf(){    

  if (video.volume ===0){
    video.volume = soundLevel;
    soundControl.value = soundLevel*10;
  }else{
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }    
}

function stopInterval(){
  clearInterval(intervalId);
}

function setVideoDuration(){
  video.currentTime = durationControl.value;   
  intervalId = setInterval(updateDuration,1000/66);    
}

function changeSoundVolume(){

  video.volume = soundControl.value/10;  
}

function updateDuration(){    
  durationControl.value = video.currentTime;
}