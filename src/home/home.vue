<template>
    <div>
        <div :class="$style.wrapper">
            <h1>{{ text }}</h1>
            <span
                :class="$style.button"
                @click="redirect('markets')"
            >
            markets
        </span>
            <span
                :class="$style.button"
                @click="redirect('dashboard')"
            >
            dashboard
        </span>
        </div>
    </div>
</template>

<script>
    import { navigateToUrl, unloadApplication } from 'single-spa'
export default {
    name: 'Home',
    data () {
        return {
            text: 'Home: vue app'
        }
    },
    methods: {
        redirect(page) {
        	console.log('testing click: ', page)
        	console.log('testing url: ', `${window.location.host}/${page}`)
	        unloadApplication('home')
                .then(() => navigateToUrl(`/${page}`))
        }
    }
}
</script>

<style module>
    .wrapper {
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

    .button:hover {
        background-color: blanchedalmond;
    }
</style>
