<template>
    <div id="app">
        <h1>Message: {{ message }}</h1>
    </div>
</template>

<style lang="scss">
    #app {}
</style>

<script>
    import test from './lib/test';

    export default {
        computed: {
            message(){ return test.message; }
        }
    }
</script>
