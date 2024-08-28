export class SensorsPage extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("sensors-page-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");

    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/SensorsPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
  }
}

customElements.define("sensors-page", SensorsPage);