import { API } from "./API.js";

export async function loadData() {
  const data = await API.getData();
  app.Store = { ...data };
  console.log(app.Store.summary);
}
