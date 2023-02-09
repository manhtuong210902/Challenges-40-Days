import Table from './Table.js'
import Detail from './Detail.js';

const Content = {
    data(){
        return {
            id: -1,
            isShowTable: true,
            pageIndex: 1
        }
    },

    components: {
        Table,
        Detail,
    },

    methods: {
        showIdUser(id){
            this.id = id;
            this.isShowTable = false;
        },
    },

    props: ['page'],

    watch: { 
        page: function(newVal, oldVal) { // watch it
           this.pageIndex = newVal;
        }
    },

    mounted(){
        this.isShowTable = true;
    },
    
    template: `
    <div class="main border border-muted">
        <div class="main_header bg-primary">
            <h4>Main</h4>
        </div>
        <div class="main_content">
            <Table @showId="showIdUser" v-if="isShowTable" :page="pageIndex"/>
            <Detail :idUser="id" v-if="!isShowTable"/>
        </div>
    </div>
    `
}


export default Content;