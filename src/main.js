import { createApp } from "vue";
import "@/assets/styles/style.scss";
import App from "./App";
import router from "@/router/index";
import store from "@/store";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
