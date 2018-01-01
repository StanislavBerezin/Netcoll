<template>
<div class="grid">
    <Nav class="navigation"></Nav>
    <Sidemenu class="row sidemenu"></Sidemenu>
    <section class="maincontent">
        <b-tabs >

            <b-tab-item label="Search">
                   <MainSearch></MainSearch>
            </b-tab-item>

            <b-tab-item label="View purchased">
               
            </b-tab-item>
        </b-tabs>
    </section>
 
    <Footer class="footer"></Footer>
</div>
  
</template>
<script>
import Nav from './within/Nav'
import Card from './within/Card'
import Sidemenu from './within/Sidemenu'
import Footer from '../small/Footer'
import MainSearch from './within/MainSearch'
export default {
    data(){
        return{
            
        }
    },
    components:{
        Nav,
        Card,
        Sidemenu,
        Footer,
        MainSearch
    }
  
}
</script>
<style scoped>
.test{
    border: 2px solid red;
}
.grid{
    display: grid;
    grid-template-columns: repeat(24, 1fr)
}

.navigation, .footer{
    grid-column: 1/25;
}
.sidemenu{
    grid-column: 3/8;
    grid-auto-columns: minmax(200px, auto);
    margin-top:30px;
}
.maincontent{
    grid-column: 8/22;
    margin-left: 50px;
    margin-top:30px;
}

</style>
