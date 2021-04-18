import NewPartner from "./modules/PartnersData.js";
import NewPopup from "./modules/CookiePopup.js";
import { getCookie } from "./modules/CookieHandlers.js";

let partners, arrOfPartners;

const body = document.querySelector("body");
const section = document.querySelector("section");
const cookie = getCookie("idOfAcceptedPartners");

window.addEventListener("load", () => {
  if (!cookie) {
    showPopup();
    importPartners();
  }
});

const showPopup = () => {
  const popup = new NewPopup(
    "GDPR consent",
    "Our Partners",
    "Privacy Policy",
    "I allow",
    "Accept",
    "Reject"
  );
  body.appendChild(popup.createPopup());
  section.classList.add("stop-scrolling");
};

const importPartners = () => {
  fetch("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json")
    .then((res) => res.json())
    .then((res) => {
      partners = res.vendors;
      arrOfPartners = Object.keys(partners).map((key) => partners[key]);
      arrOfPartners.forEach((el) => {
        generatePartners(el.name, el.policyUrl, el.id);
      });
    });
};

const generatePartners = (name, url, id) => {
  const table = document.querySelector(".table");
  const newPartner = new NewPartner(name, url, id);
  table.appendChild(newPartner.createPartnerRecord());
};
