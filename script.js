document.addEventListener("DOMContentLoaded", function () {

  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  let isPlaying = false;

  btn.addEventListener("click", function () {
    if (!isPlaying) {
      music.play();
      btn.textContent = "Pause Music";
      isPlaying = true;
    } else {
      music.pause();
      btn.textContent = "Play Music";
      isPlaying = false;
    }
  });

});

}
 const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    topBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

}
