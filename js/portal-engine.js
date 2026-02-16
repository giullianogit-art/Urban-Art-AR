function createPortal() {
  const container = document.getElementById("portal-container");

  // Moldura do portal
  const frame = document.createElement("a-torus");
  frame.setAttribute("radius", "1.2");
  frame.setAttribute("radius-tubular", "0.05");
  frame.setAttribute("color", "#00ffff");
  frame.setAttribute("position", "0 1 -3");
  frame.setAttribute("rotation", "90 0 0");
  container.appendChild(frame);

  // Piso da galeria
  const floor = document.createElement("a-plane");
  floor.setAttribute("width", "6");
  floor.setAttribute("height", "6");
  floor.setAttribute("rotation", "-90 0 0");
  floor.setAttribute("color", "#222");
  floor.setAttribute("position", "0 0 -3");
  container.appendChild(floor);

  // Escultura Placeholder
  const sculpture = document.createElement("a-box");
  sculpture.setAttribute("position", "0 1 -3");
  sculpture.setAttribute("depth", "0.5");
  sculpture.setAttribute("height", "1.5");
  sculpture.setAttribute("width", "0.5");
  sculpture.setAttribute("color", "#ff4444");
  container.appendChild(sculpture);

  // Vídeo
  const video = document.createElement("video");
  video.setAttribute("id", "art-video");
  video.setAttribute("src", "assets/videos/video.mp4");
  video.setAttribute("loop", "true");
  video.setAttribute("crossorigin", "anonymous");
  video.setAttribute("webkit-playsinline", "true");
  video.setAttribute("playsinline", "true");
  video.style.display = "none";
  document.body.appendChild(video);

  const videoPlane = document.createElement("a-plane");
  videoPlane.setAttribute("width", "2");
  videoPlane.setAttribute("height", "1.2");
  videoPlane.setAttribute("position", "0 2 -4");
  videoPlane.setAttribute("material", "shader: flat; src: #art-video");
  container.appendChild(videoPlane);

  // Iniciar vídeo ao clicar
  container.addEventListener("click", () => {
    video.play();
  });
}
