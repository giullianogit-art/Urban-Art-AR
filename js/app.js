const marker = document.querySelector("#marker");
const uiPanel = document.querySelector("#uiPanel");

marker.addEventListener("markerFound", () => {
  uiPanel.classList.remove("hidden");
});

marker.addEventListener("markerLost", () => {
  uiPanel.classList.add("hidden");
});

function openVideo() {
  alert("Abrir vídeo da obra.");
}

function openInfo() {
  alert("Informações detalhadas da obra.");
}

function enterGallery() {
  alert("Modo galeria em desenvolvimento.");
}
