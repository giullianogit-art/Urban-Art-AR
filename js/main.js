document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("enter-ar");
  const scene = document.getElementById("ar-scene");

  button.addEventListener("click", async () => {
    scene.style.display = "block";
    button.style.display = "none";

    if (scene.renderer.xr) {
      try {
        await scene.renderer.xr.setReferenceSpaceType("local-floor");
        await scene.renderer.xr.setSession(
          await navigator.xr.requestSession("immersive-ar", {
            requiredFeatures: ["hit-test"]
          })
        );
      } catch (e) {
        alert("AR não suportado neste dispositivo.");
        console.error(e);
      }
    }
  });

  scene.addEventListener("loaded", () => {
    createPortal();
  });
});
