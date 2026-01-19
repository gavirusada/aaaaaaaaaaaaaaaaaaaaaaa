const lt = document.getElementById("lowerThird");
const program = document.getElementById("programText");
const classTxt = document.getElementById("classText");

// හැම තත්පර භාගයකට සැරයක්ම චෙක් කරන්න
setInterval(() => {
  const action = localStorage.getItem("lt_action");
  const storedProgram = localStorage.getItem("lt_program") || "";
  const storedClass = localStorage.getItem("lt_class") || "";

  // නම වෙනස් වෙලා නම් අප්ඩේට් කරන්න
  if (program.innerText !== storedProgram) {
    program.innerText = storedProgram;
  }
  if (classTxt.innerText !== storedClass) {
    classTxt.innerText = storedClass;
  }

  // ඇනිමේෂන් එක පාලනය කරන්න
  if (action === "in") {
    if (!lt.classList.contains("show")) {
      lt.classList.remove("hide");
      lt.classList.add("show");
    }
  } else if (action === "out") {
    if (!lt.classList.contains("hide")) {
      lt.classList.remove("show");
      lt.classList.add("hide");
    }
  }
}, 500);