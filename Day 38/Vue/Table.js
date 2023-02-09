const Table = {
    data(){
        return{
            persons: [],
            currPage: 1,
        }
    },

    emits: ['showId'],

    props: ['page'],

    watch: { 
        page: function(newVal, oldVal) { // watch it
           this.currPage = newVal;
           this.load(this.currPage);
        }
    },

    methods: {
        async load(page){
            this.currPage = page;
            const res = await fetch(`https://reqres.in/api/users?per_page=2&page=${page}`);
            const rs = await res.json();
            this.persons = rs.data;
        },

        handleClickNextBtn(){
            if(this.currPage == 6){
                this.currPage = 1;
            }else{
                this.currPage = this.currPage + 1;
            }
            this.load(this.currPage);
        },

        handleClicPrevtBtn(){
            if(this.currPage == 1){
                this.currPage = 6;
            }else{
                this.currPage = this.currPage - 1;
            }
            this.load(this.currPage);
        },

        handleClickItem(id){
            this.$emit('showId', id)
        }
    },

    mounted(){
        this.load(this.currPage);
    },

    template: `
    <table class="table table-striped">
        <thead>
            <tr class="bg-dark text-white">
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr v-for="(person, index) in persons" @click="handleClickItem(person.id)">
                <th scope="row">{{person.id}}</th>
                <td>{{person.first_name}}</td>
                <td>{{person.last_name}}</td>
                <td>{{person.email}}</td>
                <td>
                    <img
                        :src="person.avatar"
                        :alt="person.id"
                        class="img-fluid"
                    />
                </td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link prev-btn" href="#" @click="handleClicPrevtBtn">&lt;&lt;</a></li>
            <li class="page-item"><a class="page-link page-btn" href="#" @click="load(1)">1</a></li>
            <li class="page-item"><a class="page-link page-btn" href="#" @click="load(2)">2</a></li>
            <li class="page-item"><a class="page-link page-btn" href="#" @click="load(3)">3</a></li>
            <li class="page-item"><a class="page-link page-btn" href="#" @click="load(4)">4</a></li>
            <li class="page-item"><a class="page-link page-btn" href="#" @click="load(5)">5</a></li>
            <li class="page-item"><a class="page-link page-btn" href="#" @click="load(6)">6</a></li>
            <li class="page-item"><a class="page-link next-btn" href="#" @click="handleClickNextBtn">>></a></li>
        </ul>
    </nav>
    `
}

export default Table;