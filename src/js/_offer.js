/* offer - video */
const offerVideoButton = document.querySelector(".offer__video-button");
const offerVideoPoster = document.querySelector(".offer__video-poster");
const offerVideo = document.querySelector(".offer__video");

offerVideoButton.addEventListener("click", () => {
  offerVideoPoster.style.display = "none";
  offerVideo.play();
});
