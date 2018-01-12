<template>
  <div class="all">
    <div class="set">
      <router-link tag='a' class="button is-link" :to="{name: 'createdArticles'}">Activity of articles</router-link>
      <router-link tag='a' class="button is-link" :to="{name: 'createArticle'}">Create new article</router-link>
      <router-link tag='a' class="button is-link" :to="{name: 'setSession'}">Private tutoring</router-link>
      <router-link tag='a' class="button is-link" :to="{name: 'editUser'}">Edit personal information</router-link>
      <router-link tag='a' class="button is-link" :to="{name: 'income'}">Revenues</router-link>



    </div>

    <div class="componentToggle">
      <router-view></router-view>
    </div>


  </div>

</template>
<script>


  export default {

    data() {
      return {
      
      }
    },
    components: {
   

    }

  }

</script>
<style scoped>
  .all {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .componentToggle {
    grid-column: 2/12;
    margin-top: 2rem;
    margin-bottom:2rem;
  }

  .set {
    grid-column: 1/13;
    display: flex;
    flex-wrap: wrap;
    
    justify-content: space-around;
  }
  .set a {
    flex: 2 1 10%;
  }
.router-link-active{
  background-color:rgba(141,48,196, 0.7);
}
.router-link-active:hover{
  background-color:rgba(141,48,196, 0.7) !important;
}
.router-link:hover{
  background-color:rgba(41, 128, 185,1.0);
}
  .set a {
    margin: 10px;
  }

</style>
