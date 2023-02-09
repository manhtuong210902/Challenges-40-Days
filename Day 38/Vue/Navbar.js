
const Navbar = {
    data(){
        return {
            inputValue: ""
        }
    },

    emits: ["search"],

    methods: {
        handleClickSearch(){
            let value = parseInt(this.inputValue);
            if(isNaN(value) || value < 0){
                console.log(value)
                return;
            }
            this.$emit('search', value);
            document.querySelector('input[type=search]').value = "";
        }
    },

    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex justify-content-between">
            <a class="navbar-brand" href="/">Home</a>
            <div class="d-flex">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    v-model="inputValue"
                />
                <button class="btn btn-outline-success" @click="handleClickSearch">Search</button>
            </div>
        </div>
    </nav>        
    `
}

export default Navbar