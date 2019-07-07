<template>
    <div :class="$style.footer">
        <span>{{ text }}</span>
    </div>
</template>

<script>
	export default {
		name: 'Footer',
		data () {
			return {
				text: 'Footer: vue app'
			}
		}
	}
</script>

<style module>
    .footer {
        background-color: white;
        border-top: 1px solid lightgray;
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 30px 20px;
    }
</style>
