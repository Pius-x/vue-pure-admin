import { App } from "vue";
import starRate from "./src/index.vue";

export const StarRate = Object.assign(starRate, {
  install(app: App) {
    console.log(starRate.name);
    app.component(starRate.name, starRate);
  }
});

export default StarRate;
