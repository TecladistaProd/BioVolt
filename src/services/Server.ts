import { createServer, Model, Factory } from "miragejs";

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  models: {
    user: Model.extend({}),
    funds: Model.extend({}),
  },

  seeds(server) {},

  routes() {
    this.post("/api/signin", () => {
      return {};
    });
    this.post("/api/signup", () => {
      return {};
    });
    this.get("/api/funds/:id", () => {
      return {};
    });
  },
});
