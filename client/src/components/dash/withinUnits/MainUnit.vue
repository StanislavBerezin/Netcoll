<template>
  <div class="main">
        <TopUnit></TopUnit>

         <h1 class="subtitle is-3" style="margin-top:60px;">Articles</h1>
         
    <div class="flex">
     
          <Card ></Card>
       
          <Card ></Card>
        
          <Card ></Card>
       
          <Card ></Card>
        
          <Card ></Card>
     

    </div>


  </div>
</template>
<script>
  import TopUnit from './TopUnit'
  import Card from './Card'
  export default {
    data() {
      return {

      }
    },
    components: {
      TopUnit,
      Card
    }
  }
</script>
<style scoped>
.flex{
  display: flex;

  justify-content: space-around;
  flex-wrap: wrap;
  


}
.flex > div{
  margin:10px;
  margin-top:10px;
}


  @media screen and (max-width: 916px) {
    .flex ul li {
      display: inline-block;
      width: 100%;
      margin: 10px;
    }
  }

</style>

