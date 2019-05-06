import Vue from "vue";
import Router from "vue-router";
import ChampionList from "./views/ChampionList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "Error404",
      component: () => import("./views/Error404.vue")
    },
    {
      path: "/",
      name: "Home",
      component: ChampionList,
      fastrender: true
    },
    {
      path: "/season/:season",
      name: "SeasonWinners",
      props: true,
      component: () => import("./views/SeasonWinners.vue")
    },
    {
      path: "/driver/",
      name: "DriverList",
      component: () => import("./views/DriverList.vue")
    },
    {
      path: "/driver/alonso",
      name: "DriverAlonso",
      component: () => import("./views/drivers/DriverAlonso.vue")
    },
    {
      path: "/driver/button",
      name: "DriverButton",
      component: () => import("./views/drivers/DriverButton.vue")
    },
    {
      path: "/driver/hamilton",
      name: "DriverHamilton",
      component: () => import("./views/drivers/DriverHamilton.vue")
    },
    {
      path: "/driver/raikkonen",
      name: "DriverRaikkonen",
      component: () => import("./views/drivers/DriverRaikkonen.vue")
    },
    {
      path: "/driver/vettel",
      name: "DriverVettel",
      component: () => import("./views/drivers/DriverVettel.vue")
    }
  ]
});
