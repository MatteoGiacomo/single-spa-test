import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Header from './header.vue'

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#header',
		render: r => r(Header)
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
