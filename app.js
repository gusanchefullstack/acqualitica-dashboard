import { API } from "./services/API.js";
import { Router } from "./services/Router.js";
import { Store } from "./services/Store.js";
import { loadData } from "./services/Data.js";
import { CustomersPage } from "./components/CustomersPage.js";
import { SitesPage } from "./components/SitesPage.js";
import { PointsPage } from "./components/PointsPage.js";
import { BoardsPage } from "./components/BoardsPage.js";
import { SensorsPage } from "./components/SensorsPage.js";

window.app = {};
app.Store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM Loaded");
  loadData();
  app.router.init();
});
