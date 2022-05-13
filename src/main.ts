/*
 * @Author       : ganbowen
 * @Date         : 2022-05-13 15:08:57
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-05-13 18:17:26
 * @Descripttion :
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
