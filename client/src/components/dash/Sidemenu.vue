<template>
  <div>
    <aside class="menu">
      <p class="menu-label" >
        Search for your units
      </p>
      <ul class="menu-list">
        <li>

          <b-field>
            <b-input placeholder="Search..." type="search" class="" icon="magnify" v-model="unitSearch">
            </b-input>

            <p class="control">
              <router-link class="zero" :to="{name: 'FindUnit', params:{unitCode: unitSearch}}"><button class="button is-mypurple hover">Search</button></router-link>
            </p>
          </b-field>

        </li>
      </ul>
      <p class="menu-label" style="margin-bottom:-0px;">
        Your curent units
      </p>

      <ul class="menu-list">

        <router-link v-for="route in getUnits" tag='li' :to='{name:"Unit", params:{unitCode: route } }' :key="route">

          <a>{{route}}</a>
        </router-link>
      </ul>

      <p class="menu-label" style="margin-bottom:-0px;">
        Extra
      </p>
      
      <ul class="menu-list">
        
        <li><a>Following</a></li>
        <li><a>Finished units</a></li>
        <router-link :to="{name: 'purchasedArticles'}" tag='li'><a>Purchased articles</a></router-link>
      </ul>
    </aside>



  </div>

</template>
<script>
import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        isActive: false,
        new:'',
        selected: undefined,

        unitSearch: "s"
      }
    },
    methods: {
 

      selectComponent() {


        console.log(this.$store.getters.getUnits)

      },

    },
    computed: {
        ...mapGetters(['getUnits'])
      }
    

  }

</script>
<style scoped>
  .is-rounded {
    border-radius: 20px;
  }

  .menu-label {

    margin-bottom: 20px;
  }

  .zero {
    margin: 0;
    padding: 0;
  }

  .router-link-active {
    background: rgba(141, 48, 196, 0.8);

    border-radius: 8px;
    color: #fff;
  }

  a:hover {
    background: #da22ff;
    /* fallback for old browsers */
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(left, #da22ff, #9733ee);
    background: -moz-linear-gradient(left, #da22ff, #9733ee);
    background: -o-linear-gradient(left, #da22ff, #9733ee);
    background: linear-gradient(to right, #da22ff, #9733ee);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 8px;
    color: #fff;
  }

  .router-link-active a {
    color: #fff;
    
  }
  .router-link-active{
    background: #9733ee;
    

  }
.hover:hover{
      background: #da22ff;
    /* fallback for old browsers */
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(left, #da22ff, #9733ee);
    background: -moz-linear-gradient(left, #da22ff, #9733ee);
    background: -o-linear-gradient(left, #da22ff, #9733ee);
    background: linear-gradient(to right, #da22ff, #9733ee);

}
</style>
