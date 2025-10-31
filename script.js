      const toggleBtn = document.querySelector(".toggle-btn");
      const toggleBtnIcon = document.querySelector(".toggle-btn i");
      const dropdownMenu = document.querySelector("#mobile-menu");

      function closeMenu() {
        dropdownMenu.classList.remove("open");
        dropdownMenu.setAttribute("aria-hidden", "true");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtnIcon.className = "fa-solid fa-bars";
      }

      function openMenu() {
        dropdownMenu.classList.add("open");
        dropdownMenu.setAttribute("aria-hidden", "false");
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtnIcon.className = "fa-solid fa-xmark";
      }

      toggleBtn.addEventListener("click", () => {
        const isOpen = dropdownMenu.classList.contains("open");
        isOpen ? closeMenu() : openMenu();
      });

      // Close on link click
      dropdownMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", closeMenu);
      });

      // Close on outside click
      document.addEventListener("click", (e) => {
        const withinNav = e.target.closest("nav");
        const withinMenu = e.target.closest("#mobile-menu");
        if (
          !withinNav &&
          !withinMenu &&
          dropdownMenu.classList.contains("open")
        ) {
          closeMenu();
        }
      });

      // Close on Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && dropdownMenu.classList.contains("open")) {
          closeMenu();
        }
      });

      // Close menu when switching to desktop width
      function handleResize() {
        if (window.innerWidth > 868) {
          closeMenu(); // uses the closeMenu() you already have
        }
      }
      window.addEventListener("resize", handleResize);
      // also run once on load (in case page opens wide with menu persisted)
      handleResize();