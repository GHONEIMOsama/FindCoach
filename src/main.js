import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import store from "./store/index";
import "./firebase";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
