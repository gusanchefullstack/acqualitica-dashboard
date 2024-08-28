export class SitesPage extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("sites-page-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(content);
    this.root.appendChild(styles);
    
    async function loadCSS() {
      const request = await fetch("/components/SitesPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
  }
}

customElements.define("sites-page", SitesPage);
