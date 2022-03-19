import * as wasm from "hello-wasm-pack"
import { createApp } from 'vue';
import App from './app.vue';
import './styles/style.css';

createApp(App).mount('#app')

// wasm.greet();