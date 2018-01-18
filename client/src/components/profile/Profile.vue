<template>
  <div>
    <Nav></Nav>
    <div class="grid-wrap">

 
      
      <div class="profile-information" v-if="isGeneral && isOwn">
       <MyGeneral></MyGeneral>
         
      </div>

      <div v-if="isGeneral && !isOwn" class="profile-information">
        <ViewGeneral></ViewGeneral>
      </div>

      <div class="profile-information" v-if="isCreator && !isOwn">
        <ViewCreator></ViewCreator>

      </div>

      <div class="profile-information" v-if="isCreator && isOwn">
        <MyCreator></MyCreator>

      </div>
    </div>
    <Footer></Footer>

  </div>
</template>
<script>
  import Nav from '../dash/Nav'
  import Footer from '../small/Footer'
  import ViewGeneral from './general/ViewGeneral.vue'
  import MyGeneral from './general/MyGeneral.vue'
  import ViewCreator from './creator/ViewCreator.vue'
  import MyCreator from './creator/MyCreator.vue'
  export default {

    components: {
      Nav,
      Footer,
      ViewGeneral,
      MyGeneral,
      MyCreator,
      ViewCreator
    },
    data() {
      return {
        //here you can toggle things
        // if isOwn and isGeneral => means that u own the content of the general profile,
        //if isOwn false and is General, means you are not the owner of the page but can still view it
        isGeneral: false,
        isCreator: true,
        isOwn: false,

        
    }
 

  }
}

</script>
<style scoped>
  .grid-wrap {
    
    margin: 0 auto !important;
    max-width: 1100px;
  }



  .profile-information {
    margin-top: 2rem;
 
  }

 

</style>
