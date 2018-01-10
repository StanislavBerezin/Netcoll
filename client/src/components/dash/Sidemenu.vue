<template>
  <div>
    <aside class="menu">
      <p class="menu-label">
        Search for your units
      </p>
      <ul class="menu-list">
        <li>

          <b-field>
            <b-input placeholder="Search..." type="search" icon="magnify" v-model="unitSearch">
            </b-input>

            <p class="control">
              <router-link class="zero" :to="{name: 'FindUnit', params:{unitCode: unitSearch}}"><button class="button is-success">Search</button></router-link>
            </p>
          </b-field>

        </li>
      </ul>
      <p class="menu-label">
        Your curent units
      </p>

      <ul class="menu-list">

        <router-link v-for="route in units" tag='li' :to='{name:"Unit", params:{unitCode: route } }' :key="route">

          <a>{{route}}</a>
        </router-link>
      </ul>

      <p class="menu-label">
        Articles
      </p>
      <ul class="menu-list">
        <li><a>Following</a></li>
        <router-link :to="{name: 'purchasedArticles'}" tag='li'><a>Purchased articles</a></router-link>
      </ul>
    </aside>


    <button @click="selectComponent"></button>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        units: {
          unitCode1: "CAB202",
          unitCode2: "CAB203",
          unitCode3: "CAB204",
          unitCode4: "IAB330",
        },
        unitCode1: "CAB202",
        unitCode2: "CAB203",
        unitCode3: "CAB204",
        unitCode4: "IAB330",
        isActive: false,
        selected: undefined,

        unitSearch: "s"
      }
    },
    methods: {
      selectComponent() {
       

          console.log(this.$route)
      
      },
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
    background-color: #23d160;
    border-radius: 8px;
    color: #fff;
  }

  a:hover {
    background-color: rgba(39, 174, 96, 1.0);
    border-radius: 8px;
    color: #fff;
  }
  
  .router-link-active a{
    color:#fff;
  }

</style>
