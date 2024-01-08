import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import store from "./store/index";
import "./firebase";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast);

app.mount("#app");
