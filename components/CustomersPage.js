export class CustomersPage extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("customers-page-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");

    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/CustomersPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (app.Store.customers.data) {
      this.root.querySelector(".customers-container").innerHTML = "";
      // creates a <table> element and a <tbody> element
      const tbl = document.createElement("table");
      const tblBody = document.createElement("tbody");
      const tblHeader = document.createElement("thead");
      const tblHeaderRow = document.createElement("tr");
      const thName = document.createElement("th");
      thName.innerHTML = "<p>Name</p>";
      const thAddress = document.createElement("th");
      thAddress.innerHTML = "<p>Address</p>";
      const thCountry = document.createElement("th");
      thCountry.innerHTML = "<p>Country</p>";
      const thRegion = document.createElement("th");
      thRegion.innerHTML = "<p>Region</p>";
      const thPhone = document.createElement("th");
      thPhone.innerHTML = "<p>Phone</p>";
      const thStatus = document.createElement("th");
      thStatus.innerHTML = "<p>Status</p>";
      const thActions = document.createElement("th");
      thActions.innerHTML = "<p>Actions</p>";

      tblHeaderRow.appendChild(thName);
      tblHeaderRow.appendChild(thAddress);
      tblHeaderRow.appendChild(thCountry);
      tblHeaderRow.appendChild(thRegion);
      tblHeaderRow.appendChild(thPhone);
      tblHeaderRow.appendChild(thStatus);
      tblHeaderRow.appendChild(thActions);
      tblHeader.appendChild(tblHeaderRow);

      // creating all cells
      for (let i = 0; i < app.Store.customers.data.length; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (const [key, value] of Object.entries(
          app.Store.customers.data[i]
        )) {
          if (
            key != "id" &&
            key != "_count" &&
            key != "createdAt" &&
            key != "updatedAt" &&
            key != "active" &&
            key != "address2" &&
            key != "zipCode" &&
            key != "city" &&
            key != "state" &&
            key != "website"
          ) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`${value}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
      }

      // put the <tbody> in the <table>
      tbl.appendChild(tblHeader);
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      this.root.querySelector(".customers-container").appendChild(tbl);
      // sets the border attribute of tbl to '2'
      tbl.setAttribute("border", "1");
    }
  }
}

customElements.define("customers-page", CustomersPage);
