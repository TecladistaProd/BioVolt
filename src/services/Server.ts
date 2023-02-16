import { createServer, Model, Factory, Response } from "miragejs";
import { IUserModel } from "src/interfaces/Server";

import { wait } from "../utils/timing";

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  models: {
    user: Model as IUserModel,
    funds: Model,
  },

  seeds(server) {
    server.create("user", {
      // @ts-ignore
      first_name: "John",
      last_name: "Doe",
      email: "john_doe@gmail.com",
      password: "12345678",
    });
  },

  routes() {
    this.post("/api/signin", async (schema, request) => {
      await wait(Math.random() * 5);
      const body = JSON.parse(request.requestBody);
      const data = schema.db.users.findBy({ email: body.email });
      if (!data)
        return new Response(
          404,
          {},
          {
            message: "User not found. Please sign up",
          }
        );
      else if (data.password !== body.password)
        return new Response(
          400,
          {},
          {
            message: "Wrong password",
          }
        );
      return {
        ...data,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      };
    });
    this.post("/api/signup", () => {
      return {};
    });
    this.get("/api/funds/:id", () => {
      return {};
    });
  },
});
