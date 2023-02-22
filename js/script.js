

window.onscroll = function() {revealSection()};

function revealSection() {
  if (document.documentElement.scrollTop > 60) {
    document.getElementById("About").className = "show-section";
    console.log("revealed about");
  }

  if (document.documentElement.scrollTop > 400) {
    document.getElementById("Skill").className = "show-section";
    console.log("revealed skill");
  }

  if (document.documentElement.scrollTop > 1000) {
    document.getElementById("Contacts").className = "show-section";
    console.log("revealed contact");
  }
}

