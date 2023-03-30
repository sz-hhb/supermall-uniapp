import App from "./App"
import * as Pinia from "pinia"
// #ifdef H5
import lazyPlugin from 'vue3-lazy'
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue"
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())

	// #ifdef H5
	app.use(lazyPlugin, {
		loading: "./static/images/common/placeholder.png"
	})
	// #endif

	return {
		app,
		Pinia
	}
}
// #endif