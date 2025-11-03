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

  //FORM
  (function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  const fields = {
    name:  { el: document.getElementById('name'),    err: 'err-name',    msg: 'Ange ditt namn.' },
    email: { el: document.getElementById('email'),   err: 'err-email',   msg: 'Ange en giltig e-postadress.' },
    website:{el: document.getElementById('website'), err: 'err-website', msg: 'Ange en giltig URL.' },
    phone: { el: document.getElementById('phone'),   err: 'err-phone',   msg: 'Ange ett telefonnummer.' },
    subject:{el: document.getElementById('subject'), err: 'err-subject', msg: 'Välj ett ämne.' },
    message:{el: document.getElementById('message'), err: 'err-message', msg: 'Skriv ett meddelande (minst 8 tecken).' },
    gdpr:  { el: document.getElementById('gdpr'),    err: 'err-gdpr',    msg: 'Du måste godkänna GDPR.' }
  };

  function setError(key, show, customMsg) {
    const f = fields[key];
    const errEl = document.getElementById(f.err);
    if (!f.el || !errEl) return;
    if (show) {
      f.el.setAttribute('aria-invalid', 'true');
      const msg = customMsg || f.msg;
      errEl.textContent = msg;
      errEl.hidden = false;
      f.el.setAttribute('aria-describedby', f.err);
    } else {
      f.el.removeAttribute('aria-invalid');
      errEl.textContent = '';
      errEl.hidden = true;
      f.el.removeAttribute('aria-describedby');
    }
  }

  function validateField(key) {
    const f = fields[key];
    if (!f.el) return true;

    if (key === 'website' && !f.el.value) { setError(key, false); return true; }

    let ok = f.el.checkValidity();
    if (key === 'gdpr') ok = f.el.checked;

    setError(key, !ok);
    return ok;
  }

  Object.keys(fields).forEach(key => {
    const el = fields[key].el;
    if (!el) return;
    const evt = key === 'subject' ? 'change' : 'input';
    el.addEventListener(evt, () => validateField(key));
  });

  form.addEventListener('submit', (e) => {
    let firstBad = null;
    let allOk = true;

    Object.keys(fields).forEach(key => {
      const ok = validateField(key);
      if (!ok && !firstBad) firstBad = fields[key].el;
      allOk = allOk && ok;
    });

    if (!allOk) {
      e.preventDefault();
      status.textContent = 'Vänligen rätta felen i formuläret.';
      firstBad?.focus();
    } else {
      status.textContent = 'Skickar…';
    }
  });
})();

(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  const fields = {
    name:  { el: document.getElementById('name'),    err: 'err-name',    msg: 'Ange ditt namn.' },
    email: { el: document.getElementById('email'),   err: 'err-email',   msg: 'Ange en giltig e-postadress.' },
    website:{el: document.getElementById('website'), err: 'err-website', msg: 'Ange en giltig URL.' },
    phone: { el: document.getElementById('phone'),   err: 'err-phone',   msg: 'Ange ett telefonnummer.' },
    subject:{el: document.getElementById('subject'), err: 'err-subject', msg: 'Välj ett ämne.' },
    message:{el: document.getElementById('message'), err: 'err-message', msg: 'Skriv ett meddelande (minst 8 tecken).' },
    gdpr:  { el: document.getElementById('gdpr'),    err: 'err-gdpr',    msg: 'Du måste godkänna GDPR.' }
  };

  function setError(key, show, customMsg) {
    const f = fields[key];
    const errEl = document.getElementById(f.err);
    if (!f.el || !errEl) return;
    if (show) {
      f.el.setAttribute('aria-invalid', 'true');
      const msg = customMsg || f.msg;
      errEl.textContent = msg;
      errEl.hidden = false;
      f.el.setAttribute('aria-describedby', f.err);
    } else {
      f.el.removeAttribute('aria-invalid');
      errEl.textContent = '';
      errEl.hidden = true;
      f.el.removeAttribute('aria-describedby');
    }
  }

  function validateField(key) {
    const f = fields[key];
    if (!f.el) return true;

    if (key === 'website' && !f.el.value) { setError(key, false); return true; }

    let ok = f.el.checkValidity();
    if (key === 'gdpr') ok = f.el.checked;

    setError(key, !ok);
    return ok;
  }

  Object.keys(fields).forEach(key => {
    const el = fields[key].el;
    if (!el) return;
    const evt = key === 'subject' ? 'change' : 'input';
    el.addEventListener(evt, () => validateField(key));
  });

  form.addEventListener('submit', (e) => {
    let firstBad = null;
    let allOk = true;

    Object.keys(fields).forEach(key => {
      const ok = validateField(key);
      if (!ok && !firstBad) firstBad = fields[key].el;
      allOk = allOk && ok;
    });

    if (!allOk) {
      e.preventDefault();
      status.textContent = 'Vänligen rätta felen i formuläret.';
      firstBad?.focus();
    } else {
      status.textContent = 'Skickar…';
    }
  });
})();