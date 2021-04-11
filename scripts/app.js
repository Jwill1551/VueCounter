const app = Vue.createApp({
    data(){
        return {
            counter: 0,
        };
    },

    methods: {
        addCounter(){
            this.counter++;
        },
        subCounter(){
            this.counter--;
        },
        resetCounter(){
            this.counter = 0;
        }
    }
});

app.mount('#events');



