import { setCookie } from "./CookieHandlers.js";

export const acceptHandler = () => {
  const cookiePopup = document.querySelector(".cookie-popup");
  const pageContent = document.querySelector("section");
  const acceptedCheckboxes = document.querySelectorAll(".toggleButton");
  let idOfAcceptedPartners = [];
  pageContent.classList.remove("stop-scrolling");
  cookiePopup.style.display = "none";
  acceptedCheckboxes.forEach((el) => {
    if (el.checked) {
      idOfAcceptedPartners.push(el.id);
    }
  });

  setCookie("idOfAcceptedPartners", idOfAcceptedPartners, 1);
};

export const rejectHandler = () => {
  const cookiePopup = document.querySelector(".cookie-popup");
  const pageContent = document.querySelector("section");
  pageContent.classList.remove("stop-scrolling");
  cookiePopup.style.display = "none";

  setCookie(
    "idOfAcceptedPartners",
    "the user did not accept the partners' privacy policy",
    1
  );
};
