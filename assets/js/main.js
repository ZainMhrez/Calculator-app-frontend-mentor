let body = document.body;
let toggler = document.querySelectorAll(".toggler");

// Set the default theme to theme1
localStorage.setItem("theme", "theme1");
body.classList.add(localStorage.getItem("theme"));

// Theme switcher function
let switchTheme = () => {
  toggler.forEach((t) => {
    t.addEventListener("click", () => {
      body.style.transition = "0.5s";
      // remove the previous theme class
      body.classList.remove(localStorage.getItem("theme"));
      // set theme value to the new theme
      localStorage.setItem("theme", t.dataset.theme);
      // add the new theme to body
      body.classList.add(localStorage.getItem("theme"));
    })
  })
}

switchTheme();

let key = document.querySelectorAll(".calculator .keypad .key");
let screen = document.querySelector(".calculator .screen");

let calculator = () => {
  key.forEach(k => {
    k.addEventListener("click", () => {
      switch (k.textContent) {
        case "x":
          screen.textContent += "*";
          break;
        case "=":
          screen.textContent = eval(screen.textContent);
          break;
        case "DEL":
          if (screen.textContent){
            screen.textContent = screen.textContent.slice(0, -1);
          }
          break;
        case "RESET":
          screen.textContent = "";
          break;
        default:
          screen.textContent += k.textContent;
          break;
      }
    })
  })
}

calculator();