let eventBus = new Vue();


let app = new Vue({
    el: '#app',
    data: {
        name: 'KANBAN DASK'
    }
});

Vue.component('board', {
    template:`
        <div class="tables">
            <div class="tables-list">
                <table_1 :column_1="column_1"></table_1>
                <table_2 :column_2="column_2"></table_2>
                <table_3 :column_3="column_3"></table_3>
                <table_4 :column_4="column_4"></table_4>
            </div>
        </div>
    `,
    data() {
        return {
            column_1: [],
            column_2: [],
            column_3: [],
            column_4: [],
        }
    },
    mounted() {
        this.column_1 = JSON.parse(localStorage.getItem('column_1')) || [];
        this.column_2 = JSON.parse(localStorage.getItem('column_2')) || [];
        this.column_3 = JSON.parse(localStorage.getItem('column_3')) || [];
        this.column_4 = JSON.parse(localStorage.getItem('column_4')) || [];
    }
})


