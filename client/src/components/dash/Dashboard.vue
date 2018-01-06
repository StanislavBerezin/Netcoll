<template>
<div class="grid">
    <Nav class="navigation"></Nav>
    <Sidemenu class="row sidemenu"></Sidemenu>

    

    <section class="maincontent">
        <router-view></router-view>
     
             <!-- <b-tabs v-if="isUnit">

            <b-tab-item label="Search" >
                    <router-view></router-view>
                    <keep-alive>
                        <MainSearch></MainSearch>
                    </keep-alive>
                   
            </b-tab-item>

            <b-tab-item label="View purchased">
                    <keep-alive>
                        <MainUnit></MainUnit>
                    </keep-alive>
                    
            </b-tab-item>
        </b-tabs>
        <div v-else>
            <FindUnit></FindUnit>
        </div> -->

       
    </section>
 
    <Footer class="footer"></Footer>
</div>
  
</template>
<script>
import Nav from './Nav'
import Card from './withinUnits/Card'
import Sidemenu from './Sidemenu'
import Footer from '../small/Footer'
import MainSearch from './withinUnits/MainSearch'
import MainUnit from './withinUnits/MainUnit'
import FindUnit from './beforeUnits/FindUnit'
export default {
    data(){
        return{
            isUnit: true
        }
    },
    components:{
        Nav,
        Card,
        Sidemenu,
        Footer,
        MainSearch,
        MainUnit,
        FindUnit
    },
    methods:{
        goSearch(){
            router.push({name: "MainSearch"})
        }
    }
  
}
</script>
<style  scoped>

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
