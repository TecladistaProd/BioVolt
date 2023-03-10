import AsyncStorage from "@react-native-async-storage/async-storage";
import { createServer, Model, Response } from "miragejs";

import { IUserModel, TFundType } from "@interfaces/Server";

import { getRandomNumber } from "@utils/generator";
import { BDs } from "./mock";

const funds: Array<TFundType> = ["Nature", "Solar", "Wind"];

if (window.server) {
  window.server.shutdown();
}

const usersMock = async () => {
  const item = await AsyncStorage.getItem("@biovolt/users");
  let users = (!!item && JSON.parse(item)) || [
    {
      first_name: "John",
      last_name: "Doe",
      email: "john_doe@gmail.com",
      password: "12345678",
      accept_terms: true,
    },
  ];
  return users;
};

window.server = createServer({
  models: {
    user: Model as IUserModel,
  },

  async seeds(server) {
    const users = await usersMock();
    users.forEach((i: any) => server.create("user", i));
  },

  routes() {
    this.namespace = "api";
    this.timing = getRandomNumber(200, 900);

    this.post("/signin", async (schema, request) => {
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
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        accept_terms: data.accept_terms,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      };
    });
    this.post("/signup", async (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.db.users.insert({ ...body });

      await AsyncStorage.setItem(
        "@biovolt/users",
        JSON.stringify(Array.from(schema.db.users))
      );
      return new Response(
        200,
        {},
        {
          message: "User created",
        }
      );
    });
    this.get("/funds", async () => {
      return funds.map((f) => ({
        type: f,
        price_at_open: getRandomNumber(9, 65, 2),
        price_at_close: getRandomNumber(10, 70, 2),
        aum: getRandomNumber(75, 500, 2),
        vr: "2019 - 2023",
        issue_date: Date.now(),
        ter: getRandomNumber(0.01, 100, 2),
        credits: getRandomNumber(5, 30, 0),
        last_purchase: getRandomNumber(
          new Date("2021").getTime(),
          Date.now() - 10000,
          0
        ),
      }));
    });
    this.get("/bds", () => {
      return BDs;
    });
  },
});
