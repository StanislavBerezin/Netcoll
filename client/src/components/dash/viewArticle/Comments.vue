<template>
  <div>
    <div class="selected">



          <p class="subtitle is-4" style="margin-bottom:2rem;">Student feedback</p>
       <div class="flex">
         <div class="overall">
           <h1 class="subtitle is-2">4.6</h1>
           <star-rating :stars="stars" show-grey class="ratings" color="is-info"> </star-rating>
           <p>Average rating</p>

         </div>
         <div class="rest">
           
           
         <div class="wrap-rate"><div @click="loadFeedback('Comment5' , 5)" :class ="{active: !feedback.isStar5, 
         allOp: feedback.All}">
          <progress class="progress is-link" value="15" max="100" tag='a'>30%</progress> 
          <p><small-star :stars="5" show-grey class="ratings" color="is-info"> </small-star>
          <span class="fixp">20%</span></p> </div> <span v-if="feedback.isStar5" class="remove"
          @click = "showAll"><i class="fa fa-times" aria-hidden="true"></i></span></div> 
         
       <div class="wrap-rate"><div @click="loadFeedback('Comment4' , 4)" :class ="{active: !feedback.isStar4, 
       allOp: feedback.All}">
          <progress class="progress is-link" value="15" max="100" tag='a'>30%</progress> 
          <p><small-star :stars="4" show-grey class="ratings" color="is-info"> </small-star>
          <span class="fixp">20%</span></p> </div> <span v-if="feedback.isStar4" class="remove"
          @click = "showAll"><i class="fa fa-times" aria-hidden="true"></i></span></div> 

           <div class="wrap-rate"><div @click="loadFeedback('Comment3' , 3)" :class ="{active: !feedback.isStar3, 
           allOp: feedback.All}">
          <progress class="progress is-link" value="15" max="100" tag='a'>30%</progress> 
          <p><small-star :stars="3" show-grey class="ratings" color="is-info"> </small-star>
          <span class="fixp">20%</span></p> </div> <span v-if="feedback.isStar3" class="remove"
          @click = "showAll"><i class="fa fa-times" aria-hidden="true"></i></span></div> 

           <div class="wrap-rate"><div @click="loadFeedback('Comment2' , 2)" :class ="{active: !feedback.isStar2,
           allOp: feedback.All}">
          <progress class="progress is-link" value="15" max="100" tag='a'>30%</progress> 
          <p><small-star :stars="2" show-grey class="ratings" color="is-info"> </small-star>
          <span class="fixp">20%</span></p> </div> <span v-if="feedback.isStar2" class="remove"
          @click = "showAll"><i class="fa fa-times" aria-hidden="true"></i></span></div> 

           <div class="wrap-rate"><div @click="loadFeedback('Comment1' , 1)" :class ="{active: !feedback.isStar1,
           allOp: feedback.All}">
          <progress class="progress is-link" value="15" max="100" tag='a'>30%</progress> 
          <p><small-star :stars="1" show-grey class="ratings" color="is-info"> </small-star>
          <span class="fixp">20%</span></p> </div> <span v-if="feedback.isStar1" class="remove"
          @click = "showAll"><i class="fa fa-times" aria-hidden="true"></i></span></div> 

 
         
         </div>
          

       </div>
        

      


    </div>

    <transition name = "slide-fade">
    <component :is="selectedComponent"></component>
</transition>
  </div>
</template>
<script>
  import Comment1 from './types/Comment1'
  import Comment2 from './types/Comment2'
  import Comment3 from './types/Comment3'
  import Comment4 from './types/Comment4'
  import Comment5 from './types/Comment5'
  import All from './types/All'
    import StarRating from '../../../microComponents/Stars.vue'
   import smallStar from '../../../microComponents/StarSmall.vue'
  export default {
    data() {
      return {
        selectedComponent: 'Comment1',
        stars:5,
        feedback:{
          isStar1: false,
          isStar2: false,
          isStar3: false,
          isStar4: false,
          isStar5: false,
          All:true
        },
        isRest: false
      }
    },
    components: {
      Comment1,
      Comment2,
      Comment3,
      Comment4,
      Comment5,
      StarRating,
      smallStar,
      All

    },
    methods:{
         loadFeedback(payload, star){
            this.selectedComponent = payload
            for(let star in this.feedback){
              this.feedback[star] = false
            }
            if(star === 5){this.feedback.isStar5 = true}
            if(star === 4){this.feedback.isStar4 = true}
            if(star === 3){this.feedback.isStar3 = true}
            if(star === 2){this.feedback.isStar2 = true}
            if(star === 1){this.feedback.isStar1 = true}
            
            
          
        },
         showAll(){
          for(let star in this.feedback){
              this.feedback[star] = false
              console.log(this.feedback[star])
              this.feedback.All = true
              this.selectedComponent = 'All'
            }

        }
    }

  }

</script>
<style scoped>
.allOp{
  opacity:1 !important
}
.wrap-rate{
  display:flex;
  position: relative;
}
.remove{
  opacity: 1 !important;
  position: absolute;
  right: 0px;;

}
.opacity{
  opacity: 0.20C;
}
.active{
    opacity: 0.30;
}
.fixp{
 margin-left:7px;
 
}
.progress{
  margin: 5px !important;
  min-width: 200px;

}
.rest {
  padding:0px;
  margin:0px;
  display:flex;
  flex-wrap: wrap;
 
}
.rest div{
  width:100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  
 
  
}
.rest div p{
  width:100%; 
 
  flex: 1 1 300px;
  display:flex;
  
  justify-content: center;
}
div.ratings{
  width: auto;
}
.overall{
  min-width:200px;
  text-align: center;
  margin-top:10px;
}
.flex{
  display:flex;
 
}
@media screen and (max-width: 800px) {
   .flex{
      display:flex;
      flex-wrap:wrap;
      justify-content: center;
 
}
  .rest{
    margin-top:1rem;
  }
}
@media screen and (max-width: 1125px) {
  .remove{
  
  right: -7px;;

}
}
@media screen and (max-width: 950px) {
  .remove{
  
  right: -15px;;

}
}
.bar{
  width:100%;
}

.selected{
    margin-bottom:3rem;
}
.comparision{
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(236, 240, 241,1.0);
  border-radius: 20px;
  
  padding:20px;
  justify-content: space-between;
  margin-bottom:20px;
}

.comparision a{
  margin: 10px;
  flex: 1 1 100px;
  opacity: 1 !important;
}
.comparision p{
  opacity: 1 !important;
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
