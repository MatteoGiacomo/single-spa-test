<template>
    <div id="markets">
        <div :class="$style.wrapper">
            <h1>{{ text }}</h1>
            <span
                :class="$style.button"
                @click="redirect"
            >
            Home
        </span>
        </div>
    </div>
</template>

<script>
    import { navigateToUrl } from 'single-spa'
export default {
    name: 'Markets',
    data () {
    	return {
    		text: 'Hello from Vue'
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
