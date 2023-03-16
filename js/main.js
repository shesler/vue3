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
    },
    methods:{
        saveTab_1(){
            localStorage.setItem('column_1', JSON.stringify(this.column_1));
        },
        saveTab_2(){
            localStorage.setItem('column_2', JSON.stringify(this.column_2));
        },
        saveTab_3(){
            localStorage.setItem('column_3', JSON.stringify(this.column_3));
        },
        saveTab_4(){
            localStorage.setItem('column_4', JSON.stringify(this.column_4));
        },
    }
})


Vue.component('table_1',{
    props: {
        column_1: {
            type: Array,
        },
        tab: {
            type: Object
        },
    },
    template:`
        <div class="tab">
            <h2>Запланированные задачи</h2>
            <ul class="tab-li">
                <li v-for="tab in column_1" v-if="tab.priori == 1">
                    <div class="separator"></div>
                    <a @click="deleteTab(tab)">Удалить</a>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_1" v-if="tab.priori == 2">
                    <div class="separator"></div>
                    <a @click="deleteTab(tab)">Удалить</a> &emsp; <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_1" v-if="tab.priori == 3">
                    <div class="separator"></div>
                    <a @click="deleteTab(tab)">Удалить</a> &emsp; <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    methods: {
        nextTab(tab){
            this.column_1.splice(this.column_1.indexOf(tab), 1);
            eventBus.$emit('addColumn_2', tab);
        },
        deleteTab(tab){
            this.column_1.splice(this.column_1.indexOf(tab), 1);
        },
        updateTab(tab){
            tab.editButton = false;
            this.column_1.push(tab);
            this.column_1.splice(this.column_1.indexOf(tab), 1);
            tab.edit = new Date().toLocaleString();
        }
    }
})



