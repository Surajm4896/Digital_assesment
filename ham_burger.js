
        const hamburger = document.getElementById("hamburger-btn");
        const hamburgerCloseBtn = document.getElementById("hamburger-close")
        const navLinks = document.getElementById("navbar");
        const navMenu = document.getElementById("nav-menu");

        hamburger.addEventListener("click", () => {
          navLinks.classList.add("active");
          hamburger.classList.add("hidden");
          hamburgerCloseBtn.classList.remove("hidden");
          hamburgerCloseBtn.classList.add("block");
          navMenu.classList.remove("hidden");
        });

        hamburgerCloseBtn.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("hidden");
            hamburgerCloseBtn.classList.add("hidden");
            hamburgerCloseBtn.classList.remove("block");
            navMenu.classList.add("hidden");
        });
