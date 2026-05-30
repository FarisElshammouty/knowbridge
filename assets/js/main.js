/* ===================================================================
   KnowBridge — home page interactions (story video + Ask search).
   Shared header/footer logic lives in layout.js.
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Watch the Story: synced captions + beats ---------- */
  var video = document.getElementById("storyVideo");
  var caption = document.getElementById("storyCaption");
  var beats = Array.prototype.slice.call(document.querySelectorAll("#storyBeats li"));

  // Each shot is ~5 seconds long.
  var SEG = 5.0417;
  var script = [
    { t: 0, text: "Sometimes academia feels a little like Hogwarts." },
    { t: 1, text: "Extraordinary knowledge lives inside its libraries, archives, and research centres." },
    { t: 2, text: "Scholars spend years creating, preserving, and expanding that knowledge." },
    { t: 3, text: "Yet many people never reach it — not because they don’t care, but because the distance feels too great." },
    { t: 4, text: "KnowBridge was built to bridge research and society, expertise and curiosity." },
    { t: 5, text: "Because knowledge should not stay behind walls. Knowledge Access Matters.", final: true }
  ];

  function segmentIndex(time) {
    var i = Math.floor(time / SEG);
    if (i < 0) i = 0;
    if (i > script.length - 1) i = script.length - 1;
    return i;
  }

  if (video && caption) {
    video.addEventListener("timeupdate", function () {
      var i = segmentIndex(video.currentTime);
      var line = script[i];
      if (caption.textContent !== line.text) caption.textContent = line.text;
      caption.classList.add("show");
      caption.classList.toggle("final", !!line.final);
      beats.forEach(function (b, idx) { b.classList.toggle("active", idx === i); });
    });
    video.addEventListener("pause", function () {
      if (video.currentTime === 0 || video.ended) caption.classList.remove("show");
    });
    video.addEventListener("ended", function () {
      beats.forEach(function (b) { b.classList.remove("active"); });
    });
    beats.forEach(function (b) {
      b.addEventListener("click", function () {
        video.currentTime = parseFloat(b.getAttribute("data-start")) + 0.05;
        video.play();
      });
    });
  }

  /* ---------- Hero "Watch the Story" button ---------- */
  document.querySelectorAll("[data-play-story]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var story = document.getElementById("story");
      if (story) story.scrollIntoView({ behavior: "smooth", block: "start" });
      if (video) {
        var p = video.play();
        if (p && p.catch) p.catch(function () {});
      }
    });
  });

  /* ---------- Ask KnowBridge (prototype) ---------- */
  var askForm = document.getElementById("askForm");
  var askInput = document.getElementById("askInput");
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      if (askInput) { askInput.value = chip.getAttribute("data-q"); askInput.focus(); }
    });
  });
  if (askForm && askInput) {
    askForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = askInput.value.trim();
      if (!q) { askInput.focus(); return; }
      askInput.value = "";
      askInput.placeholder = "Thanks! “" + q + "” — search is coming soon.";
    });
  }
})();
