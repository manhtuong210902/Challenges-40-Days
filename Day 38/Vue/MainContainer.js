import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Sidebar from "./Sidebar.js"
import Content from "./Content.js"
import Footer from "./Footer.js"

const MainContainer = {
    data() {
        return{
            currPage: 1,
        }
    },
    components: {
        Header,
        Navbar,
        Sidebar,
        Content,
        Footer,
    },

    methods: {
        handleChangeCurrPage(page){
            this.currPage = page;
        }
    },

    template: `
    <div class="container-lg">
        <div class="row">
            <div class="col-12">
                <Header />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
               <Navbar @search="handleChangeCurrPage"/>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-3">
                <Sidebar />
            </div>
            <div class="col-9">
                <Content :page="currPage"/>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <Footer />
            </div>
        </div>
    </div>
    `
}

export default MainContainer