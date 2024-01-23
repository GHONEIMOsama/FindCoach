import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import store from "./store/index";
import "./firebase";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faMessage,
  faPowerOff,
  faUser,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faMessage, faPowerOff, faUser, faPaperPlane);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast, { position: POSITION.BOTTOM_RIGHT });
app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");
