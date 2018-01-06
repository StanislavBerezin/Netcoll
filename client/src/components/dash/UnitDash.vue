<template>
<div>
     <section class="maincontent">
     <ul>


    </ul>
             <b-tabs>

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
 
       
    </section>
</div>
  
</template>
<script>
import MainSearch from './withinUnits/MainSearch'
import MainUnit from './withinUnits/MainUnit'

export default {
        components:{

        MainSearch,
        MainUnit,

    },
  
}
</script>
<style scoped>


</style>
