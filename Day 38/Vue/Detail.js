

const Detail = {
    data(){
        return{
            user: {},
        }
    },

    methods: {
        async load(id){
            const res = await fetch(`https://reqres.in/api/users/${id}`);
            const rs = await res.json();
            this.user = rs.data;
        },
    },

    props: ['idUser'],

    mounted(){
       this.load(this.idUser)
    },

    template: `
    <div class="text-center">
        <h4>{{user.first_name}} {{user.last_name}}</h4>
        <img :src="user.avatar" alt="" />
        <p>{{user.email}}</p>
    </div>
    `
}

export default Detail