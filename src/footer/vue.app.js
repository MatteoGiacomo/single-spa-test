import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Footer from './footer.vue'

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#footer',
		render: r => r(Footer)
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
