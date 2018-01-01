<template>
  <div class="main">
    <TopSearch></TopSearch>
    <h1 class="subtitle is-3" style="margin-top:20px;">Articles</h1>
    <div class="flex">
      <ul class="listings">
        <li>
          <Card ></Card>
        </li>
        <li>
          <Card ></Card>
        </li>
          <li>
          <Card ></Card>
        </li>
          <li>
          <Card ></Card>
        </li>
          <li>
          <Card ></Card>
        </li>
        
      </ul>

    </div>

  </div>
</template>

<script>
  import TopSearch from './TopSearch'
  import TopUnit from './TopUnit'
  import Card from './Card'
  export default {
    data() {
      return {

      }
    },
    components: {
      TopSearch,
      TopUnit,
      Card
    }
  }

</script>

<style scoped>
.flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}
.flex ul li{
  display: inline-block;
  width: 200px;
  margin: 10px;
}


  @media screen and (max-width: 916px) {
    .flex ul li {
      display: inline-block;
      width: 100%;
      margin: 10px;
    }
  }

</style>
