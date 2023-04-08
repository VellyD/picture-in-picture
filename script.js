const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMedia() {
  try {
    const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaSteam;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    alert("Error fount:", err);
  }
}

button.addEventListener("click", async () => {
  button.disable = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMedia();
