import { registerApplication, start } from 'single-spa'

registerApplication(
		'markets',
		() => import('./src/markets/vue.app.js'),
		() => location.pathname === "/markets"
)

registerApplication(
		'dashboard',
		() => import('./src/dashboard/main.app.js'),
		() => location.pathname === "/dashboard"
)

registerApplication(
		'home',
		() => import('./src/home/vue.app.js'),
		() => location.pathname === "/"
)

registerApplication(
		'header',
		() => import('./src/header/vue.app.js'),
		() => location.pathname !== '/page-not-found'
)

registerApplication(
		'footer',
		() => import('./src/footer/vue.app.js'),
		() => location.pathname !== '/page-not-found'
)
start()
