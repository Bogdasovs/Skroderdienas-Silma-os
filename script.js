const dateButton = document.querySelector("#capitalDate");
const dateImage = document.querySelector("#capitalImage");
const silmacosDateButton = document.querySelector("#silmacosDate");
const silmacosDateImage = document.querySelector("#silmacosImage");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const navHide = document.querySelector(".nav-hide");
const navShow = document.querySelector(".nav-show");
let navIsHidden = false;

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loaded");
});

if (dateButton && dateImage) {
  dateButton.addEventListener("click", () => {
    openPopup(dateImage, dateButton);
  });
}

if (silmacosDateButton && silmacosDateImage) {
  silmacosDateButton.addEventListener("click", () => {
    openPopup(silmacosDateImage, silmacosDateButton);
  });
}

function openPopup(popup, trigger) {
  popup.classList.remove("is-closing");
  popup.removeAttribute("hidden");
  trigger.setAttribute("aria-expanded", "true");
}

function closePopup(popup, trigger) {
  if (popup.hasAttribute("hidden") || popup.classList.contains("is-closing")) {
    return;
  }

  popup.classList.add("is-closing");
  if (trigger) {
    trigger.setAttribute("aria-expanded", "false");
  }

  window.setTimeout(() => {
    popup.setAttribute("hidden", "");
    popup.classList.remove("is-closing");
  }, 220);
}

document.querySelectorAll(".image-popup").forEach((popup) => {
  const closeButton = popup.querySelector(".popup-close");
  const trigger = popup.id === "capitalImage" ? dateButton : silmacosDateButton;

  closeButton.addEventListener("click", () => closePopup(popup, trigger));
  popup.addEventListener("click", (event) => {
    closePopup(popup, trigger);
  });
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const updateNav = () => {
  const shouldFloat = window.scrollY > 180;

  nav.classList.toggle("is-floating", shouldFloat);
  nav.classList.toggle("is-hidden", navIsHidden);
  navShow.hidden = !navIsHidden;

  navLinks.forEach((link) => {
    const linkUrl = new URL(link.getAttribute("href"), window.location.href);
    const linkPage = linkUrl.pathname.split("/").pop() || "index.html";

    link.classList.toggle("is-active", linkPage === currentPage);
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.add("is-floating");
    navIsHidden = false;
    updateNav();
  });
});

navHide.addEventListener("click", () => {
  navIsHidden = true;
  updateNav();
});

navShow.addEventListener("click", () => {
  navIsHidden = false;
  updateNav();
});

window.addEventListener("scroll", updateNav);
updateNav();

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = new URL(link.getAttribute("href"), window.location.href);
    const isSameOrigin = url.origin === window.location.origin;
    const isSamePage = url.pathname === window.location.pathname && url.hash;

    if (!isSameOrigin || isSamePage || link.target === "_blank") {
      return;
    }

    event.preventDefault();
    document.body.classList.add("is-leaving");

    window.setTimeout(() => {
      window.location.href = url.href;
    }, 240);
  });
});
