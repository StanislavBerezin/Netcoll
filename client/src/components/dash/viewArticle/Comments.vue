<template>
  <div>
    <div class="selected">

      <div class="comparision">
        <a class="button is-dark is-outlined" @click="selectedComponent='All'" 
        :class ="{active: isActive}">
        <b-icon icon="comment-text-outline"></b-icon> <p>All: 6</p></a>

        <a class="button is-success is-outlined" @click="selectedComponent='Positive'" 
        :class ="{active: isActive}">

       <b-icon icon="comment-plus-outline" class="pos"></b-icon> <p>Positive: 3</p> </a>


        <a class="button is-outlined" @click="selectedComponent='Neutral'" 
        :class ="{active: isActive1}">
       <b-icon icon="comment-outline"></b-icon>  <p> Neutral: 2</p> </a>
      <a class="button is-danger is-outlined" @click="selectedComponent='Negative'" 
        :class ="{active: isActive2}">
       <b-icon icon="comment-remove-outline" class="neg"></b-icon>   <p> Negative: 1</p> </a>

        <a class="button is-white is-static">
         <b-icon icon="comment-text-outline"></b-icon><p>Percentage: 63%</p> </a>
      </div>
      


      


    </div>

    <transition name = "slide-fade">
    <component :is="selectedComponent"></component>
</transition>
  </div>
</template>
<script>
  import Negative from './types/Negative'
  import Neutral from './types/Neutral'
  import Positive from './types/Positive'
  import All from './types/All'
  export default {
    data() {
      return {
        selectedComponent: 'Positive',
        isActive: true,
        isActive1: false,
        isActive2: false
      }
    },
    components: {
      Negative,
      Neutral,
      Positive,
      All
    },
    methods:{
         myFilter: function(){
            this.isActive = !this.isActive;
          
        }
    }

  }

</script>
<style scoped>
.selected{
    margin-bottom:3rem;
}
.comparision{
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(236, 240, 241,1.0);
  padding:20px;
  justify-content: space-between;
  margin-bottom:20px;
}
.comparision a{
  margin: 10px;
}
.pos{
  color:#23d160;
  margin-right:52px;
}
.neg{
  color: #ff3860;
}
.neu{

}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(3.0, 2, 3, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(501px);
  opacity: 0;
}
</style>
