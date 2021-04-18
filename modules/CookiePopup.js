import { acceptHandler, rejectHandler } from "./PopupHandlers.js";

export default class NewPopup {
  constructor(popupTitle, title_1, title_2, title_3, btn_1, btn_2) {
    this.popupTitle = popupTitle;
    this.title_1 = title_1;
    this.title_2 = title_2;
    this.title_3 = title_3;
    this.btn_1 = btn_1;
    this.btn_2 = btn_2;
  }

  createDiv(theClass) {
    const div = document.createElement("div");
    if (typeof theClass === "string") {
      div.className = theClass;
    }
    return div;
  }

  createPopupTitle() {
    const popupTitle = document.createElement("h1");
    popupTitle.textContent = this.popupTitle;
    return popupTitle;
  }

  createTableTitle(text) {
    const tableTitle = document.createElement("h2");
    tableTitle.textContent = text;
    return tableTitle;
  }

  createButton(theClass, text, handler) {
    const button = document.createElement("button");
    if (typeof theClass === "string") {
      button.className = theClass;
    }
    button.textContent = text;
    button.addEventListener("click", () => {
      handler();
    });
    return button;
  }

  createPopup() {
    const mainDiv = this.createDiv("cookie-popup");
    mainDiv.appendChild(this.createDiv("Blured"));
    const popup = mainDiv.appendChild(this.createDiv("popup"));

    popup.appendChild(this.createPopupTitle(this.popupTitle));
    const tableTitles = popup.appendChild(this.createDiv("tableTitles"));
    tableTitles.appendChild(this.createTableTitle(this.title_1));
    tableTitles.appendChild(this.createTableTitle(this.title_2));
    tableTitles.appendChild(this.createTableTitle(this.title_3));

    popup.appendChild(this.createDiv("table"));
    const btnContainer = popup.appendChild(this.createDiv("decisionButtons"));
    btnContainer.appendChild(
      this.createButton("acceptBtn", this.btn_1, acceptHandler)
    );
    btnContainer.appendChild(
      this.createButton("rejectBtn", this.btn_2, rejectHandler)
    );
    return mainDiv;
  }
}
