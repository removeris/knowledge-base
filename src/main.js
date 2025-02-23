import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { authState } from './auth';

const app = createApp(App);

router.app = app;

app.config.globalProperties.$authState = authState;

app.use(router).mount('#app')

