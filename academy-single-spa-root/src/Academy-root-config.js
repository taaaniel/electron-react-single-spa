import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@Academy/academy-single-spa-navbar",
  app: () => System.import("@Academy/academy-single-spa-navbar"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
