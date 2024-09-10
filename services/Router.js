export const Router = {
  init: () => {
    document.querySelectorAll("a.menulink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.currentTarget.getAttribute("href");
        Router.go(url);
      });
    });
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/customers":
        pageElement = document.createElement("customers-page");
        break;
      case "/sites":
        pageElement = document.createElement("sites-page");
        break;
      case "/points":
        pageElement = document.createElement("points-page");
        break;
      case "/boards":
        pageElement = document.createElement("boards-page");
        break;
      case "/sensors":
        pageElement = document.createElement("sensors-page");
        break;
      default:
        break;
    }
    if (pageElement) {
      const cache = document.getElementById("entity-section");
      cache.innerHTML = "";
      cache.appendChild(pageElement);
    }
  },
};
