export default class NewPartner {
  constructor(partnerName, partnerLink, partnerId) {
    this.partnerName = partnerName;
    this.partnerLink = partnerLink;
    this.partnerId = partnerId;
  }

  createDiv(theClass) {
    const div = document.createElement("div");
    if (typeof theClass === "string") {
      div.className = theClass;
    }
    return div;
  }

  createPartnerName() {
    const partnerName = document.createElement("h3");
    partnerName.textContent = this.partnerName;
    return partnerName;
  }

  createPartnerLink(theClass) {
    const partnerLink = document.createElement("a");
    if (typeof theClass === "string") {
      partnerLink.className = theClass;
    }
    partnerLink.textContent = this.partnerLink;
    partnerLink.setAttribute("href", this.partnerLink);
    return partnerLink;
  }

  createInput(theClass, id) {
    const input = document.createElement("input");
    if (typeof theClass === "string") {
      input.className = theClass;
    }
    input.setAttribute("type", "checkbox");
    input.setAttribute("checked", "checked");
    input.setAttribute("id", id);
    return input;
  }

  createSpan(theClass) {
    const span = document.createElement("span");
    if (typeof theClass === "string") {
      span.className = theClass;
    }
    return span;
  }

  createCheckBox(theClass) {
    const label = document.createElement("label");
    if (typeof theClass === "string") {
      label.className = theClass;
    }
    label.appendChild(this.createInput("toggleButton", this.partnerId));
    label.appendChild(this.createSpan("slider round"));
    return label;
  }

  createPartnerRecord() {
    const mainDiv = this.createDiv("form");
    mainDiv.appendChild(this.createPartnerName());
    mainDiv.appendChild(this.createPartnerLink("partnerLink"));
    mainDiv.appendChild(this.createCheckBox("switch"));
    return mainDiv;
  }
}
