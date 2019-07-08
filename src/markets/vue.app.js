import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Hello from './markets.vue'

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#markets',
		render: r => r(Hello)
	}
})

export const bootstrap = [
	vueLifecycles.bootstrap,
]

export const mount = [
	vueLifecycles.mount,
]

export const unmount = [
	vueLifecycles.unmount,
]
