  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleBtnIcon = document.querySelector(".toggle-btn i");
    const dropdownMenu = document.getElementById("mobile-menu");

    if (!toggleBtn || !toggleBtnIcon || !dropdownMenu) return;

    const isOpen = () => dropdownMenu.classList.contains("open");

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

    // Toggle on button (and stop outside-click handler from immediately firing)
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isOpen() ? closeMenu() : openMenu();
    });

    // Close on menu link click
    dropdownMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // Close on outside click (treat clicks on the toggle as "inside")
    document.addEventListener("click", (e) => {
      if (!isOpen()) return;
      const clickedToggle = e.target.closest(".toggle-btn");
      const clickedMenu = e.target.closest("#mobile-menu");
      if (!clickedToggle && !clickedMenu) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) closeMenu();
    });

    // Close on scroll (so fixed nav + fixed dropdown don’t drift)
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!isOpen()) return;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            closeMenu();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    // Close when switching to desktop
    function handleResize() {
      if (window.innerWidth > 868 && isOpen()) closeMenu();
    }
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
  });