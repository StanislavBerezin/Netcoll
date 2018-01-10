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
          <div class="flexing">
                 <p class="before">A${{oldPrice}}</p><h1 class="title is-4"> <b>A${{price}}</b></h1>
          </div>
         
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
              price: 4.99,
              stars: 3,
              oldPrice: 7.99
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
    max-width: 210px;
    border: 1px solid rgba(189, 195, 199, .7)
  }

  .card:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    background: rgba(189, 195, 199, 0.3);
    cursor: pointer;
  }

  .container {
    padding: 10px;
    width: 100%;
    max-width: 210px;
  }

  .container:nth-child(odd) {
    margin-top: 5px;
  }

  .icon {
    color: rgba(41, 128, 185, 1.0);
  }

.ratings{
    margin:1rem 0;
    text-align: left;
}
.flexing{
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-end;
}
.before{
    text-decoration: line-through;
    margin-right:7px;
    margin-top:3px;
}
h1{
    text-align:right;
    margin-right:2%;
}
</style>
