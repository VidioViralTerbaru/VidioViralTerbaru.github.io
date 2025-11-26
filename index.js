<script>
let video = document.getElementById("myVideo");
let popup = document.getElementById("agePopup");

// AUTOPLAY SOUND ON (browser butuh interaksi, tapi ini tetap dicoba)
video.muted = false;
video.volume = 1.0;

// Paksa play dengan suara setelah klik pertama
document.addEventListener("click", function() {
  video.play().catch(()=>{});
}, { once: true });

// Tampilkan popup setiap 3 detik
setInterval(function() {
  video.pause();
  popup.style.display = "block";
}, 3000);

// Tombol Batal → lanjut video
document.getElementById("batalBtn").onclick = function() {
  popup.style.display = "none";
  video.play();
};

// Tombol Lanjut → redirect
document.getElementById("lanjutBtn").onclick = function() {
  window.location.href = "https://www.effectivegatecpm.com/hp61zvh40?key=50e1dcc0c60f03789213492a442c476d";
};
</script>
