// const help = require("nodemon/lib/help");

// // Original code from tutorial
// const shareButtons = document.querySelectorAll(".tile-share");

// async function copyText(e) {
//   e.preventDefault();
//   const link = this.getAttribute("link");
//   try {
//     await navigator.clipboard.writeText(link);
//     alert("Link copied to clipboard! " + link);
//   } catch (err) {
//     console.log(err);
//   }
// }

// shareButtons.forEach((button) => button.addEventListener("click", copyText));

// ChatGPT help
const shareButtons = document.querySelectorAll(".tile-share");

shareButtons.forEach((button) =>
  button.addEventListener("click", function(e) {
    e.preventDefault();
    const link = this.getAttribute("link");
    try {
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard! " + link);
    } catch (err) {
      console.log(err);
    }
  })
);
