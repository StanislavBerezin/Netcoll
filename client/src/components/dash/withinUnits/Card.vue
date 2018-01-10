<template>
  <div>

    <div class="card">
      <img src="https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg" alt="Avatar" style="width:100%">
      <div class="container">
          <div>

              
          </div>
        <p style="margin-bottom:5px;">By {{name}}</p>
         <p style="margin-bottom:5px;">{{title}}</p>
        <b-icon icon='account-multiple'>

        </b-icon>
        <span> {{students}} </span>Students
       


        <div class="rating">

          <star-rating :stars="stars" show-grey class="ratings" color="is-info"> </star-rating>
          <h1 class="title is-4"><b>${{price}}</b></h1>
        </div>

      </div>
    </div>

  </div>

</template>
<script>
 import StarRating from '../../../microComponents/Stars.vue'
  export default {
      data(){
          return{
              name: "John Doe",
              title: "Week 7 help",
              students: 70,
              rating: 5,
              price: 5,
              stars: 3
          }
      },
      components:{
          StarRating
      }

  }

</script>
<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    max-width: 200px;
    border: 1px solid rgba(189, 195, 199, .7)
  }

  .card:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 10px;
  }

  .container:nth-child(odd) {
    margin-top: 5px;
  }

  .icon {
    color: rgba(41, 128, 185, 1.0);
  }
.rating{
    margin-top:10px;
}
</style>
