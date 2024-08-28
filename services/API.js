const API = {
  customers_url: "http://localhost:3001/api/v1/customers",
  sites_url: "http://localhost:3001/api/v1/sites",
  points_url: "http://localhost:3001/api/v1/points",
  boards_url: "http://localhost:3001/api/v1/boards",
  sensors_url: "http://localhost:3001/api/v1/sensors",

  getData: async function getData() {
    const requestCustomers = await fetch(API.customers_url);
    const customers = await requestCustomers.json();
    const requestSites = await fetch(API.sites_url);
    const sites = await requestSites.json();
    const requestPoints = await fetch(API.points_url);
    const points = await requestPoints.json();
    const requestBoards = await fetch(API.boards_url);
    const boards = await requestBoards.json();
    const requestSensors = await fetch(API.sensors_url);
    const sensors = await requestSensors.json();
    const summary = {
      customers: customers.items,
      sites: sites.items,
      points: points.items,
      boards: boards.items,
      sensors: sensors.items,
    };
    return { summary, customers, sites, points, boards, sensors };
  },
};

export { API };
