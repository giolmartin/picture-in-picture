"use strict";

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to video element, then play

async function selectMediaStrea() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Select Media Stream Error: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  //Start Picture in picture
  await videoElement.requestPictureInPicture();
  //Reset the Button
  button.disable = false;
});

//On Load
selectMediaStrea();
