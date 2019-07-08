<template>
    <div :class="$style.wrapper">
        <span>{{ text }}</span>
        <div>{{ `ti sei spostata su: ${routing}` }}</div>
    </div>
</template>

<script>
	export default {
		name: 'Header',
		data () {
			return {
				text: 'Header: vue app',
                routing: ''
			}
		},
        mounted() {
            window.addEventListener('single-spa:before-routing-event', e => {
            	this.routing = e.target.location.pathname
            })
        }
	}
</script>

<style module>
    .wrapper {
        background-color: white;
        border-bottom: 1px solid lightgray;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        padding: 30px 20px;
    }
</style>
