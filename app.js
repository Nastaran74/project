const app = Vue.createApp({
    data() {
        return {
            name: 'Nasi',
            family: 'azizi',

        }
    },
    computed: {
        getFullName() {
            return this.name + '' + this.family;
        }
    },
    // computed: {
    //     getTime() {
    //         return Date.now()
    //     }
    // }
});

app.mount('#app');