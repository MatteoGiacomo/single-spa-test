<template>
    <div :class="$style.wrapper">
        <h1>{{ testing }}</h1>
        <span
            :class="$style.button"
            @click="redirect"
        >
            Home
        </span>
    </div>
</template>

<script>
    import { navigateToUrl } from 'single-spa'
export default {
    name: 'vue-component',
    data () {
    	return {
    		testing: 'Hello from Vue'
        }
    },
    methods: {
        redirect () {
            navigateToUrl(`/`)
        }
    }
}
</script>

<style module>
    .wrapper {
        background-color: azure;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 140px;
    }
    .button {
        text-align: center;
        background-color: antiquewhite;
        border-radius: 8px;
        padding: 15px 25px;
        margin-top: 20px;
        text-transform: uppercase;
        width: 100%;
        max-width: 200px;
        cursor: pointer;
    }
</style>
