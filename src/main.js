import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bulma from "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
createApp({
    created() {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const userData = JSON.parse(userInfo);
            this.$store.commit("setUserData", userData);
        }
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                    this.$store.dispatch("logout");
                }
                return Promise.reject(error);
            }
        );
    },
    render: () => h(App),
})
    .use(store)
    .use(router)
    .use(bulma)
    .mount("#app");
